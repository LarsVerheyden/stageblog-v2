import { Plus, Wrench, CheckCircle, AlertCircle } from 'lucide-react';

interface ChangelogBoxProps {
  changelog: {
    added: string[];
    changed: string[];
    fixed: string[];
    knownIssues: string[];
  };
}

export function ChangelogBox({ changelog }: ChangelogBoxProps) {
  const sections = [
    {
      title: 'Added',
      items: changelog.added,
      icon: Plus,
      color: 'var(--neon-cyan)',
      bgColor: 'rgba(0, 240, 255, 0.05)',
    },
    {
      title: 'Changed',
      items: changelog.changed,
      icon: Wrench,
      color: 'var(--neon-purple)',
      bgColor: 'rgba(153, 51, 255, 0.05)',
    },
    {
      title: 'Fixed',
      items: changelog.fixed,
      icon: CheckCircle,
      color: '#00ff88',
      bgColor: 'rgba(0, 255, 136, 0.05)',
    },
    {
      title: 'Known Issues',
      items: changelog.knownIssues,
      icon: AlertCircle,
      color: '#ff3366',
      bgColor: 'rgba(255, 51, 102, 0.05)',
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span className="text-[var(--neon-cyan)]" style={{ fontFamily: 'var(--font-mono)' }}>
          CHANGELOG
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          
          if (section.items.length === 0) return null;

          return (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="p-1.5 rounded-lg"
                  style={{ backgroundColor: section.bgColor }}
                >
                  <Icon className="w-4 h-4" style={{ color: section.color }} />
                </div>
                <h4
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: section.color, fontFamily: 'var(--font-mono)' }}
                >
                  {section.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[var(--muted-foreground)] pl-4 relative before:content-['•'] before:absolute before:left-0"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
