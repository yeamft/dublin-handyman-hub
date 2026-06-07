import { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_45%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]" />
      <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 mx-auto max-w-2xl text-primary-foreground/80 text-base md:text-lg">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}