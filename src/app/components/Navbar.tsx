import { Link, useLocation } from 'react-router';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/over', label: 'Over' },
    { path: '/blog', label: 'Releases' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--tech-darker)]/80 border-b border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Code2 className="w-8 h-8 text-[var(--neon-cyan)] transition-all group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--neon-cyan)] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-semibold tracking-tight hidden sm:block" style={{ fontFamily: 'var(--font-sans)' }}>
              Trans-IT Stageblog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all relative group ${
                    isActive
                      ? 'text-[var(--neon-cyan)]'
                      : 'text-[var(--foreground)] hover:text-[var(--neon-cyan)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--neon-cyan)] group-hover:w-1/2 transition-all shadow-[0_0_10px_var(--neon-cyan)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--glass-bg)] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--neon-cyan)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--neon-cyan)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--glass-border)]">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'text-[var(--neon-cyan)] bg-[var(--glass-bg)]'
                      : 'text-[var(--foreground)] hover:text-[var(--neon-cyan)] hover:bg-[var(--glass-bg)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
