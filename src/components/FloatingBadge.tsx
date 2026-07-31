import type { ReactNode } from 'react';

type FloatingBadgeProps = {
  icon: ReactNode;
  text: string;
  className?: string;
  delay?: number;
};

export default function FloatingBadge({ icon, text, className = '', delay = 0 }: FloatingBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[20px] border border-slate-200/80 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm ${className}`}
      style={{
        animation: 'floatingBadgeBob 3s ease-in-out infinite',
        animationDelay: `${delay}ms`,
      }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}
