import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const linkBase =
  "px-3 py-1.5 text-sm rounded-lg transition-colors duration-200";
const activeLink = "text-[#191919] bg-black/5";
const inactiveLink = "text-[#191919]/70 hover:text-[#191919]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-[30px]">
      <div
        className="pointer-events-auto flex items-center gap-6 px-5 py-3 backdrop-blur-[50px] bg-white/30 rounded-2xl border border-black/10 w-fit max-w-[calc(100vw-2rem)]"
        style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.25)" }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/images/pegasus.svg"
            alt="DSX Edge"
            className="w-6 h-6 text-[#191919]"
          />
          <span className="font-semibold text-base tracking-tight text-[#191919]">
            DSX Edge
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/about"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Book A Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-[#191919]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed top-[calc(30px+60px)] left-4 right-4 md:hidden pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-[50px] rounded-2xl border border-black/10 p-4 shadow-lg">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-[#191919]/70 hover:text-[#191919] rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-[#0084FF] rounded-2xl"
              >
                Book A Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
