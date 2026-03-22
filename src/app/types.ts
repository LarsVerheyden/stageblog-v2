export type TagType = 'code' | 'lessons-learned' | 'fails' | 'wins' | 'reflectie' | 'team';

export interface EvaluationWorkPointsSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  week: number;
  version: string;
  title: string;
  date: string;
  teaser: string;
  /** Optioneel: pad naar een afbeelding (bijv. in public/) voor bij de release */
  image?: string;
  tags: TagType[];
  highlights: string[];
  technicalSpotlight: {
    title: string;
    content: string;
    codeSnippet?: string;
  };
  learned: string[];
  /** Optioneel: nadruk op werkpunten uit tussentijdse evaluatie op de releasepagina */
  evaluationWorkPoints?: EvaluationWorkPointsSection;
  changelog: {
    added: string[];
    changed: string[];
    fixed: string[];
    knownIssues: string[];
  };
}
