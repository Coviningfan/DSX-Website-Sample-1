import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="site-nav fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pointer-events-none sm:px-4 sm:pt-5"
    >
      <div
        ref={menuRef}
        className="pointer-events-auto flex w-full max-w-full items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/92 px-3 py-1.5 shadow-[0_8px_24px_rgba(25,61,94,0.1)] backdrop-blur-xl transition-[background-color,box-shadow] duration-300 sm:w-fit sm:justify-start sm:gap-6 sm:rounded-2xl sm:bg-white/70 sm:px-5 sm:py-2 md:py-3"
      >
        <Link to="/" className="flex min-h-11 shrink-0 items-center" aria-label="DSX Edge home">
          <span className="relative block h-5 w-[58px] overflow-hidden" aria-hidden="true">
            <img
              src="/images/dsx-edge-logo.png"
              alt=""
              className="absolute -left-[8px] -top-[32px] h-auto w-[190px] max-w-none"
            />
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
            to="/about#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Request A Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex size-11 items-center justify-center rounded-xl text-[#191919] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084FF]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="fixed left-3 right-3 top-[calc(max(0.75rem,env(safe-area-inset-top))+3.75rem)] max-h-[calc(100dvh-5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain md:hidden pointer-events-auto sm:left-4 sm:right-4 sm:top-[5.5rem]">
          <div className="bg-white/95 backdrop-blur-[50px] rounded-2xl border border-black/10 p-3 shadow-lg">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center px-3 py-2.5 text-base text-[#191919]/70 hover:text-[#191919] rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex min-h-12 items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-[#0084FF] rounded-2xl"
              >
                Request A Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
