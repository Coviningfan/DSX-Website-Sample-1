import { Link } from "react-router-dom";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center gap-2.5 mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="DSXEdge home"
            >
              <img
                src="/images/dsx-edge-logo-official.png"
                alt="DSXEdge"
                width="472"
                height="188"
                className="h-10 w-auto sm:h-12"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Business communications, rethought. Conversational AI that handles calls,
              texts, and tasks so your team does the work that matters.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">
              Pages
            </p>
            <ul className="space-y-2.5">
              {PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    to={page.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/60 transition-colors duration-200 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href="tel:7756249424"
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  775-624-9424
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dsxedge.com"
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  info@dsxedge.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@dsxedge.com"
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  sales@dsxedge.com
                </a>
              </li>
              <li className="min-h-11 flex items-center">Reno, Nevada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-5 border-t border-white/10 pt-8 text-center text-xs text-white/30 sm:grid-cols-[1fr_auto_1fr] sm:text-left">
          <p>&copy; {new Date().getFullYear()} DSXEdge. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2.5" aria-label="Powered by JABV Labs">
            <span className="uppercase tracking-[0.14em] text-white/40">Powered by</span>
            <img
              src="/images/jabv-labs-logo.png"
              alt="JABV Labs"
              width="613"
              height="135"
              loading="lazy"
              className="h-5 w-auto sm:h-6"
            />
          </div>
          <p className="sm:text-right">Every Department, Every Function, 24/7.</p>
        </div>
      </div>
    </footer>
  );
}
