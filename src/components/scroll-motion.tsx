import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollMotion() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section:not(:first-child)"),
    );
    const hero = document.querySelector<HTMLElement>("main > section:first-child");
    let frame = 0;

    sections.forEach((section) => section.setAttribute("data-scroll-motion", ""));
    if (hash) {
      document.getElementById(hash.slice(1))?.classList.add("is-motion-visible");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-motion-visible");
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    sections.forEach((section) => observer.observe(section));

    const render = () => {
      if (hero) {
        const heroDepth = Math.min(
          1,
          Math.max(
            0,
            (window.scrollY - hero.offsetHeight * 0.68) / (hero.offsetHeight * 0.32),
          ),
        );
        hero.style.setProperty("--hero-motion", `${heroDepth}`);
      }

      document.documentElement.style.setProperty(
        "--nav-motion",
        `${Math.min(1, Math.max(0, window.scrollY / 180))}`,
      );
    };

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      sections.forEach((section) => {
        section.removeAttribute("data-scroll-motion");
        section.classList.remove("is-motion-visible");
      });
      hero?.style.removeProperty("--hero-motion");
      document.documentElement.style.removeProperty("--nav-motion");
    };
  }, [pathname, hash]);

  return null;
}
