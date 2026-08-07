import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown, Mail, Phone } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  industry: string;
  employees: string;
  bestDay: string;
  bestTime: string;
  heardFrom: string;
  website: string;
}

const INDUSTRY_OPTIONS = [
  "Automotive", "Construction", "Education", "Financial Services", "Healthcare",
  "Hotels & Hospitality", "Logistics", "Municipalities", "Manufacturing", "Nonprofit",
  "Professional Services", "Real Estate", "Retail", "Transportation", "Wholesale", "Other",
];
const EMPLOYEE_OPTIONS = ["1–10", "11–50", "51–200", "201–500", "500+"];
const TIME_OPTIONS = ["Morning", "Afternoon", "Evening"];

function DownwardSelect({
  id,
  label,
  name,
  value,
  options,
  placeholder,
  required = false,
  onChange,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  onChange: (name: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <label id={`${id}-label`} className="mb-1.5 block text-sm font-medium text-[#191919]">{label}</label>
      <input type="hidden" name={name} value={value} />
      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-labelledby={`${id}-label ${id}`}
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-required={required}
        onClick={() => setOpen((current) => !current)}
        className="form-control flex w-full items-center justify-between gap-3 text-left"
      >
        <span className={value ? "text-[#191919]" : "text-[#191919]/45"}>{value || placeholder}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-[#114CA8] transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div id={listId} role="listbox" aria-labelledby={`${id}-label`} className="select-panel">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => { onChange(name, option); setOpen(false); triggerRef.current?.focus(); }}
              className="select-option"
            >
              <span>{option}</span>
              {value === option && <Check className="h-4 w-4 text-[#FC5104FA]" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", message: "", industry: "",
    employees: "", bestDay: "", bestTime: "", heardFrom: "", website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = (name: string, value: string) => setForm((current) => ({ ...current, [name]: value }));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateField(event.target.name, event.target.value);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.industry || !form.employees) {
      const missingField = !form.industry ? "industry" : "employees";
      setSubmitError(`Please select your ${missingField === "industry" ? "industry" : "company size"}.`);
      document.getElementById(missingField)?.focus();
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn’t record your request. Please try again or call 775-624-9424.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-44 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">Get In Touch</p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[#191919] sm:text-5xl md:text-6xl">We Want To Hear From You</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#191919]/60">Tell us about your business and we&rsquo;ll show you exactly how DSX Edge fits.</p>
            <div className="mt-10 space-y-4 border-t border-[#191919]/12 pt-8 text-sm">
              <a href="tel:7756249424" className="flex min-h-11 items-center gap-3 font-medium text-[#191919] hover:text-[#FC5104FA]"><Phone className="h-5 w-5 text-[#114CA8]" aria-hidden="true" />775-624-9424</a>
              <a href="mailto:info@dsxedge.com" className="flex min-h-11 items-center gap-3 font-medium text-[#191919] hover:text-[#FC5104FA]"><Mail className="h-5 w-5 text-[#114CA8]" aria-hidden="true" />info@dsxedge.com</a>
            </div>
          </div>

          {submitted ? (
            <div className="self-start rounded-2xl border border-[#191919]/12 bg-[#F9F8F6] p-8 text-center sm:p-12" role="status">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#114CA8]/10"><Check className="h-8 w-8 text-[#114CA8]" aria-hidden="true" /></div>
              <h2 className="text-2xl font-bold text-[#191919]">Thanks for reaching out.</h2>
              <p className="mt-2 text-[#191919]/60">Your request has been recorded. DSX Edge will use the details and preferred time you provided to follow up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-[#191919]/12 bg-[#F9F8F6] p-5 sm:p-8 md:p-10" noValidate={false}>
              <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="name" className="form-label">Name</label><input id="name" name="name" required value={form.name} onChange={handleChange} className="form-control" autoComplete="name" placeholder="Your name" /></div>
                <div><label htmlFor="company" className="form-label">Company</label><input id="company" name="company" required value={form.company} onChange={handleChange} className="form-control" autoComplete="organization" placeholder="Your company" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="email" className="form-label">Email</label><input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="form-control" autoComplete="email" inputMode="email" placeholder="you@company.com" /></div>
                <div><label htmlFor="phone" className="form-label">Phone</label><input id="phone" type="tel" name="phone" required value={form.phone} onChange={handleChange} className="form-control" autoComplete="tel" inputMode="tel" placeholder="(555) 123-4567" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <DownwardSelect id="industry" label="Industry" name="industry" value={form.industry} options={INDUSTRY_OPTIONS} placeholder="Select industry" required onChange={updateField} />
                <DownwardSelect id="employees" label="Number of Employees" name="employees" value={form.employees} options={EMPLOYEE_OPTIONS} placeholder="Select size" required onChange={updateField} />
              </div>
              <div><label htmlFor="message" className="form-label">Message</label><textarea id="message" name="message" required minLength={10} rows={4} value={form.message} onChange={handleChange} className="form-control resize-y" placeholder="Tell us about your business and what you need..." /></div>
              <div><label htmlFor="heardFrom" className="form-label">How did you hear from us?</label><input id="heardFrom" name="heardFrom" value={form.heardFrom} onChange={handleChange} className="form-control" placeholder="Tell us in your own words" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="bestDay" className="form-label">Best Day to Reach You</label><input id="bestDay" name="bestDay" value={form.bestDay} onChange={handleChange} className="form-control" placeholder="e.g. Tuesday or August 18" /></div>
                <DownwardSelect id="bestTime" label="Best Times" name="bestTime" value={form.bestTime} options={TIME_OPTIONS} placeholder="Select a time" onChange={updateField} />
              </div>
              {submitError && <p role="alert" className="text-sm font-medium text-red-700">{submitError}</p>}
              <p className="text-xs leading-relaxed text-[#191919]/55">We use the information you provide only to respond to your request and arrange a conversation about DSX Edge.</p>
              <button type="submit" disabled={submitting} className="consultation-action flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FC5104FA] px-6 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#114CA8] disabled:opacity-60">
                {submitting ? "Recording Request…" : "Request My Consultation"}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
