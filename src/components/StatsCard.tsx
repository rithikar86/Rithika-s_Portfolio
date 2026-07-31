import { useEffect, useRef, useState } from 'react';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type StatsCardProps = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function StatsCard({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current || hasAnimated) {
      return undefined;
    }

    let timeoutId: number | null = null;
    let intervalId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        if (timeoutId !== null) {
          window.clearTimeout(timeoutId);
        }

        timeoutId = window.setTimeout(() => {
          const frameDuration = clamp(Math.round(duration / Math.max(1, Math.abs(value) / 20)), 20, 40);
          const totalFrames = Math.max(1, Math.round(duration / frameDuration));
          let frame = 0;

          intervalId = window.setInterval(() => {
            frame += 1;
            const progress = Math.min(frame / totalFrames, 1);
            const eased = 1 - (1 - progress) ** 3;
            setDisplayValue(Math.round(value * eased));

            if (progress >= 1) {
              window.clearInterval(intervalId!);
              setDisplayValue(value);
              setHasAnimated(true);
            }
          }, frameDuration);
        }, 120);

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(cardRef.current);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
      observer.disconnect();
    };
  }, [duration, hasAnimated, value]);

  return (
    <div
      ref={cardRef}
      className={`rounded-[20px] border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="text-4xl font-semibold text-indigo-600">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}
