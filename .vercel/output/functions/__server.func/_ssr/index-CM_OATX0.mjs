import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-BiDOj-Nv.mjs";
import { s as services } from "./services-data-BbHGALVh.mjs";
import { h as heroImg } from "./hero-handyman-BDaGeLWk.mjs";
import "../_libs/sonner.mjs";
import { e as ArrowRight, P as Phone, C as CircleCheck, d as Star, q as ShieldCheck, u as BadgeEuro, v as Hammer, f as Clock, c as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const whyUs = [{
  icon: ShieldCheck,
  title: "Reliable Service",
  desc: "Punctual, vetted tradespeople you can trust in your home."
}, {
  icon: BadgeEuro,
  title: "Affordable Pricing",
  desc: "Transparent quotes with no hidden fees — ever."
}, {
  icon: Hammer,
  title: "Skilled Workmanship",
  desc: "Decades of combined experience across every trade."
}, {
  icon: Clock,
  title: "Fast Response Times",
  desc: "Most jobs scheduled within 24–48 hours."
}, {
  icon: MapPin,
  title: "Local Dublin Experts",
  desc: "Dublin born and based — we know the local stock."
}];
const testimonials = [{
  name: "Sarah O'Connor",
  area: "Rathmines, D6",
  text: "Fixed three jobs in one visit — painting, a wobbly banister and a leaking tap. Spotless and on time."
}, {
  name: "Liam Byrne",
  area: "Clontarf, D3",
  text: "Great value and proper craftsmanship. The garden looks transformed. Highly recommend."
}, {
  name: "Aoife Murphy",
  area: "Stoneybatter, D7",
  text: "Polite, tidy and properly skilled. Already booked them for the next room."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden gradient-hero text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-glow/15 blur-3xl", style: {
        animation: "float 7s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto grid gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hero-badge inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" }),
            " Trusted across Dublin since 2014"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-h1 mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: [
            "Reliable Handyman ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
            "Services Across",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block text-primary-glow", children: [
              "Dublin",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary-glow/60", style: {
                animation: "hero-fade-right 0.8s cubic-bezier(0.22,1,0.36,1) 1s both"
              } })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-sub mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg", children: "Professional home repairs, painting, gardening, and carpentry — done right, on time, and at fair Dublin prices." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-btns mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", className: "hero-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
              "Get a Free Quote ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outlineHero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a Service" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "xl", className: "text-primary-foreground hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+353871234567", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              " Call Now"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-trust mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70", children: ["Fully insured", "Free quotes", "5-star rated"].map((label, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", style: {
            animation: `hero-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) ${0.95 + i * 0.12}s both`
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary-glow" }),
            " ",
            label
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-img relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-3xl bg-primary/25 blur-3xl", style: {
            animation: "glow-pulse 3s ease-in-out infinite"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-float relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, width: 1600, height: 1200, alt: "Professional Fix It Dublin handyman ready to help", className: "relative rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3] ring-1 ring-white/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-rating absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-2xl bg-background text-foreground px-4 py-3 shadow-elegant", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "4.9 / 5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "200+ Dublin reviews" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -right-4 hidden md:flex flex-col items-center justify-center h-20 w-20 rounded-full bg-primary shadow-glow text-primary-foreground text-center", style: {
              animation: "badge-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 1.3s both"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold leading-none", children: "500+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-wide opacity-80 leading-tight", children: "Jobs done" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Why Fix It Dublin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "The handyman you'd recommend to your neighbour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We built Fix It Dublin to be the easy, reliable choice for Dublin homes — clear pricing, real craftsmanship, and friendly service." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: whyUs.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold text-dark-gray", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: w.desc })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Our Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "Everything your home needs, one trusted team" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
          "View all services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "group block overflow-hidden rounded-2xl bg-card border border-border shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, loading: "lazy", width: 1200, height: 900, className: "h-full w-full object-cover transition-smooth group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-dark-gray", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: s.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Customer Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "Dublin homeowners trust us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground leading-relaxed", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.area })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl", children: "Ready to get it fixed?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/80", children: "Tell us about your job — we'll come back with a free, no-obligation quote within hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get a Free Quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outlineHero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+353871234567", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " +353 87 123 4567"
          ] }) })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
