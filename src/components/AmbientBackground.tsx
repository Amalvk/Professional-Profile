import { useEffect, useMemo, useRef } from "react";

const BUBBLE_COLOR = "var(--color-onbg-heading)";
const PARALLAX_SPEED = 0.2;

interface Bubble {
  id: number;
  left: number;
  top: number;
  size: number;
  minOpacity: number;
  maxOpacity: number;
  duration: number;
  delay: number;
  blur: number;
}

function shuffledCells(cols: number, rows: number) {
  const cells: { col: number; row: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({ col, row });
    }
  }
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  return cells;
}

function generateBubbles(count: number): Bubble[] {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  const cells = shuffledCells(cols, rows);
  const margin = 0.2;

  return Array.from({ length: count }, (_, id) => {
    const cell = cells[id % cells.length];
    const minOpacity = Math.random() * 0.025 + 0.01;
    return {
      id,
      left: (cell.col + margin + Math.random() * (1 - 2 * margin)) * cellW,
      top: (cell.row + margin + Math.random() * (1 - 2 * margin)) * cellH,
      size: Math.random() * 140 + 90,
      minOpacity,
      maxOpacity: minOpacity + Math.random() * 0.1 + 0.04,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * -20,
      blur: Math.random() * 8 + 4,
    };
  });
}

function Bubbles({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="animate-bubble-pulse absolute rounded-full mix-blend-screen"
          style={
            {
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: BUBBLE_COLOR,
              filter: `blur(${bubble.blur}px)`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              "--bubble-min-opacity": bubble.minOpacity,
              "--bubble-max-opacity": bubble.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  );
}

export default function AmbientBackground() {
  const bubbles = useMemo(() => generateBubbles(7), []);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight || 1;
      const offset = (window.scrollY * PARALLAX_SPEED) % vh;
      if (layerRef.current) {
        layerRef.current.style.transform = `translateY(${-offset}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-page)" }}
      />
      <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] animate-blob rounded-full bg-blob-1 opacity-25 mix-blend-screen blur-3xl dark:opacity-15" />
      <div className="animation-delay-2000 absolute right-[-10%] top-[5%] h-[28rem] w-[28rem] animate-blob rounded-full bg-blob-2 opacity-20 mix-blend-screen blur-3xl dark:opacity-12" />
      <div className="animation-delay-4000 absolute bottom-[-15%] left-[25%] h-[30rem] w-[30rem] animate-blob rounded-full bg-blob-3 opacity-20 mix-blend-screen blur-3xl dark:opacity-10" />
      <div ref={layerRef} className="absolute left-0 top-0 w-full" style={{ height: "200vh", willChange: "transform" }}>
        <div className="absolute left-0 top-0 h-screen w-full">
          <Bubbles bubbles={bubbles} />
        </div>
        <div className="absolute left-0 top-full h-screen w-full">
          <Bubbles bubbles={bubbles} />
        </div>
      </div>
    </div>
  );
}
