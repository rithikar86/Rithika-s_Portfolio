import { motion } from 'framer-motion';
import { useEffect, useState, type ElementType, type ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  intensity?: number;
  style?: React.CSSProperties;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function TiltCard({
  children,
  className = '',
  as: Component = 'div',
  intensity = 6,
  style,
}: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setIsReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener?.('change', update);
    return () => mediaQuery.removeEventListener?.('change', update);
  }, []);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (isReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setRotateY(clamp(x * intensity * 1.8, -intensity, intensity));
    setRotateX(clamp(-(y * intensity * 1.8), -intensity, intensity));
  };

  const handleLeave = () => {
    if (!isReducedMotion) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01, rotateX: isReducedMotion ? 0 : rotateX, rotateY: isReducedMotion ? 0 : rotateY, transition: { type: 'spring', stiffness: 180, damping: 18 } }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      {children}
    </motion.div>
  );
}
