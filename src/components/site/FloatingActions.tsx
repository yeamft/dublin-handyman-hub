import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/353871234567?text=Hi%20Fix%20It%20Dublin%2C%20I%27d%20like%20a%20quote."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-smooth"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full bg-dark-gray text-primary-foreground shadow-elegant transition-smooth hover:scale-110",
          show ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}