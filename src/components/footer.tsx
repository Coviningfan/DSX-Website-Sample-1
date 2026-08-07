import { Link } from "react-router-dom";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex min-h-11 items-center gap-2.5 mb-4" aria-label="DSX Edge home">
              <img
                src="/images/dsx-edge-logo.png"
                alt="DSX Edge"
                width="735"
                height="339"
                className="h-auto w-36 sm:w-40"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Business communications, rethought. Conversational AI that handles calls,
              texts, and tasks so your team does the work that matters.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-4">
              Pages
            </p>
            <ul className="space-y-2.5">
              {PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    to={page.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="tel:775-624-9424" className="inline-flex min-h-11 items-center hover:text-white transition-colors duration-200">
                  775-624-9424
                </a>
              </li>
              <li>
                <a href="mailto:info@dsxedge.com" className="inline-flex min-h-11 items-center hover:text-white transition-colors duration-200">
                  info@dsxedge.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@dsxedge.com" className="inline-flex min-h-11 items-center hover:text-white transition-colors duration-200">
                  sales@dsxedge.com
                </a>
              </li>
              <li>Reno, Nevada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-8 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} DSX Edge. All rights reserved.</p>
          <div className="flex items-center gap-3" aria-label="Powered by JABV Labs">
            <span className="uppercase tracking-[0.18em] text-white/35">Powered by</span>
            <img
              src="/images/jabv-labs-logo.png"
              alt="JABV Labs"
              className="h-5 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
