import { useEffect, useId, useRef, useState, type Ref } from "react";
import { HOME_CRAWL_INDUSTRIES } from "@/data/industries";

/**
 * Hero footer industry band — intentional caption + continuous text marquee.
 * Design kit: IBM Plex Mono labels, company blue, orange separators.
 */
function IndustrySequence({
  groupRef,
  hidden,
}: {
  groupRef?: Ref<HTMLDivElement>;
  hidden?: boolean;
}) {
  return (
    <div className="industry-marquee-group" ref={groupRef} aria-hidden={hidden || undefined}>
      {HOME_CRAWL_INDUSTRIES.map((industry, index) => (
        <span key={`${industry}-${index}`} className="industry-marquee-label">
          {industry}
          <span className="industry-marquee-sep" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export default function IndustryCarousel() {
  const labelId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const group = firstGroupRef.current;
    if (!track || !group) return;

    const apply = () => {
      const width = group.getBoundingClientRect().width;
      if (width > 1) {
        track.style.setProperty("--marquee-shift", `${Math.ceil(width)}px`);
        track.dataset.ready = "true";
      }
    };

    apply();
    const fonts = "fonts" in document ? document.fonts.ready.then(apply) : Promise.resolve();
    const raf = requestAnimationFrame(() => requestAnimationFrame(apply));
    const ro = new ResizeObserver(apply);
    ro.observe(group);
    window.addEventListener("resize", apply);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", apply);
      void fonts;
    };
  }, []);

  return (
    <div
      className="industry-marquee"
      role="region"
      aria-labelledby={labelId}
      data-paused={paused ? "true" : "false"}
    >
      <div className="industry-marquee-rail" aria-hidden="true" />

      <div className="industry-marquee-inner">
        <div className="industry-marquee-meta">
          <p id={labelId} className="industry-marquee-kicker">
            Industries
          </p>
          <button
            type="button"
            className="industry-marquee-toggle"
            aria-pressed={paused}
            aria-label={paused ? "Resume industry carousel" : "Pause industry carousel"}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>

        <div
          className="industry-marquee-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className="industry-marquee-track">
            <IndustrySequence groupRef={firstGroupRef} />
            <IndustrySequence hidden />
          </div>
        </div>
      </div>

      <ul className="industry-marquee-fallback" role="list">
        {HOME_CRAWL_INDUSTRIES.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </div>
  );
}
