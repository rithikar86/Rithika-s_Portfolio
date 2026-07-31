import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';

type RippleButtonProps = {
  variant?: 'primary' | 'secondary';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function RippleButton({
  variant = 'primary',
  onClick,
  children,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const timeoutIds = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timeoutIds.current.forEach((id) => window.clearTimeout(id));
      timeoutIds.current = [];
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { id, x, y }]);

    const timeoutId = window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      timeoutIds.current = timeoutIds.current.filter((currentId) => currentId !== timeoutId);
    }, 600);

    timeoutIds.current.push(timeoutId);
    onClick?.(event);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`ripple-button group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
        variant === 'primary'
          ? 'bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-indigo-200'
          : 'border-2 border-slate-300 bg-slate-100 text-slate-800 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700'
      }`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={`ripple-button__ripple ${variant === 'secondary' ? 'ripple-button__ripple--secondary' : ''}`}
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
}
