interface SkeletonLoaderProps {
  count?: number;
  className?: string;
  layout?: 'card' | 'list' | 'stack';
  lines?: number;
}

export default function SkeletonLoader({
  count = 3,
  className = '',
  layout = 'card',
  lines = 2,
}: SkeletonLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, index) => index);

  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      {skeletons.map((item) => (
        <div
          key={item}
          className={`skeleton-loader__item relative overflow-hidden border border-stone-200/80 bg-white/80 ${
            layout === 'list' ? 'p-4' : 'p-5 md:p-6'
          } ${item < count - 1 ? 'mb-4' : ''}`}
        >
          {layout === 'list' ? (
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-200/80" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-24 rounded-full bg-slate-200/80" />
                <div className="h-3 w-3/4 rounded-full bg-slate-200/70" />
              </div>
            </div>
          ) : (
            <>
              <div className="skeleton-loader__header h-[100px] rounded-lg bg-slate-200/80" />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-2/3 rounded-full bg-slate-200/80" />
                <div className="h-3 w-full rounded-full bg-slate-200/70" />
                <div className="h-3 w-4/5 rounded-full bg-slate-200/70" />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex-1 space-y-2">
                  {Array.from({ length: lines }, (_, lineIndex) => (
                    <div
                      key={lineIndex}
                      className={`h-3 rounded-full bg-slate-200/70 ${
                        lineIndex === lines - 1 ? 'w-3/4' : 'w-full'
                      }`}
                    />
                  ))}
                </div>
                <div className="h-10 w-20 shrink-0 rounded-lg bg-slate-200/80" />
              </div>
              <div className="mt-5 h-10 rounded-lg bg-slate-200/80" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
