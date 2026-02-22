export type TagType = 'code' | 'lessons-learned' | 'fails' | 'wins' | 'reflectie' | 'team';

export interface BlogPost {
  id: string;
  week: number;
  version: string;
  title: string;
  date: string;
  teaser: string;
  tags: TagType[];
  highlights: string[];
  technicalSpotlight: {
    title: string;
    content: string;
    codeSnippet?: string;
  };
  learned: string[];
  changelog: {
    added: string[];
    changed: string[];
    fixed: string[];
    knownIssues: string[];
  };
}
