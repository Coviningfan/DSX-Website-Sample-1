import SignalOrb from "./signal-orb";
import "./dsx-edge-hero.css";

export default function DsxEdgeHero() {
  return (
    <section
      className="dsx-edge-hero"
      aria-labelledby="dsx-edge-hero-title"
    >
      <div
        className="dsx-edge-hero__background"
        aria-hidden="true"
      >
        <div className="dsx-edge-hero__background-fill" />

        <div className="dsx-edge-hero__background-frame">
          <img
            src="/images/dsx-edge-tunnel.png"
            alt=""
          />
        </div>
      </div>

      <div
        className="dsx-edge-hero__readability"
        aria-hidden="true"
      />


      <div className="dsx-edge-hero__layout">
        <div className="dsx-edge-hero__copy">
          <p className="dsx-edge-hero__eyebrow">
            Business communications that drive profit
          </p>

          <h1 id="dsx-edge-hero-title">
            Every Department.
            <br />
            Every Function.
            <br />
            <span>24/7.</span>
          </h1>

          <p className="dsx-edge-hero__summary">
            DSX Edge answers, understands, routes,
            schedules, updates, follows up, and acts
            across your business.
          </p>

          <div className="dsx-edge-hero__actions">
            <a
              className="dsx-edge-hero__button dsx-edge-hero__button--primary"
              href="tel:8443793343"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>

              <span>
                <strong>
                  Call the live demonstration
                </strong>
                <small>
                  844-DSX-EDGE · 844-379-3343
                </small>
              </span>
            </a>

            <a
              className="dsx-edge-hero__button dsx-edge-hero__button--secondary"
              href="#contact"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="16"
                  rx="2"
                />
                <path d="M16 3v4M8 3v4M3 11h18" />
              </svg>

              <span>
                <strong>
                  Book a consultation
                </strong>
                <small>
                  Free, no obligation
                </small>
              </span>
            </a>
          </div>
        </div>

        <div className="dsx-edge-hero__visual">
          <SignalOrb />
        </div>
      </div>

      <div
        className="dsx-edge-hero__proof"
        aria-label="DSX Edge proof points"
      >
        <div>
          <strong>99.9%</strong>
          <span>Uptime SLA</span>
        </div>

        <div>
          <strong>12+ years</strong>
          <span>
            Deploying business communications
          </span>
        </div>

        <div>
          <strong>100K+/mo</strong>
          <span>Minutes on one platform</span>
        </div>

        <div>
          <strong>3CX</strong>
          <span>Platinum partner platform</span>
        </div>
      </div>
    </section>
  );
}
