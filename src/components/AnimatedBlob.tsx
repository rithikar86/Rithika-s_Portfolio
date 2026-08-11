import { useEffect, useRef } from 'react';

type BlobProps = {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
};

export default function AnimatedBlob({ className = '', color = 'rgba(99,102,241,0.12)', size = 400, delay = 0 }: BlobProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTime: number;
    let animId: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const t = (time - startTime + delay) / 1000;

      const x = Math.sin(t * 0.3) * 40 + Math.sin(t * 0.5) * 20;
      const y = Math.cos(t * 0.4) * 30 + Math.sin(t * 0.6) * 15;
      const scale = 1 + Math.sin(t * 0.2) * 0.1;

      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
