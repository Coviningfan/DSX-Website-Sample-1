import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";

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
  website: string;
}

const INDUSTRY_OPTIONS = [
  "Automotive", "Construction", "Education", "Financial Services",
  "Healthcare", "Hotels & Hospitality", "Manufacturing", "Professional Services",
  "Real Estate", "Retail", "Transportation & Logistics", "Other",
];

const EMPLOYEE_OPTIONS = [
  "1–10", "11–50", "51–200", "201–500", "500+",
];

export default function AboutPage() {
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", message: "",
    industry: "", employees: "", bestDay: "", bestTime: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            About DSX Edge
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            Serving Businesses Like Yours
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-2xl">
            For nearly 20 years, DSX has helped small and medium businesses grow by applying
            communications technology wisely.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#191919]">Reno, Nevada</p>
                <p className="text-sm text-[#191919]/60">Serving businesses nationwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#191919]">775-624-9424</p>
                <p className="text-sm text-[#191919]/60">Available 24/7 for customers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#191919]">info@dsxedge.com</p>
                <p className="text-sm text-[#191919]/60">Sales: sales@dsxedge.com</p>
                <p className="text-sm text-[#191919]/60">Support: support@dsxedge.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#191919]">We&rsquo;re always on</p>
                <p className="text-sm text-[#191919]/60">Your business never sleeps. Neither do we.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-[#F9F8F6] rounded-2xl p-8 md:p-10">
              <p className="text-lg text-[#191919]/60 leading-relaxed mb-8">
                We are a local team of experienced communications, data, networking, and AI
                professionals. We are not big-company outsiders, and we do not charge consulting
                fees to tell you what you already know. We build cost-effective systems that serve
                the way your business actually works. When our clients succeed, we succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4 text-center">
            Get In Touch
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4 text-center">
            We Want To Hear From You
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-12 text-center">
            Tell us about your business and we&rsquo;ll show you exactly how DSX Edge fits.
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-[#0084FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-[#0084FF]" />
              </div>
              <h3 className="font-bold text-2xl text-[#191919] mb-2">Thanks for reaching out.</h3>
              <p className="text-[#191919]/60">
                Your request has been recorded. DSX Edge will use the contact details and preferred
                time you provided to follow up.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 space-y-6">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Industry</label>
                  <select
                    name="industry"
                    required
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                  >
                    <option value="">Select industry</option>
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Number of Employees</label>
                  <select
                    name="employees"
                    required
                    value={form.employees}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                  >
                    <option value="">Select size</option>
                    {EMPLOYEE_OPTIONS.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191919] mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your business and what you need..."
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Best Day to Reach You</label>
                  <input
                    type="date"
                    name="bestDay"
                    value={form.bestDay}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1.5">Best Times</label>
                  <select
                    name="bestTime"
                    value={form.bestTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
              {submitError && (
                <p role="alert" className="text-sm text-red-700">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
                style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
              >
                {submitting ? "Recording Request…" : "Request My Consultation"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
