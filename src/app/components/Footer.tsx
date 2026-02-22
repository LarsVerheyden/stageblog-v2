import { Github, Linkedin, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--tech-darker)]/50 backdrop-blur-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-[var(--neon-cyan)]" />
              <span className="font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Trans-IT Stageblog</span>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm">
              "Release notes" van een 15-weekse stage bij Trans-IT.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--neon-cyan)]">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/over" className="text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors">
                  Over
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--neon-cyan)]">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/LarsVerheyden"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] hover:bg-[var(--glass-bg)] transition-all group"
              >
                <Github className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--neon-cyan)] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/lars-verheyden"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--neon-blue)] hover:bg-[var(--glass-bg)] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--neon-blue)] transition-colors" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
