import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export default function ScrollMotion() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section:not(:first-child)"),
    );
    const hero = document.querySelector<HTMLElement>("main > section:first-child");
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
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
      currentScroll = finePointer
        ? currentScroll + (targetScroll - currentScroll) * 0.12
        : targetScroll;

      const viewportHeight = window.innerHeight;
      sections.forEach((section) => {
        const documentTop = section.getBoundingClientRect().top + window.scrollY;
        const visualTop = documentTop - currentScroll;
        const progress = clamp(
          (viewportHeight - visualTop) / (viewportHeight + section.offsetHeight),
        );
        section.style.setProperty("--motion-y", `${14 - progress * 24}px`);
        section.style.setProperty("--motion-scale", `${0.992 + progress * 0.008}`);
      });

      if (hero) {
        const heroDepth = clamp(
          (currentScroll - hero.offsetHeight * 0.68) / (hero.offsetHeight * 0.32),
        );
        hero.style.setProperty("--hero-motion", `${heroDepth}`);
      }

      document.documentElement.style.setProperty(
        "--nav-motion",
        `${clamp(currentScroll / 180)}`,
      );

      if (Math.abs(targetScroll - currentScroll) > 0.1) {
        frame = requestAnimationFrame(render);
      }
    };

    const update = () => {
      targetScroll = window.scrollY;
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
        section.style.removeProperty("--motion-y");
        section.style.removeProperty("--motion-scale");
      });
      hero?.style.removeProperty("--hero-motion");
      document.documentElement.style.removeProperty("--nav-motion");
    };
  }, [pathname, hash]);

  return null;
}
