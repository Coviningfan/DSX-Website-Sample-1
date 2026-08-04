import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#resources", label: "Resources" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/dsx-logo.webp"
            alt="DSX Edge"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
