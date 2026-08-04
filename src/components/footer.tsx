import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  {
    label: "Product",
    items: [
      { label: "Features", href: "#departments" },
      { label: "Industries", href: "#industries" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-bold text-[#191919]">DSX Edge</span>
            </div>
            <p className="mt-2 text-sm text-[#191919]/60 leading-relaxed">
              AI that answers the phone — and a lot more. Built inside a working telecom.
            </p>
          </div>
          <div className="flex gap-16 sm:gap-20">
            {FOOTER_LINKS.map((group) => (
              <div key={group.label}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#191919]/40">
                  {group.label}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-[#191919]/60 hover:text-[#191919] transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#191919]/40">
            &copy; {new Date().getFullYear()} DSX Edge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="tel:+18443793343"
              className="text-xs text-[#191919]/50 hover:text-[#191919] transition-colors duration-200"
            >
              844-DSX-Edge
            </a>
            <a
              href="mailto:hello@dsxedge.com"
              className="text-xs text-[#191919]/50 hover:text-[#191919] transition-colors duration-200"
            >
              hello@dsxedge.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
