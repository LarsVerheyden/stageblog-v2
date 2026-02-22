import { TagType } from '../types';

interface TagPillProps {
  tag: TagType;
  active?: boolean;
  onClick?: () => void;
}

const tagColors: Record<TagType, { bg: string; text: string; border: string }> = {
  code: {
    bg: 'rgba(0, 240, 255, 0.1)',
    text: 'var(--neon-cyan)',
    border: 'rgba(0, 240, 255, 0.3)',
  },
  'lessons-learned': {
    bg: 'rgba(0, 255, 136, 0.1)',
    text: '#00ff88',
    border: 'rgba(0, 255, 136, 0.3)',
  },
  fails: {
    bg: 'rgba(255, 51, 102, 0.1)',
    text: '#ff3366',
    border: 'rgba(255, 51, 102, 0.3)',
  },
  wins: {
    bg: 'rgba(153, 51, 255, 0.1)',
    text: 'var(--neon-purple)',
    border: 'rgba(153, 51, 255, 0.3)',
  },
  reflectie: {
    bg: 'rgba(0, 102, 255, 0.1)',
    text: 'var(--neon-blue)',
    border: 'rgba(0, 102, 255, 0.3)',
  },
  team: {
    bg: 'rgba(255, 0, 255, 0.1)',
    text: 'var(--neon-pink)',
    border: 'rgba(255, 0, 255, 0.3)',
  },
};

export function TagPill({ tag, active = false, onClick }: TagPillProps) {
  const colors = tagColors[tag];

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
        onClick ? 'cursor-pointer hover:scale-105' : 'cursor-default'
      } ${active ? 'shadow-[0_0_15px_rgba(0,240,255,0.5)]' : ''}`}
      style={{
        backgroundColor: active ? colors.border : colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        fontFamily: 'var(--font-mono)',
      }}
      disabled={!onClick}
    >
      {tag}
    </button>
  );
}
