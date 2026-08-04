import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex mb-4">
              <img
                src="/images/dsx-logo.webp"
                alt="DSX Edge"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Business telecom built for operations. 3CX deployment, SIP
              trunking, and intelligent routing from Nevada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["3CX Deployment", "SIP Trunking", "AI Receptionist", "CRM Integration"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Case Studies", "Resources", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DSX Edge. Operated from Reno,
            Nevada.
          </p>
          <p className="text-xs text-muted-foreground">
            HIPAA Compliant &bull; SOC 2 Type II &bull; NV Data Residency
          </p>
        </div>
      </div>
    </footer>
  );
}
