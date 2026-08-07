/**
 * Outlook / Microsoft Graph calendar helpers for consultation booking.
 *
 * Env (optional until Outlook is connected):
 *   OUTLOOK_TENANT_ID, OUTLOOK_CLIENT_ID, OUTLOOK_CLIENT_SECRET,
 *   OUTLOOK_CALENDAR_USER, OUTLOOK_TIMEZONE (default America/Los_Angeles),
 *   BOOKING_SLOT_MINUTES (30), BOOKING_START_HOUR (9), BOOKING_END_HOUR (17)
 */

export type TimeSlot = {
  start: string;
  end: string;
  label: string;
};

const DEFAULT_TZ = "America/Los_Angeles";

function env(name: string, fallback = ""): string {
  return (process.env[name] ?? fallback).trim();
}

export function bookingConfig() {
  return {
    timezone: env("OUTLOOK_TIMEZONE", DEFAULT_TZ),
    slotMinutes: Math.max(15, Number(env("BOOKING_SLOT_MINUTES", "30")) || 30),
    startHour: Math.min(23, Math.max(0, Number(env("BOOKING_START_HOUR", "9")) || 9)),
    endHour: Math.min(24, Math.max(1, Number(env("BOOKING_END_HOUR", "17")) || 17)),
    daysAhead: Math.min(90, Math.max(7, Number(env("BOOKING_DAYS_AHEAD", "28")) || 28)),
    calendarUser: env("OUTLOOK_CALENDAR_USER"),
    tenantId: env("OUTLOOK_TENANT_ID"),
    clientId: env("OUTLOOK_CLIENT_ID"),
    clientSecret: env("OUTLOOK_CLIENT_SECRET"),
  };
}

export function outlookConfigured(): boolean {
  const c = bookingConfig();
  return Boolean(c.tenantId && c.clientId && c.clientSecret && c.calendarUser);
}

export function formatTimeLabel(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatDateLabel(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function zonedLocalToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string,
): Date {
  let guess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  for (let i = 0; i < 3; i++) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }).formatToParts(guess);
    const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? "0");
    const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
    const desired = Date.UTC(year, month - 1, day, hour, minute, 0);
    guess = new Date(guess.getTime() + (desired - asUtc));
  }
  return guess;
}

function isWeekendInZone(date: Date, timeZone: string): boolean {
  const wd = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(date);
  return wd === "Sat" || wd === "Sun";
}

export function generateDaySlots(
  dateKey: string,
  timeZone: string,
  slotMinutes: number,
  startHour: number,
  endHour: number,
): TimeSlot[] {
  const [y, m, d] = dateKey.split("-").map(Number);
  if (!y || !m || !d) return [];

  const dayStart = zonedLocalToUtc(y, m, d, 12, 0, timeZone);
  if (isWeekendInZone(dayStart, timeZone)) return [];

  const slots: TimeSlot[] = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += slotMinutes) {
      const endMinute = minute + slotMinutes;
      const endH = hour + Math.floor(endMinute / 60);
      const endM = endMinute % 60;
      if (endH > endHour || (endH === endHour && endM > 0)) continue;

      const start = zonedLocalToUtc(y, m, d, hour, minute, timeZone);
      const end = zonedLocalToUtc(y, m, d, endH, endM, timeZone);
      if (start.getTime() <= Date.now() + 60 * 60 * 1000) continue;

      slots.push({
        start: start.toISOString(),
        end: end.toISOString(),
        label: formatTimeLabel(start, timeZone),
      });
    }
  }
  return slots;
}

function rangesOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && bStart < aEnd;
}

export function filterFreeSlots(slots: TimeSlot[], busy: Array<{ start: string; end: string }>): TimeSlot[] {
  return slots.filter((slot) => {
    const s = Date.parse(slot.start);
    const e = Date.parse(slot.end);
    return !busy.some((b) => rangesOverlap(s, e, Date.parse(b.start), Date.parse(b.end)));
  });
}

let cachedToken: { value: string; exp: number } | null = null;

export async function getGraphToken(): Promise<string | null> {
  const { tenantId, clientId, clientSecret } = bookingConfig();
  if (!tenantId || !clientId || !clientSecret) return null;
  if (cachedToken && cachedToken.exp > Date.now() + 60_000) return cachedToken.value;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    console.error("[outlook] token error", res.status, await res.text());
    return null;
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: data.access_token, exp: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

export async function getOutlookBusy(
  rangeStart: Date,
  rangeEnd: Date,
): Promise<Array<{ start: string; end: string }>> {
  const token = await getGraphToken();
  const { calendarUser } = bookingConfig();
  if (!token || !calendarUser) return [];

  const toGraphUtc = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, "");
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(calendarUser)}/calendar/getSchedule`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schedules: [calendarUser],
        startTime: { dateTime: toGraphUtc(rangeStart), timeZone: "UTC" },
        endTime: { dateTime: toGraphUtc(rangeEnd), timeZone: "UTC" },
        availabilityViewInterval: bookingConfig().slotMinutes,
      }),
    },
  );
  if (!res.ok) {
    console.error("[outlook] getSchedule error", res.status, await res.text());
    return [];
  }

  const data = (await res.json()) as {
    value?: Array<{
      scheduleItems?: Array<{
        start?: { dateTime?: string; timeZone?: string };
        end?: { dateTime?: string; timeZone?: string };
        status?: string;
      }>;
    }>;
  };

  const parseGraph = (dateTime?: string): string => {
    if (!dateTime) return "";
    const cleaned = dateTime.replace(/\.\d+/, "");
    if (/Z$/i.test(cleaned) || /[+-]\d{2}:\d{2}$/.test(cleaned)) return new Date(cleaned).toISOString();
    return new Date(`${cleaned}Z`).toISOString();
  };

  return (data.value?.[0]?.scheduleItems ?? [])
    .filter((item) => item.status && item.status !== "free")
    .map((item) => ({ start: parseGraph(item.start?.dateTime), end: parseGraph(item.end?.dateTime) }))
    .filter((b) => b.start && b.end);
}

export async function createOutlookEvent(input: {
  subject: string;
  body: string;
  start: string;
  end: string;
  attendeeEmail?: string;
  attendeeName?: string;
}): Promise<{ id: string; webLink?: string } | null> {
  const token = await getGraphToken();
  const { calendarUser, timezone } = bookingConfig();
  if (!token || !calendarUser) return null;

  const attendees = input.attendeeEmail
    ? [
        {
          emailAddress: { address: input.attendeeEmail, name: input.attendeeName || input.attendeeEmail },
          type: "required",
        },
      ]
    : [];

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(calendarUser)}/events`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: `outlook.timezone="${timezone}"`,
      },
      body: JSON.stringify({
        subject: input.subject,
        body: { contentType: "Text", content: input.body },
        start: { dateTime: input.start.replace(/\.\d{3}Z$/, "").replace(/Z$/, ""), timeZone: "UTC" },
        end: { dateTime: input.end.replace(/\.\d{3}Z$/, "").replace(/Z$/, ""), timeZone: "UTC" },
        attendees,
        isOnlineMeeting: true,
        onlineMeetingProvider: "teamsForBusiness",
      }),
    },
  );
  if (!res.ok) {
    console.error("[outlook] create event error", res.status, await res.text());
    return null;
  }
  const data = (await res.json()) as { id: string; webLink?: string };
  return { id: data.id, webLink: data.webLink };
}

export async function getAvailableSlotsForDate(
  dateKey: string,
  localBusy: Array<{ start: string; end: string }>,
): Promise<{ slots: TimeSlot[]; source: "outlook" | "local"; timezone: string }> {
  const cfg = bookingConfig();
  const candidates = generateDaySlots(dateKey, cfg.timezone, cfg.slotMinutes, cfg.startHour, cfg.endHour);
  if (candidates.length === 0) {
    return { slots: [], source: outlookConfigured() ? "outlook" : "local", timezone: cfg.timezone };
  }

  let busy = [...localBusy];
  let source: "outlook" | "local" = "local";
  if (outlookConfigured()) {
    const dayStart = new Date(candidates[0].start);
    const dayEnd = new Date(candidates[candidates.length - 1].end);
    busy = [...busy, ...(await getOutlookBusy(dayStart, dayEnd))];
    source = "outlook";
  }

  return { slots: filterFreeSlots(candidates, busy), source, timezone: cfg.timezone };
}
