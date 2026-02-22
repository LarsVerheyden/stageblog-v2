import { Link } from 'react-router';
import { ArrowRight, Terminal } from 'lucide-react';
import { Timeline } from '../components/Timeline';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-cyan)] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--neon-purple)] rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] mb-8 backdrop-blur-sm">
              <Terminal className="w-4 h-4 text-[var(--neon-cyan)]" />
              <span className="text-sm text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>
                v1.3 • Week 3/15
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              15 weken in productie bij Trans-IT
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-[var(--muted-foreground)] mb-8">
              Release notes van mijn stage in Heist-op-den-Berg
            </p>

            {/* Intro Text */}
            <p className="text-base sm:text-lg text-[var(--foreground)] max-w-2xl mx-auto mb-12 leading-relaxed">
              Van junior developer tot full-stack stagiair: een transparant logboek van mijn leerproces, 
              uitdagingen en successen tijdens de 15 weken bij Trans-IT. Elke week gedocumenteerd als een 
              software release met changelog, highlights en lessons learned.
            </p>

            {/* CTA Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--neon-cyan)] text-[var(--tech-darker)] rounded-xl font-semibold hover:bg-[var(--neon-blue)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] group"
            >
              <span>Bekijk laatste release</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stage <span className="text-[var(--neon-cyan)]">Timeline</span>
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Mijn 15-weekse reis door de wereld van software development. 
            Elke afgeronde week vertegenwoordigt nieuwe skills, inzichten en ervaringen.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
          <Timeline totalWeeks={15} completedWeeks={3} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center backdrop-blur-sm hover:border-[var(--neon-cyan)] transition-all">
            <div className="text-4xl font-bold text-[var(--neon-cyan)] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
              3/15
            </div>
            <div className="text-[var(--muted-foreground)] text-sm">Weken voltooid</div>
          </div>
          <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center backdrop-blur-sm hover:border-[var(--neon-purple)] transition-all">
            <div className="text-4xl font-bold text-[var(--neon-purple)] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
              3
            </div>
            <div className="text-[var(--muted-foreground)] text-sm">Release notes</div>
          </div>
          <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center backdrop-blur-sm hover:border-[#00ff88] transition-all">
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-mono)', color: '#00ff88' }}>
              42+
            </div>
            <div className="text-[var(--muted-foreground)] text-sm">Lessons learned</div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--glass-border)] backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tech <span className="text-[var(--neon-cyan)]">Stack</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {['React', 'JavaScript', 'Git', 'AWS', 'GraphQL'].map(
              (tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all hover:scale-105"
                >
                  <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    {tech}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
