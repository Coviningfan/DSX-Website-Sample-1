import { serveStatic } from "hono/bun";
import type { ViteDevServer } from "vite";
import { createServer as createViteServer } from "vite";
import config from "./zosite.json";
import { Hono } from "hono";
import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
import { z } from "zod";
import {
  bookingConfig,
  createOutlookEvent,
  formatDateLabel,
  getAvailableSlotsForDate,
  outlookConfigured,
  zonedLocalToUtc,
} from "./backend-lib/outlook-calendar";

// AI agents: read README.md for navigation and contribution guidance.
type Mode = "development" | "production";
const app = new Hono();

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().min(10).max(3000),
  industry: z.string().trim().min(1).max(100),
  employees: z.string().trim().min(1).max(50),
  bestDay: z.string().trim().max(120),
  bestTime: z.string().trim().max(50),
  slotStart: z.string().trim().max(40).optional().default(""),
  slotEnd: z.string().trim().max(40).optional().default(""),
  heardFrom: z.string().trim().max(250),
  website: z.string().max(0).optional(),
});

mkdirSync("./data", { recursive: true });
const contactDb = new Database("./data/contact-submissions.sqlite");
contactDb.run(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    industry TEXT NOT NULL,
    employees TEXT NOT NULL,
    best_day TEXT,
    best_time TEXT,
    heard_from TEXT NOT NULL DEFAULT '',
    slot_start TEXT,
    slot_end TEXT,
    outlook_event_id TEXT
  )
`);
const contactColumns = contactDb.query("PRAGMA table_info(contact_submissions)").all() as Array<{ name: string }>;
const ensureColumn = (name: string, ddl: string) => {
  if (!contactColumns.some((column) => column.name === name)) contactDb.run(ddl);
};
ensureColumn("heard_from", "ALTER TABLE contact_submissions ADD COLUMN heard_from TEXT NOT NULL DEFAULT ''");
ensureColumn("slot_start", "ALTER TABLE contact_submissions ADD COLUMN slot_start TEXT");
ensureColumn("slot_end", "ALTER TABLE contact_submissions ADD COLUMN slot_end TEXT");
ensureColumn("outlook_event_id", "ALTER TABLE contact_submissions ADD COLUMN outlook_event_id TEXT");

function localBusyForDate(dateKey: string): Array<{ start: string; end: string }> {
  const cfg = bookingConfig();
  const rows = contactDb
    .query(`SELECT slot_start, slot_end FROM contact_submissions WHERE slot_start IS NOT NULL AND slot_start != ''`)
    .all() as Array<{ slot_start: string; slot_end: string }>;
  return rows
    .filter((row) => {
      try {
        const key = new Intl.DateTimeFormat("en-CA", {
          timeZone: cfg.timezone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(row.slot_start));
        return key === dateKey;
      } catch {
        return false;
      }
    })
    .map((row) => ({ start: row.slot_start, end: row.slot_end || row.slot_start }));
}

const mode: Mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

/**
 * Add any API routes here.
 */
app.get("/api/hello-zo", (c) => c.json({ msg: "Hello from Zo" }));

app.get("/api/availability", async (c) => {
  const dateKey = (c.req.query("date") || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
    return c.json({ error: "Provide date as YYYY-MM-DD." }, 400);
  }
  const cfg = bookingConfig();
  const [y, m, d] = dateKey.split("-").map(Number);
  const noon = zonedLocalToUtc(y, m, d, 12, 0, cfg.timezone);
  const dateLabel = formatDateLabel(noon, cfg.timezone);
  const { slots, source, timezone } = await getAvailableSlotsForDate(dateKey, localBusyForDate(dateKey));
  return c.json({
    date: dateKey,
    dateLabel,
    timezone,
    source,
    outlookConnected: outlookConfigured(),
    slots,
  });
});

app.post("/api/contact", async (c) => {
  const parsed = contactSchema.safeParse(await c.req.json().catch(() => null));
  if (!parsed.success) {
    return c.json({ error: "Please check the form and try again." }, 400);
  }

  const submission = parsed.data;
  const slotStart = submission.slotStart || "";
  const slotEnd = submission.slotEnd || "";

  if (slotStart && slotEnd) {
    const startMs = Date.parse(slotStart);
    const endMs = Date.parse(slotEnd);
    if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs <= startMs) {
      return c.json({ error: "Please select a valid time from the calendar." }, 400);
    }
    if (startMs < Date.now() + 30 * 60 * 1000) {
      return c.json({ error: "That time is no longer available. Please choose another slot." }, 409);
    }
    const cfg = bookingConfig();
    const dateKey = new Intl.DateTimeFormat("en-CA", {
      timeZone: cfg.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(startMs));
    const { slots } = await getAvailableSlotsForDate(dateKey, localBusyForDate(dateKey));
    if (!slots.some((s) => s.start === slotStart && s.end === slotEnd)) {
      return c.json({ error: "That time was just booked. Please pick another open slot." }, 409);
    }
  }

  let outlookEventId: string | null = null;
  if (slotStart && slotEnd && outlookConfigured()) {
    const event = await createOutlookEvent({
      subject: `DSXEdge consultation — ${submission.company || submission.name}`,
      body: [
        `Consultation request from the DSXEdge website.`,
        ``,
        `Name: ${submission.name}`,
        `Company: ${submission.company}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone}`,
        `Industry: ${submission.industry}`,
        `Employees: ${submission.employees}`,
        `Preferred: ${submission.bestDay} ${submission.bestTime}`,
        ``,
        `Message:`,
        submission.message,
      ].join("\n"),
      start: slotStart,
      end: slotEnd,
      attendeeEmail: submission.email,
      attendeeName: submission.name,
    });
    outlookEventId = event?.id ?? null;
  }

  contactDb.run(
    `INSERT INTO contact_submissions
      (created_at, name, company, email, phone, message, industry, employees, best_day, best_time, heard_from, slot_start, slot_end, outlook_event_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      new Date().toISOString(),
      submission.name,
      submission.company,
      submission.email,
      submission.phone,
      submission.message,
      submission.industry,
      submission.employees,
      submission.bestDay,
      submission.bestTime,
      submission.heardFrom,
      slotStart || null,
      slotEnd || null,
      outlookEventId,
    ],
  );

  return c.json({ ok: true, booked: Boolean(slotStart && slotEnd), outlookEventCreated: Boolean(outlookEventId) }, 201);
});

if (mode === "production") {
  configureProduction(app);
} else {
  await configureDevelopment(app);
}

/**
 * Determine port based on mode. In production, use the published_port if available.
 * In development, always use the local_port.
 * Ports are managed by the system and injected via the PORT environment variable.
 */
const port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : mode === "production"
    ? (config.publish?.published_port ?? config.local_port)
    : config.local_port;

export default { fetch: app.fetch, port, idleTimeout: 255 };

/**
 * Configure routing for production builds.
 *
 * - Streams prebuilt assets from `dist`.
 * - Static files from `public/` are copied to `dist/` by Vite and served at root paths.
 * - Falls back to `index.html` for any other GET so the SPA router can resolve the request.
 */
function configureProduction(app: Hono) {
  app.use("/assets/*", serveStatic({ root: "./dist" }));
  app.get("/favicon.ico", (c) => c.redirect("/favicon.svg", 302));
  app.use(async (c, next) => {
    if (c.req.method !== "GET") return next();

    const path = c.req.path;
    if (path.startsWith("/api/") || path.startsWith("/assets/")) return next();

    const file = Bun.file(`./dist${path}`);
    if (await file.exists()) {
      const stat = await file.stat();
      if (stat && !stat.isDirectory()) {
        return new Response(file);
      }
    }

    return serveStatic({ path: "./dist/index.html" })(c, next);
  });
}

/**
 * Configure routing for development builds.
 *
 * - Boots Vite in middleware mode for transforms.
 * - Static files from `public/` are served at root paths (matching Vite convention).
 * - Mirrors production routing semantics so SPA routes behave consistently.
 */
async function configureDevelopment(app: Hono): Promise<ViteDevServer> {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: "custom",
  });

  app.use("*", async (c, next) => {
    if (c.req.path.startsWith("/api/")) return next();
    if (c.req.path === "/favicon.ico") return c.redirect("/favicon.svg", 302);

    const url = c.req.path;
    try {
      if (url === "/" || url === "/index.html") {
        let template = await Bun.file("./index.html").text();
        template = await vite.transformIndexHtml(url, template);
        return c.html(template, {
          headers: { "Cache-Control": "no-store, must-revalidate" },
        });
      }

      const publicFile = Bun.file(`./public${url}`);
      if (await publicFile.exists()) {
        const stat = await publicFile.stat();
        if (stat && !stat.isDirectory()) {
          return new Response(publicFile, {
            headers: { "Cache-Control": "no-store, must-revalidate" },
          });
        }
      }

      let result;
      try {
        result = await vite.transformRequest(url);
      } catch {
        result = null;
      }

      if (result) {
        return new Response(result.code, {
          headers: {
            "Content-Type": "application/javascript",
            "Cache-Control": "no-store, must-revalidate",
          },
        });
      }

      let template = await Bun.file("./index.html").text();
      template = await vite.transformIndexHtml("/", template);
      return c.html(template, {
        headers: { "Cache-Control": "no-store, must-revalidate" },
      });
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      console.error(error);
      return c.text("Internal Server Error", 500);
    }
  });

  return vite;
}
