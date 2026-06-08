import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { W as Wrench, X, M as Menu, F as Facebook, I as Instagram, a as MessageCircle, P as Phone, b as Mail, c as MapPin, B as Bot, S as Send, A as ArrowUp } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
const appCss = "/assets/styles-CA25bjOC.css";
function reportError(error) {
  if (typeof window === "undefined") return;
  console.error(error);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-smooth font-semibold",
        outlineHero: "border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-dark-gray transition-smooth font-semibold",
        dark: "bg-dark-gray text-primary-foreground hover:bg-dark-gray/90 shadow-card hover:shadow-elegant transition-smooth font-semibold"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-8 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card" : "bg-background/60 backdrop-blur-sm"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-smooth group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-dark-gray md:text-lg", children: "Fix It Dublin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Handyman Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              activeOptions: { exact: n.to === "/" },
              activeProps: { className: "text-primary" },
              inactiveProps: { className: "text-foreground/80 hover:text-primary" },
              className: "px-3 py-2 text-sm font-medium transition-smooth",
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book Service" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "lg:hidden grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-secondary",
              onClick: () => setOpen((o) => !o),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto flex flex-col gap-1 px-4 py-4", children: [
          nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              activeOptions: { exact: n.to === "/" },
              activeProps: { className: "bg-secondary text-primary" },
              className: "px-3 py-3 rounded-md text-sm font-medium text-foreground/90 hover:bg-secondary",
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setOpen(false), children: "Book Service" }) })
        ] }) })
      ]
    }
  );
}
const services = [
  "Home Repairs",
  "Painting Services",
  "Gardening Services",
  "Carpentry Services",
  "Property Maintenance",
  "General Handyman"
];
const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-dark-gray text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: "Fix It Dublin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-primary-foreground/70 leading-relaxed", children: "Reliable home repairs, painting, gardening & carpentry services across Dublin. Professional workmanship, fair pricing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "Facebook", href: "https://facebook.com", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "Instagram", href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "WhatsApp", href: "https://wa.me/353871234567", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-primary-foreground", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: quickLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-primary-foreground/70 hover:text-primary-foreground transition-smooth", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-primary-foreground", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-primary-foreground/70", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-primary-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+353871234567", className: "hover:text-primary-foreground", children: "+353 87 123 4567" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:jim.obrien61@gmail.com", className: "hover:text-primary-foreground", children: "jim.obrien61@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dublin, Ireland" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Fix It Dublin. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fix It Dublin – Reliable Home Repairs, Painting, Gardening & Carpentry Services Across Dublin." })
    ] })
  ] }) });
}
const GREETING = {
  from: "bot",
  text: "👋 Hi! I'm the Fix It Dublin assistant. What can I help you with today?",
  links: [
    { label: "Our Services", to: "/services" },
    { label: "Get a Quote", to: "/contact" },
    { label: "Book Appointment", to: "/contact" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "About Us", to: "/about" },
    { label: "Testimonials", to: "/testimonials" }
  ]
};
function detectIntent(input) {
  const t = input.toLowerCase();
  if (/\b(hi|hello|hey|hiya|howya)\b/.test(t)) return "hello";
  if (/service|repair|paint|garden|carpent|handyman|mainten|fix/.test(t)) return "services";
  if (/quote|estimate|price|cost|how much|fee|charge/.test(t)) return "quote";
  if (/book|appoint|schedul|call|ring|phone|contact|reach|email/.test(t)) return "contact";
  if (/about|who|team|company|founded|since/.test(t)) return "about";
  if (/portfolio|work|project|photo|gallery|example/.test(t)) return "portfolio";
  if (/area|location|where|dublin|cover|zone|district/.test(t)) return "location";
  if (/hour|open|time|availab|when/.test(t)) return "hours";
  if (/review|testimonial|rating|feedback|customer/.test(t)) return "testimonials";
  return "unknown";
}
const RESPONSES = {
  hello: {
    from: "bot",
    text: "Hello there! 😊 Great to hear from you. How can Fix It Dublin help you today?",
    links: [
      { label: "View Services", to: "/services" },
      { label: "Get a Free Quote", to: "/contact" }
    ]
  },
  services: {
    from: "bot",
    text: "We offer a wide range of services across Dublin:\n\n• 🔧 Home Repairs\n• 🎨 Painting (interior & exterior)\n• 🌿 Gardening & Landscaping\n• 🪚 Carpentry\n• 🏠 Property Maintenance\n• 🔨 General Handyman",
    links: [{ label: "See All Services", to: "/services" }]
  },
  quote: {
    from: "bot",
    text: "We offer free, no-obligation quotes! 💶 Our pricing is fully transparent with no hidden fees. Fill in a quick form and we'll get back to you within hours.",
    links: [{ label: "Get a Free Quote", to: "/contact" }]
  },
  contact: {
    from: "bot",
    text: "You can reach us by:\n\n📞 Phone: +353 87 123 4567\n📧 Email: jim.obrien61@gmail.com\n\nOr use our contact form to book an appointment or request a quote.",
    links: [{ label: "Contact / Book", to: "/contact" }]
  },
  about: {
    from: "bot",
    text: "Fix It Dublin has been serving Dublin homes since 2014. We're a fully insured, locally based team of trusted tradespeople with 500+ jobs completed and a 4.9 ⭐ rating.",
    links: [{ label: "About Us", to: "/about" }]
  },
  portfolio: {
    from: "bot",
    text: "Check out our portfolio to see completed projects — from kitchen renovations and garden makeovers to carpentry and paintwork. 📸",
    links: [{ label: "View Portfolio", to: "/portfolio" }]
  },
  pricing: {
    from: "bot",
    text: "Our pricing is transparent with no hidden fees. We offer hourly rates or fixed project pricing depending on the job. Request a free quote for an exact figure.",
    links: [{ label: "Get a Quote", to: "/contact" }]
  },
  location: {
    from: "bot",
    text: "We cover all areas across Dublin 🗺️ — from Clontarf and Rathmines to Stoneybatter, Ballsbridge, Dundrum, and beyond. If you're in Dublin, we can help!",
    links: [{ label: "Contact Us", to: "/contact" }]
  },
  hours: {
    from: "bot",
    text: "We're available Monday to Saturday, 8am–6pm. Most jobs can be scheduled within 24–48 hours. ⏰",
    links: [{ label: "Book Now", to: "/contact" }]
  },
  testimonials: {
    from: "bot",
    text: "We're proud of our 4.9 ⭐ rating from 200+ Dublin homeowners. Our customers love our punctuality, clean work, and fair pricing. 💬",
    links: [{ label: "Read Reviews", to: "/testimonials" }]
  },
  unknown: {
    from: "bot",
    text: "I'm not sure about that one, but I can point you in the right direction! Here's what I can help with:",
    links: [
      { label: "Our Services", to: "/services" },
      { label: "Get a Quote", to: "/contact" },
      { label: "About Us", to: "/about" }
    ]
  }
};
function FloatingActions() {
  const [showTop, setShowTop] = reactExports.useState(false);
  const [chatOpen, setChatOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([GREETING]);
  const [input, setInput] = reactExports.useState("");
  const bottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);
  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { from: "user", text: trimmed };
    const intent = detectIntent(trimmed);
    const botReply = RESPONSES[intent];
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3", children: [
    chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex w-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Fix It Dublin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-white/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-400 inline-block" }),
            " Online now"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setChatOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 overflow-y-auto p-4 h-80", children: [
        messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-1.5", msg.from === "user" ? "items-end" : "items-start"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
            "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
            msg.from === "bot" ? "rounded-tl-sm bg-slate-100 text-foreground" : "rounded-tr-sm bg-primary text-white"
          ), children: msg.text }),
          msg.links && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 max-w-[85%]", children: msg.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setChatOpen(false),
              className: "rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-colors",
              children: l.label
            },
            l.label
          )) })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-t border-border bg-slate-50/60 px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && send(),
            placeholder: "Ask me anything…",
            className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: send,
            className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-40",
            disabled: !input.trim(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setChatOpen((v) => !v),
        "aria-label": "Open chat",
        className: "grid h-14 w-14 place-items-center rounded-full gradient-primary text-white shadow-glow hover:scale-110 transition-smooth relative",
        children: [
          chatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
          !chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white", children: "1" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Back to top",
        className: cn(
          "grid h-12 w-12 place-items-center rounded-full bg-dark-gray text-primary-foreground shadow-elegant transition-smooth hover:scale-110",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-5 w-5" })
      }
    )
  ] });
}
const COUNT = 35;
const CONNECT_DIST = 150;
const CURSOR_CONNECT_DIST = 180;
const REPEL_DIST = 100;
const DOT = "66, 105, 200";
const LINE = "66, 105, 200";
const CUR = "66, 105, 200";
function make(w, h) {
  const vx = (Math.random() - 0.5) * 0.35;
  const vy = (Math.random() - 0.5) * 0.35;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx,
    vy,
    baseVx: vx,
    baseVy: vy,
    r: Math.random() * 2 + 1.5,
    // 1.5 – 3.5 px
    alpha: Math.random() * 0.35 + 0.25,
    // much more visible
    pulse: Math.random() * Math.PI * 2
  };
}
function ParticleBackground() {
  const canvasRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: -9999, y: -9999 });
  const tickRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf;
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: COUNT }, () => make(canvas.width, canvas.height));
    };
    const HOVER_RADIUS = 25;
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const nearParticle = particles.some((p) => {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        return Math.sqrt(dx * dx + dy * dy) < HOVER_RADIUS;
      });
      document.body.style.cursor = nearParticle ? "pointer" : "";
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      document.body.style.cursor = "";
    };
    const draw = () => {
      tickRef.current += 0.012;
      const tick = tickRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const r = p.r + Math.sin(tick + p.pulse) * 0.3;
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        if (cdist < REPEL_DIST && cdist > 0) {
          const force = (REPEL_DIST - cdist) / REPEL_DIST;
          p.vx += cdx / cdist * force * 0.22;
          p.vy += cdy / cdist * force * 0.22;
        }
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const t = 1 - dist / CONNECT_DIST;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE},${(0.22 * t).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (cdist < CURSOR_CONNECT_DIST && mx > 0) {
          const t = 1 - cdist / CURSOR_CONNECT_DIST;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${CUR},${(0.55 * t).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT},${p.alpha.toFixed(3)})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = canvas.width + 8;
        if (p.x > canvas.width + 8) p.x = -8;
        if (p.y < -8) p.y = canvas.height + 8;
        if (p.y > canvas.height + 8) p.y = -8;
      }
      if (mx > 0) {
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CUR},0.4)`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMouseMove);
    window.addEventListener("pointerleave", onMouseLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMouseMove);
      window.removeEventListener("pointerleave", onMouseLeave);
      document.body.style.cursor = "";
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className: "pointer-events-none fixed inset-0 z-[-1]"
    }
  );
}
const ORBIT_COUNT = 8;
function PageLoader() {
  const [progress, setProgress] = reactExports.useState(0);
  const [hiding, setHiding] = reactExports.useState(false);
  const [gone, setGone] = reactExports.useState(false);
  const canvasRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setProgress(40), 150);
    const t2 = setTimeout(() => setProgress(70), 500);
    const t3 = setTimeout(() => setProgress(100), 900);
    const t4 = setTimeout(() => setHiding(true), 1150);
    const t5 = setTimeout(() => setGone(true), 1600);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let tick = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      tick += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      for (let i = 0; i < 40; i++) {
        const angle = i / 40 * Math.PI * 2 + tick * 0.3;
        const radius = 120 + Math.sin(tick * 0.8 + i) * 60;
        const x = cx + Math.cos(angle) * radius * (canvas.width / 600);
        const y = cy + Math.sin(angle) * radius * (canvas.height / 600);
        const alpha = 0.08 + Math.sin(tick + i * 0.7) * 0.05;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(82,110,200,${alpha * 1.5})`;
        ctx.fill();
      }
      const arcR = 68;
      ctx.beginPath();
      ctx.arc(cx, cy, arcR, tick * 2, tick * 2 + Math.PI * 1.2);
      ctx.strokeStyle = "rgba(82,110,200,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, arcR, tick * 2 + Math.PI * 1.2, tick * 2 + Math.PI * 2);
      ctx.strokeStyle = "rgba(82,110,200,0.07)";
      ctx.lineWidth = 1;
      ctx.stroke();
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);
  if (gone) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500",
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      ),
      style: { background: "#ffffff" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-64 w-64 rounded-full",
            style: { background: "radial-gradient(circle, rgba(82,110,210,0.10) 0%, transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", style: { width: 140, height: 140 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-[130px] w-[130px] rounded-full border border-slate-200" }),
          Array.from({ length: ORBIT_COUNT }).map((_, i) => {
            const deg = i / ORBIT_COUNT * 360;
            const delay = `${-(i / ORBIT_COUNT) * 3}s`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute",
                style: {
                  width: 130,
                  height: 130,
                  transform: `rotate(${deg}deg)`,
                  animation: `spin 3s linear infinite`,
                  animationDelay: delay
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-full",
                    style: {
                      width: i % 2 === 0 ? 5 : 3,
                      height: i % 2 === 0 ? 5 : 3,
                      background: i % 2 === 0 ? "rgba(99,130,220,0.8)" : "rgba(99,130,220,0.4)",
                      boxShadow: i % 2 === 0 ? "0 0 6px 2px rgba(99,130,220,0.6)" : "none",
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)"
                    }
                  }
                )
              },
              i
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative grid h-16 w-16 place-items-center rounded-2xl shadow-2xl",
              style: { background: "linear-gradient(135deg, #3b5bdb 0%, #5c7cfa 100%)", boxShadow: "0 0 30px rgba(82,110,210,0.5), 0 0 60px rgba(82,110,210,0.2)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-8 w-8 text-white drop-shadow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]",
                    style: { background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl font-bold text-dark-gray tracking-tight",
              style: { textShadow: "none" },
              children: "Fix It Dublin"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500", children: "Handyman Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 w-52 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[3px] w-full overflow-hidden rounded-full bg-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full transition-all duration-500 ease-out",
              style: {
                width: `${progress}%`,
                background: "linear-gradient(90deg, #3b5bdb, #5c7cfa, #748ffc)",
                boxShadow: "0 0 10px rgba(99,130,220,0.8)"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-slate-400 tabular-nums", children: [
            progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes spin {
          from { transform: rotate(var(--tw-rotate, 0deg)); }
          to   { transform: rotate(calc(var(--tw-rotate, 0deg) + 360deg)); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      ` })
      ]
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportError(error);
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fix It Dublin — Reliable Handyman Services Across Dublin" },
      { name: "description", content: "Professional home repairs, painting, gardening & carpentry across Dublin. Fast, affordable, trusted local handymen. Get a free quote today." },
      { name: "author", content: "Fix It Dublin" },
      { property: "og:title", content: "Fix It Dublin — Reliable Handyman Services" },
      { property: "og:description", content: "Professional home repairs, painting, gardening & carpentry across Dublin." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fix It Dublin" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleBackground, {}),
      !isAdminRoute && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      !isAdminRoute && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
      !isAdminRoute && /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./testimonials-DjMhzc_J.mjs");
const Route$7 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials — Fix It Dublin Reviews"
    }, {
      name: "description",
      content: "Hear what Dublin homeowners say about our handyman, painting, gardening and carpentry work."
    }, {
      property: "og:title",
      content: "Fix It Dublin Testimonials"
    }, {
      property: "og:description",
      content: "5-star Dublin reviews from real customers."
    }, {
      property: "og:url",
      content: "/testimonials"
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/services", "/portfolio", "/testimonials", "/contact"];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./services-CGI5b4jH.mjs");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Fix It Dublin Handyman"
    }, {
      name: "description",
      content: "Home repairs, painting, gardening, carpentry, property maintenance and general handyman services across Dublin."
    }, {
      property: "og:title",
      content: "Fix It Dublin Services"
    }, {
      property: "og:description",
      content: "Browse our full range of Dublin handyman services."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./portfolio-5slsIjVY.mjs");
const Route$4 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio & Gallery — Fix It Dublin"
    }, {
      name: "description",
      content: "Browse completed handyman, painting, gardening and carpentry projects across Dublin."
    }, {
      property: "og:title",
      content: "Fix It Dublin Portfolio"
    }, {
      property: "og:description",
      content: "Recent Dublin projects: repairs, painting, gardening, carpentry, maintenance."
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-BoG6r3Qn.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Booking — Fix It Dublin"
    }, {
      name: "description",
      content: "Book a Dublin handyman or request a free quote. Call, message or use our quick booking form."
    }, {
      property: "og:title",
      content: "Contact Fix It Dublin"
    }, {
      property: "og:description",
      content: "Get a free quote or book a handyman service across Dublin."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-TvxFYNRl.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — Fix It Dublin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-OHazQhP0.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Fix It Dublin — Local Handyman Experts"
    }, {
      name: "description",
      content: "Meet the team behind Fix It Dublin. A decade of trusted home repairs, painting, gardening and carpentry across Dublin."
    }, {
      property: "og:title",
      content: "About Fix It Dublin"
    }, {
      property: "og:description",
      content: "Local Dublin handymen with a decade of trusted experience."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CM_OATX0.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Fix It Dublin — Reliable Handyman Services Across Dublin"
    }, {
      name: "description",
      content: "Professional home repairs, painting, gardening & carpentry across Dublin. Get a free quote in minutes."
    }, {
      property: "og:title",
      content: "Fix It Dublin — Reliable Handyman Services"
    }, {
      property: "og:description",
      content: "Professional home repairs, painting, gardening & carpentry across Dublin."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$7.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const PortfolioRoute = Route$4.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TestimonialsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  router as r
};
