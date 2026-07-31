import { useRef, useState, type ReactNode } from 'react';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  disabled?: boolean;
};

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.08)',
  disabled = false,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [transform, setTransform] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || isTouchDevice) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    setSpotlight({ x, y });
    setTransform({ rx: -offsetY * 6, ry: offsetX * 6 });
  };

  const handleMouseLeave = () => {
    setSpotlight({ x: 50, y: 50 });
    setTransform({ rx: 0, ry: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div
        style={{
          transform: `rotateX(${transform.rx}deg) rotateY(${transform.ry}deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${spotlightColor}, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {children}
      </div>
    </div>
  );
}
