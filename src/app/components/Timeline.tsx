import { Check, Lock } from 'lucide-react';

interface TimelineProps {
  totalWeeks: number;
  completedWeeks: number;
}

export function Timeline({ totalWeeks, completedWeeks }: TimelineProps) {
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i + 1);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--glass-border)] -translate-y-1/2" />
      
      {/* Progress line */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] -translate-y-1/2 transition-all duration-1000 shadow-[0_0_20px_var(--neon-cyan)]"
        style={{ width: `${(completedWeeks / totalWeeks) * 100}%` }}
      />

      {/* Week markers */}
      <div className="relative flex justify-between items-center">
        {weeks.map((week) => {
          const isCompleted = week <= completedWeeks;
          const isCurrent = week === completedWeeks + 1;

          return (
            <div key={week} className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[var(--neon-cyan)] border-[var(--neon-cyan)] shadow-[0_0_20px_var(--neon-cyan)]'
                    : isCurrent
                    ? 'bg-[var(--glass-bg)] border-[var(--neon-purple)] shadow-[0_0_20px_var(--neon-purple)] animate-pulse'
                    : 'bg-[var(--glass-bg)] border-[var(--glass-border)]'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--tech-darker)]" />
                ) : isCurrent ? (
                  <div className="w-3 h-3 rounded-full bg-[var(--neon-purple)]" />
                ) : (
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--muted-foreground)]" />
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-3 text-xs sm:text-sm font-medium transition-colors ${
                  isCompleted || isCurrent
                    ? 'text-[var(--neon-cyan)]'
                    : 'text-[var(--muted-foreground)]'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                W{week}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
