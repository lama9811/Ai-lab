"use client";

import { useRef, useState } from "react";

/* Dependency-free 3D tilt + float wrapper.
   - Gentle continuous float bob (CSS, staggered per index, reduced-motion aware)
   - Mouse-driven 3D perspective tilt that eases back on leave */
export function TiltCard({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const MAX = 9; // degrees
    setTilt({ rx: -py * MAX, ry: px * MAX, active: true });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0, active: false });
  }

  return (
    <div
      className={`tilt-float ${className}`}
      style={{ animationDelay: `${(index % 4) * -1.3}s`, perspective: "1000px" }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt-inner h-full"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0) scale(${
            tilt.active ? 1.02 : 1
          })`,
          transition: tilt.active
            ? "transform 0.08s ease-out"
            : "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
