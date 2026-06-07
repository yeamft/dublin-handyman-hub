import { useEffect, useRef, useState } from "react";
import { ArrowUp, MessageCircle, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

type Message = { from: "bot" | "user"; text: string; links?: { label: string; to: string }[] };

const GREETING: Message = {
  from: "bot",
  text: "👋 Hi! I'm the Fix It Dublin assistant. What can I help you with today?",
  links: [
    { label: "Our Services", to: "/services" },
    { label: "Get a Quote", to: "/contact" },
    { label: "Book Appointment", to: "/contact" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "About Us", to: "/about" },
    { label: "Testimonials", to: "/testimonials" },
  ],
};

type Intent =
  | "services" | "quote" | "contact" | "about" | "portfolio"
  | "pricing" | "location" | "hours" | "testimonials" | "hello" | "unknown";

function detectIntent(input: string): Intent {
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

const RESPONSES: Record<Intent, Message> = {
  hello: {
    from: "bot",
    text: "Hello there! 😊 Great to hear from you. How can Fix It Dublin help you today?",
    links: [
      { label: "View Services", to: "/services" },
      { label: "Get a Free Quote", to: "/contact" },
    ],
  },
  services: {
    from: "bot",
    text: "We offer a wide range of services across Dublin:\n\n• 🔧 Home Repairs\n• 🎨 Painting (interior & exterior)\n• 🌿 Gardening & Landscaping\n• 🪚 Carpentry\n• 🏠 Property Maintenance\n• 🔨 General Handyman",
    links: [{ label: "See All Services", to: "/services" }],
  },
  quote: {
    from: "bot",
    text: "We offer free, no-obligation quotes! 💶 Our pricing is fully transparent with no hidden fees. Fill in a quick form and we'll get back to you within hours.",
    links: [{ label: "Get a Free Quote", to: "/contact" }],
  },
  contact: {
    from: "bot",
    text: "You can reach us by:\n\n📞 Phone: +353 87 123 4567\n📧 Email: jim.obrien61@gmail.com\n\nOr use our contact form to book an appointment or request a quote.",
    links: [{ label: "Contact / Book", to: "/contact" }],
  },
  about: {
    from: "bot",
    text: "Fix It Dublin has been serving Dublin homes since 2014. We're a fully insured, locally based team of trusted tradespeople with 500+ jobs completed and a 4.9 ⭐ rating.",
    links: [{ label: "About Us", to: "/about" }],
  },
  portfolio: {
    from: "bot",
    text: "Check out our portfolio to see completed projects — from kitchen renovations and garden makeovers to carpentry and paintwork. 📸",
    links: [{ label: "View Portfolio", to: "/portfolio" }],
  },
  pricing: {
    from: "bot",
    text: "Our pricing is transparent with no hidden fees. We offer hourly rates or fixed project pricing depending on the job. Request a free quote for an exact figure.",
    links: [{ label: "Get a Quote", to: "/contact" }],
  },
  location: {
    from: "bot",
    text: "We cover all areas across Dublin 🗺️ — from Clontarf and Rathmines to Stoneybatter, Ballsbridge, Dundrum, and beyond. If you're in Dublin, we can help!",
    links: [{ label: "Contact Us", to: "/contact" }],
  },
  hours: {
    from: "bot",
    text: "We're available Monday to Saturday, 8am–6pm. Most jobs can be scheduled within 24–48 hours. ⏰",
    links: [{ label: "Book Now", to: "/contact" }],
  },
  testimonials: {
    from: "bot",
    text: "We're proud of our 4.9 ⭐ rating from 200+ Dublin homeowners. Our customers love our punctuality, clean work, and fair pricing. 💬",
    links: [{ label: "Read Reviews", to: "/testimonials" }],
  },
  unknown: {
    from: "bot",
    text: "I'm not sure about that one, but I can point you in the right direction! Here's what I can help with:",
    links: [
      { label: "Our Services", to: "/services" },
      { label: "Get a Quote", to: "/contact" },
      { label: "About Us", to: "/about" },
    ],
  },
};

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { from: "user", text: trimmed };
    const intent = detectIntent(trimmed);
    const botReply = RESPONSES[intent];
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {chatOpen && (
        <div className="mb-1 flex w-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-elegant">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-white">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20">
              <Bot className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">Fix It Dublin</div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" /> Online now
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg hover:bg-white/20 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 overflow-y-auto p-4 h-80">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex flex-col gap-1.5", msg.from === "user" ? "items-end" : "items-start")}>
                <div className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                  msg.from === "bot"
                    ? "rounded-tl-sm bg-slate-100 text-foreground"
                    : "rounded-tr-sm bg-primary text-white"
                )}>
                  {msg.text}
                </div>
                {msg.links && (
                  <div className="flex flex-wrap gap-1.5 max-w-[85%]">
                    {msg.links.map((l) => (
                      <Link key={l.label} to={l.to} onClick={() => setChatOpen(false)}
                        className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border bg-slate-50/60 px-3 py-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={send}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-40"
              disabled={!input.trim()}>
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Chat toggle */}
      <button
        onClick={() => setChatOpen((v) => !v)}
        aria-label="Open chat"
        className="grid h-14 w-14 place-items-center rounded-full gradient-primary text-white shadow-glow hover:scale-110 transition-smooth relative"
      >
        {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!chatOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white">1</span>
        )}
      </button>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full bg-dark-gray text-primary-foreground shadow-elegant transition-smooth hover:scale-110",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
