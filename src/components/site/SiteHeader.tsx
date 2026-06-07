import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-smooth group-hover:scale-105">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-dark-gray md:text-lg">Fix It Dublin</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Handyman Services</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="px-3 py-2 text-sm font-medium transition-smooth"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Book Service</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-secondary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground/90 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Service</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}