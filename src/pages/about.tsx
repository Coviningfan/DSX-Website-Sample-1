import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Clock, Calendar } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  employees: string;
  bestTime: string;
  bestNumber: string;
  message: string;
}

const INDUSTRY_OPTIONS = [
  "Automotive", "Construction", "Education", "Financial Services",
  "Healthcare", "Hotels & Hospitality", "Manufacturing", "Nonprofit",
  "Professional Services", "Real Estate", "Retail & Wholesale",
  "Transportation & Logistics", "Distribution", "Municipalities & Government",
  "Other",
];

const EMPLOYEE_OPTIONS = ["1-5", "6-15", "16-50", "51-200", "201-500", "500+"];

const TIME_OPTIONS = [
  "Morning (8am – 12pm)",
  "Early Afternoon (12pm – 3pm)",
  "Late Afternoon (3pm – 6pm)",
  "Anytime during business hours",
];

const INITIAL_FORM: FormData = {
  name: "", email: "", phone: "", company: "",
  industry: "", employees: "", bestTime: "", bestNumber: "", message: "",
};

export default function AboutPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-[#191919] mb-6">
              We want to hear from you.
            </h1>
            <p className="text-lg text-[#191919]/60 leading-relaxed max-w-2xl mx-auto">
              Tell us about your business and we will show you exactly how DSX Edge works
              for your industry, your customers, and your bottom line.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#F9F8F6] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-[#0084FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-[#0084FF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#191919] mb-3">Thank you.</h2>
                  <p className="text-[#191919]/60 leading-relaxed max-w-md mx-auto">
                    We will reach out within one business day to schedule a live demo
                    at your convenience. No pressure, no pitch — just real technology
                    solving real problems.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">Name</label>
                      <input
                        type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">Email</label>
                      <input
                        type="email" name="email" required
                        value={form.email} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">Company</label>
                      <input
                        type="text" name="company"
                        value={form.company} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">Phone</label>
                      <input
                        type="tel" name="phone" required
                        value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">Industry</label>
                      <select
                        name="industry" required
                        value={form.industry} onChange={handleChange}
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
                        name="employees" required
                        value={form.employees} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                      >
                        <option value="">Select size</option>
                        {EMPLOYEE_OPTIONS.map((e) => (
                          <option key={e} value={e}>{e}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">
                        Best time to reach you
                      </label>
                      <select
                        name="bestTime" required
                        value={form.bestTime} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                      >
                        <option value="">Select time window</option>
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#191919] mb-1.5">
                        Best number to reach you
                      </label>
                      <input
                        type="tel" name="bestNumber"
                        value={form.bestNumber} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200"
                        placeholder="If different from above"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#191919] mb-1.5">Message</label>
                    <textarea
                      name="message" required
                      rows={4}
                      value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#191919] text-sm focus:outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your business and what you need..."
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
                      style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalendarOpen(!calendarOpen)}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-[#191919] bg-[#F4F3F3] hover:bg-[#eaeaea] rounded-2xl transition-colors duration-200"
                    >
                      <Calendar className="w-4 h-4" />
                      Book a Call Instead
                    </button>
                  </div>
                  {calendarOpen && (
                    <div className="mt-6 p-8 bg-[#F9F8F6] rounded-2xl border border-gray-200">
                      <h3 className="font-semibold text-[#191919] mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0084FF]" />
                        Schedule Your Demo
                      </h3>
                      <p className="text-sm text-[#191919]/60 mb-6">
                        Pick a day and time that works for you. We will call you at the number
                        you provided for a 20-minute live demo — no slides, no sales deck.
                        Just real AI handling real business.
                      </p>
                      <div className="grid grid-cols-5 gap-2 mb-4">
                        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            className="px-3 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-xl hover:border-[#0084FF] hover:text-[#0084FF] transition-all duration-200"
                          >
                            <div className="text-xs text-[#191919]/40 mb-0.5">{day}</div>
                            {(() => { const today = new Date(); const monday = today.getDate() - today.getDay() + 1; return <div className="text-sm">{monday + ["Mon","Tue","Wed","Thu","Fri"].indexOf(day)}</div>; })()}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-[#191919]/40">
                        Select a day to see available times. Or call 844-DSX-EDGE now for an instant live demo.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="font-semibold text-[#191919] mb-4">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#191919]">DSX Edge</p>
                      <p className="text-sm text-[#191919]/60">Reno, Nevada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#191919]">844-DSX-EDGE</p>
                      <p className="text-sm text-[#191919]/60">Call for a live demo, now.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0084FF] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#191919]">hello@dsxedge.com</p>
                      <p className="text-sm text-[#191919]/60">We respond within one business day.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#191919] mb-4">Serving Businesses Since 2006</h3>
                <p className="text-sm text-[#191919]/60 leading-relaxed">
                  DSX Edge brings two decades of telecommunications expertise to the AI era.
                  We build business phone systems that think, respond, and act — so your
                  team can focus on the work that builds your business.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#191919] mb-4">What Happens Next</h3>
                <div className="space-y-3">
                  {[
                    { step: "1", label: "We call you at your best time." },
                    { step: "2", label: "You tell us about your business." },
                    { step: "3", label: "We show you DSX Edge live." },
                    { step: "4", label: "You hear it handle real calls." },
                    { step: "5", label: "If it fits, we configure your system." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0084FF]/10 text-[#0084FF] text-xs font-semibold flex items-center justify-center shrink-0">
                        {s.step}
                      </span>
                      <span className="text-sm text-[#191919]/70">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
