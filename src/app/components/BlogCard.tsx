import { Link } from 'react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { TagPill } from './TagPill';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:translate-y-[-4px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[var(--neon-cyan)] font-semibold"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {post.version}
            </span>
            <span className="text-[var(--muted-foreground)]">•</span>
            <span className="text-[var(--muted-foreground)] text-sm">
              Week {post.week}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--neon-cyan)] transition-colors">
            {post.title}
          </h3>
        </div>
      </div>

      {/* Teaser */}
      <p className="text-[var(--muted-foreground)] mb-4 line-clamp-2">
        {post.teaser}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.date).toLocaleDateString('nl-NL', { 
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--neon-cyan)] group-hover:gap-3 transition-all">
          <span className="text-sm font-medium">Lees meer</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
