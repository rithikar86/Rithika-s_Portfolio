import { useEffect, useRef, useState, type ReactNode } from 'react';

type FloatingCard3DProps = {
  children: ReactNode;
  intensity?: number;
  className?: string;
};

export default function FloatingCard3D({ children, intensity = 1, className = '' }: FloatingCard3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

    if (isTouchDevice || !cardRef.current) {
      return undefined;
    }

    const card = cardRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (event.clientX - centerX) / (rect.width / 2);
      const offsetY = (event.clientY - centerY) / (rect.height / 2);

      const rotateY = clamp(offsetX * 15 * intensity, -15, 15);
      const rotateX = clamp(-offsetY * 15 * intensity, -15, 15);

      setRotation({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ rotateX: 0, rotateY: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
