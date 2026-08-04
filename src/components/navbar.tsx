import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", to: "/features" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "pt-[12px] pr-6 flex justify-end"
          : "pt-[30px] flex justify-center"
      }`}
    >
      <div
        className={`flex items-center gap-1 backdrop-blur-[50px] bg-white/30 rounded-2xl border border-black/10 px-2 py-1.5 transition-all duration-500 ${
          isScrolled ? "gap-1 w-fit" : ""
        }`}
        style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.25)" }}
      >
        <Link to="/" className="flex items-center gap-1.5 px-3 py-1.5 shrink-0">
          <img
            src="/images/pegasus.svg"
            alt="DSX Edge"
            className="w-5 h-5"
          />
          <span className="font-bold text-[#191919] text-sm tracking-tight">
            DSX Edge
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[#0084FF] font-medium bg-[#0084FF]/8"
                    : "text-[#191919]/60 hover:text-[#191919]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a
          href="tel:844-379-3343"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-xl hover:scale-[1.02] transition-transform duration-200 shrink-0"
          style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">844-DSX-Edge</span>
          <span className="sm:hidden">Demo</span>
        </a>
      </div>
    </nav>
  );
}
