import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type PrimaryCtaProps = {
  to?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-[#FC5104FA] text-white hover:bg-[#FC5104] focus-visible:outline-[#114CA8]",
  secondary:
    "border border-[#102b43]/18 bg-white text-[#102b43] hover:bg-[#f6f8fa] focus-visible:outline-[#114CA8]",
  dark: "bg-[#191919] text-white hover:bg-[#102b43] focus-visible:outline-[#114CA8]",
};

/**
 * Shared consultation / action control — 44px min height, visible focus, consistent radius.
 */
export default function PrimaryCta({
  to = "/contact",
  href,
  children = "Book a Free Consultation",
  className,
  variant = "primary",
  showArrow = true,
  type = "button",
  disabled,
  onClick,
}: PrimaryCtaProps) {
  const classes = cn(
    "consultation-action inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </>
  );

  if (type === "submit") {
    return (
      <button type="submit" className={classes} disabled={disabled} onClick={onClick}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
