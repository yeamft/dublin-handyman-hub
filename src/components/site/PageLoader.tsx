import { useEffect, useState, useRef } from "react";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const ORBIT_COUNT = 8;

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  /* ── progress timeline ── */
  useEffect(() => {
    const t1 = setTimeout(() => setProgress(40),  150);
    const t2 = setTimeout(() => setProgress(70),  500);
    const t3 = setTimeout(() => setProgress(100), 900);
    const t4 = setTimeout(() => setHiding(true),  1150);
    const t5 = setTimeout(() => setGone(true),    1600);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  /* ── canvas particle burst ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      tick += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width  / 2;
      const cy = canvas.height / 2;

      // floating background particles
      for (let i = 0; i < 40; i++) {
        const angle  = (i / 40) * Math.PI * 2 + tick * 0.3;
        const radius = 120 + Math.sin(tick * 0.8 + i) * 60;
        const x = cx + Math.cos(angle) * radius * (canvas.width  / 600);
        const y = cy + Math.sin(angle) * radius * (canvas.height / 600);
        const alpha = 0.08 + Math.sin(tick + i * 0.7) * 0.05;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(82,110,200,${alpha * 1.5})`;
        ctx.fill();
      }

      // sweeping arc
      const arcR = 68;
      ctx.beginPath();
      ctx.arc(cx, cy, arcR, tick * 2, tick * 2 + Math.PI * 1.2);
      ctx.strokeStyle = "rgba(82,110,200,0.2)";
      ctx.lineWidth   = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, arcR, tick * 2 + Math.PI * 1.2, tick * 2 + Math.PI * 2);
      ctx.strokeStyle = "rgba(82,110,200,0.07)";
      ctx.lineWidth   = 1;
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

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500",
      hiding ? "opacity-0 pointer-events-none" : "opacity-100",
    )}
      style={{ background: "#ffffff" }}
    >
      {/* Canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow behind logo */}
      <div className="absolute h-64 w-64 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(82,110,210,0.10) 0%, transparent 70%)" }}
      />

      {/* ── Logo + orbiting dots ── */}
      <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>

        {/* Orbit track */}
        <div className="absolute h-[130px] w-[130px] rounded-full border border-slate-200" />

        {/* Orbiting dots */}
        {Array.from({ length: ORBIT_COUNT }).map((_, i) => {
          const deg = (i / ORBIT_COUNT) * 360;
          const delay = `${-(i / ORBIT_COUNT) * 3}s`;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: 130, height: 130,
                transform: `rotate(${deg}deg)`,
                animation: `spin 3s linear infinite`,
                animationDelay: delay,
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: i % 2 === 0 ? 5 : 3,
                  height: i % 2 === 0 ? 5 : 3,
                  background: i % 2 === 0
                    ? "rgba(99,130,220,0.8)"
                    : "rgba(99,130,220,0.4)",
                  boxShadow: i % 2 === 0
                    ? "0 0 6px 2px rgba(99,130,220,0.6)"
                    : "none",
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          );
        })}

        {/* Logo box */}
        <div className="relative grid h-16 w-16 place-items-center rounded-2xl shadow-2xl"
          style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #5c7cfa 100%)", boxShadow: "0 0 30px rgba(82,110,210,0.5), 0 0 60px rgba(82,110,210,0.2)" }}
        >
          <Wrench className="h-8 w-8 text-white drop-shadow" />

          {/* Shimmer sweep */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* Brand text */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-dark-gray tracking-tight"
          style={{ textShadow: "none" }}>
          Fix It Dublin
        </h1>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Handyman Services
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div className="mt-10 w-52 space-y-2">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #3b5bdb, #5c7cfa, #748ffc)",
              boxShadow: "0 0 10px rgba(99,130,220,0.8)",
            }}
          />
        </div>
        <p className="text-center text-[11px] text-slate-400 tabular-nums">{progress}%</p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(var(--tw-rotate, 0deg)); }
          to   { transform: rotate(calc(var(--tw-rotate, 0deg) + 360deg)); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
