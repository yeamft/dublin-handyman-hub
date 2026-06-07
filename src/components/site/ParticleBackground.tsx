import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  r: number;
  alpha: number;
  pulse: number;
};

const COUNT = 35;
const CONNECT_DIST = 150;
const CURSOR_CONNECT_DIST = 180;
const REPEL_DIST = 100;

// Primary brand color — oklch(0.52 0.18 252) ≈ rgb(66, 105, 200)
const DOT  = "66, 105, 200";
const LINE = "66, 105, 200";
const CUR  = "66, 105, 200";

function make(w: number, h: number): Particle {
  const vx = (Math.random() - 0.5) * 0.35;
  const vy = (Math.random() - 0.5) * 0.35;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx, vy, baseVx: vx, baseVy: vy,
    r: Math.random() * 2 + 1.5,          // 1.5 – 3.5 px
    alpha: Math.random() * 0.35 + 0.25,  // much more visible
    pulse: Math.random() * Math.PI * 2,
  };
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const tickRef   = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: COUNT }, () => make(canvas.width, canvas.height));
    };

    const HOVER_RADIUS = 25;

    const onMouseMove = (e: PointerEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const nearParticle = particles.some((p) => {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        return Math.sqrt(dx * dx + dy * dy) < HOVER_RADIUS;
      });

      document.body.style.cursor = nearParticle ? "pointer" : "";
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; document.body.style.cursor = ""; };

    const draw = () => {
      tickRef.current += 0.012;
      const tick = tickRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle pulse
        const r = p.r + Math.sin(tick + p.pulse) * 0.3;

        // cursor repulsion
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        if (cdist < REPEL_DIST && cdist > 0) {
          const force = (REPEL_DIST - cdist) / REPEL_DIST;
          p.vx += (cdx / cdist) * force * 0.22;
          p.vy += (cdy / cdist) * force * 0.22;
        }
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;

        // particle–particle lines
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

        // cursor–particle lines
        if (cdist < CURSOR_CONNECT_DIST && mx > 0) {
          const t = 1 - cdist / CURSOR_CONNECT_DIST;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${CUR},${(0.55 * t).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }

        // dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT},${p.alpha.toFixed(3)})`;
        ctx.fill();

        // move & wrap
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = canvas.width + 8;
        if (p.x > canvas.width + 8)  p.x = -8;
        if (p.y < -8) p.y = canvas.height + 8;
        if (p.y > canvas.height + 8) p.y = -8;
      }

      // subtle cursor dot
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

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1]"
    />
  );
}
