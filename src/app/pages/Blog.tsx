import { useState } from 'react';
import { Filter } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { TagType } from '../types';
import { BlogCard } from '../components/BlogCard';
import { TagPill } from '../components/TagPill';

export function Blog() {
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  const allTags: TagType[] = ['code', 'lessons-learned', 'fails', 'wins', 'reflectie', 'team'];

  const toggleTag = (tag: TagType) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredPosts =
    selectedTags.length === 0
      ? blogPosts
      : blogPosts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)));

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Release <span className="text-[var(--neon-cyan)]">Notes</span>
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            Elke week gedocumenteerd als een software release. Changelog, highlights, lessons learned en meer.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[var(--neon-cyan)]" />
            <h2 className="font-semibold">Filter op tags</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <TagPill
                key={tag}
                tag={tag}
                active={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="mt-4 text-sm text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">Geen releases gevonden</h3>
            <p className="text-[var(--muted-foreground)] mb-6">
              Probeer andere filters of reset je selectie.
            </p>
            <button
              onClick={() => setSelectedTags([])}
              className="px-6 py-2 bg-[var(--neon-cyan)] text-[var(--tech-darker)] rounded-lg font-semibold hover:bg-[var(--neon-blue)] transition-all"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
