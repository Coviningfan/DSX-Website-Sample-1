import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("main > section:first-child");
    let frame = 0;

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
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      hero?.style.removeProperty("--hero-motion");
      document.documentElement.style.removeProperty("--nav-motion");
    };
  }, [pathname]);

  return null;
}
