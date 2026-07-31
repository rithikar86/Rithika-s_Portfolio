import { Children, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type ParallaxSectionProps = {
  children: ReactNode;
  intensity?: number;
  className?: string;
  style?: CSSProperties;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function ParallaxSection({
  children,
  intensity = 1,
  className,
  style,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const normalizedIntensity = clamp(intensity, 0.5, 2);
    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return undefined;
    }

    let frameId: number | null = null;
    let timeoutId: number | null = null;

    const updateOffset = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = clamp((viewportHeight - rect.top) / viewportHeight, 0, 1);
      const nextOffset = progress * normalizedIntensity * 50;

      setOffset(nextOffset);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateOffset);
    };

    const debouncedScroll = () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(scheduleUpdate, 100);
    };

    updateOffset();
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    window.addEventListener('resize', debouncedScroll);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('resize', debouncedScroll);
    };
  }, [intensity]);

  return (
    <div ref={sectionRef} className={className} style={style}>
      {Children.toArray(children).map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const depthFactor = 1 + index * 0.2;
        const childOffset = offset * depthFactor;

        return (
          <div
            key={index}
            style={{
              transform: `translate3d(0, ${childOffset}px, 0)`,
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
