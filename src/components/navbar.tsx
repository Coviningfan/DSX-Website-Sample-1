import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const linkBase =
  "inline-flex min-h-11 items-center px-3 py-2 text-sm rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]";
const activeLink = "text-[#191919] bg-black/5";
const inactiveLink = "text-[#191919]/70 hover:text-[#191919]";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(pathname === "/");
  const shellRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setHeroVisible(false);
      return;
    }

    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -99% 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const shell = shellRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () => {
      if (!shell) return [] as HTMLElement[];
      return Array.from(
        shell.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => {
        const style = window.getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden";
      });
    };

    requestAnimationFrame(() => {
      const items = getFocusable();
      const firstPanelLink = shell?.querySelector<HTMLElement>("#mobile-nav-panel a");
      (firstPanelLink ?? items[0] ?? toggleRef.current)?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !shell) return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!shell?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.body.style.overflow = "";
      if (previouslyFocused && document.contains(previouslyFocused) && previouslyFocused !== document.body) {
        // Return focus to toggle when menu was opened from it
        toggleRef.current?.focus();
      }
    };
  }, [open]);

  return (
    <header>
      <nav
        data-hero-visible={heroVisible ? "true" : "false"}
        className="site-nav fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pointer-events-none sm:px-4 sm:pt-5"
        aria-label="Primary"
      >
        <div ref={shellRef} className="pointer-events-auto w-full max-w-full sm:w-fit">
          <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/95 px-3 py-1.5 shadow-[0_8px_24px_rgba(25,61,94,0.1)] backdrop-blur-md transition-[background-color,box-shadow] duration-300 sm:w-fit sm:justify-start sm:gap-6 sm:rounded-2xl sm:bg-white/92 sm:px-5 sm:py-2 md:py-2.5">
            <Link
              to="/"
              className="flex min-h-11 shrink-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
              aria-label="DSX Edge home"
            >
              <img
                src="/images/dsx-edge-logo-official.png"
                alt="DSX Edge"
                width="472"
                height="188"
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <div className="hidden items-center gap-1 md:flex">
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

            <div className="hidden items-center gap-2 md:flex">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-[#FC5104FA] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#FC5104] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
              >
                Book a Free Consultation
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="flex size-11 items-center justify-center rounded-xl text-[#191919] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={panelId}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {open && (
            <div
              id={panelId}
              className="mt-2 max-h-[calc(100dvh-5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div id="mobile-nav-panel" className="rounded-2xl border border-black/10 bg-white/98 p-3 shadow-lg backdrop-blur-md">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-base text-[#191919]/70 hover:text-[#191919] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex min-h-12 items-center justify-center gap-1.5 rounded-lg bg-[#FC5104FA] px-4 py-2.5 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                  >
                    Book a Free Consultation
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
