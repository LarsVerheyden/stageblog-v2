import { Target } from 'lucide-react';
import type { EvaluationWorkPointsSection } from '../types';

interface EvaluationWorkPointsBoxProps {
  workPoints: EvaluationWorkPointsSection;
}

export function EvaluationWorkPointsBox({ workPoints }: EvaluationWorkPointsBoxProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 shrink-0 text-amber-400" aria-hidden />
        <h2 className="text-3xl font-bold">{workPoints.title}</h2>
      </div>
      <div
        className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] border-l-[6px] border-l-amber-400/90 backdrop-blur-sm ring-1 ring-amber-400/15 shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)]"
        role="region"
        aria-label={workPoints.title}
      >
        {workPoints.intro && (
          <p className="text-[var(--foreground)] leading-relaxed mb-6 text-base font-medium border-b border-[var(--glass-border)] pb-6">
            {workPoints.intro}
          </p>
        )}
        <ul className="space-y-4">
          {workPoints.items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-[var(--foreground)] leading-relaxed"
            >
              <span
                className="shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold bg-amber-400/15 text-amber-400 border border-amber-400/30"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {index + 1}
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
