import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Zap, Code2, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { TagPill } from '../components/TagPill';
import { ChangelogBox } from '../components/ChangelogBox';

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Release niet gevonden</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--neon-cyan)] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar overzicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Terug naar releases
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[var(--neon-cyan)] text-2xl font-bold"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {post.version}
            </span>
            <span className="text-[var(--muted-foreground)]">•</span>
            <span className="text-[var(--muted-foreground)]">Week {post.week}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-6">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.date).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Teaser */}
        <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm mb-8">
          <p className="text-lg leading-relaxed">{post.teaser}</p>
        </div>

        {/* Highlights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-[var(--neon-cyan)]" />
            <h2 className="text-3xl font-bold">Highlights van deze release</h2>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <ul className="space-y-3">
              {post.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--foreground)] leading-relaxed"
                >
                  <span className="text-[var(--neon-cyan)] mt-1 text-xl">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Spotlight */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-[var(--neon-purple)]" />
            <h2 className="text-3xl font-bold">Technische spotlight</h2>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-[var(--neon-purple)]">
              {post.technicalSpotlight.title}
            </h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              {post.technicalSpotlight.content}
            </p>
            {post.technicalSpotlight.codeSnippet && (
              <div className="relative">
                <div className="absolute top-3 right-3 px-2 py-1 bg-[var(--glass-bg)] rounded text-xs text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>
                  JavaScript
                </div>
                <pre className="p-6 rounded-xl bg-[var(--tech-darker)] border border-[var(--glass-border)] overflow-x-auto">
                  <code
                    className="text-sm text-[var(--foreground)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {post.technicalSpotlight.codeSnippet}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* Learned */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6" style={{ color: '#00ff88' }} />
            <h2 className="text-3xl font-bold">Wat heb ik geleerd?</h2>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <ul className="space-y-3">
              {post.learned.map((lesson, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--foreground)] leading-relaxed"
                >
                  <span className="mt-1 text-xl" style={{ color: '#00ff88' }}>
                    →
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Changelog */}
        <section className="mb-12">
          <ChangelogBox changelog={post.changelog} />
        </section>

        {/* Navigation */}
        <div className="flex justify-center pt-8 border-t border-[var(--glass-border)]">
          <Link
            to="/blog"
            className="px-6 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl hover:border-[var(--neon-cyan)] hover:bg-[var(--glass-bg)] transition-all font-medium"
          >
            Bekijk alle releases
          </Link>
        </div>
      </div>
    </div>
  );
}
