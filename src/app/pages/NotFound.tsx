import { Link } from 'react-router';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <AlertCircle className="w-10 h-10 text-[var(--neon-cyan)]" />
        </div>
        
        <h1
          className="text-6xl font-bold mb-4 text-[var(--neon-cyan)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          404
        </h1>
        
        <h2 className="text-3xl font-bold mb-4">Pagina niet gevonden</h2>
        
        <p className="text-[var(--muted-foreground)] mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst. Bekijk onze releases of ga terug naar home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--neon-cyan)] text-[var(--tech-darker)] rounded-xl font-semibold hover:bg-[var(--neon-blue)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl font-semibold hover:border-[var(--neon-cyan)] transition-all"
          >
            Bekijk releases
          </Link>
        </div>
      </div>
    </div>
  );
}
