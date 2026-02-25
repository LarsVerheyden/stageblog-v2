import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'week-3',
    week: 3,
    version: 'v1.2',
    title: 'Sprintafronding & verfijnen',
    date: '2026-02-21',
    teaser: 'Week 3 stond in het teken van afronden en verfijnen: einde van de eerste sprint, werk tonen in de review (btw-validatie positief onthaald), shortcut-ticket afgerond, export-Excel en extra velden transport-export, plus een volle dag PR\'s en technische reviews.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Einde eerste sprint: ticket net niet op tijd af (bleek meer werk dan gedacht)',
      'Sprintmeeting/review: eigen werk getoond: btw-validatie met autofill heel positief onthaald door het team',
      'Shortcut-ticket tussen verschillende schermen eindelijk afgerond',
      'Nieuw export-naar-Excel-ticket (analyse-tab): eerst backend-lambda\'s in een schema uitgetekend, daarna coderen',
      'Extra velden toegevoegd aan de transport-export',
      'Volledige dag aan pull requests en technische reviews: code verbeteren en kleine aanpassingen doorvoeren'
    ],
    technicalSpotlight: {
      title: 'Export Excel: eerst schema, dan code',
      content: 'Bij het nieuwe export-naar-Excel-ticket onder de analyse-tab heb ik eerst de nodige backend-lambda\'s in een schema uitgetekend (met Cursor)voordat ik begon te coderen. Dat hielp om de aanpak helder te krijgen en voorkomt dat je halverwege moet herschikken. Een goede gewoonte voor grotere tickets met meerdere onderdelen.',
    },
    learned: [
      'Sprint-einde: soms is een ticket net iets meer werk dan je denkt, niet alles past in de laatste dag',
      'Werk tonen in de review: fijn om btw-validatie zo positief terug te horen',
      'Plan eerst (schema/lambda\'s) bij grotere features, dan pas coderen',
      'PR\'s en technische reviews nemen een volle dag in beslag maar leveren kwaliteit op'
    ],
    changelog: {
      added: [
        'Shortcut tussen schermen (transport overview -> customer tab) afgerond',
        'Start export-naar-Excel onder analyse-tab (schema backend-lambda\'s uitgewerkt)',
        'Extra velden in de transport-export'
      ],
      changed: [
        'Eerder werk verfijnd en afgerond',
        'Code verbeteringen en kleine aanpassingen via PR-reviews'
      ],
      fixed: [
        'Shortcut-ticket dat in week 2 net niet af was, nu wel afgerond'
      ],
      knownIssues: [
        'Eén ticket op maandag (sprint-einde) net niet helemaal klaar—meer werk dan gedacht',
        'Export-Excel-ticket nog in uitvoering'
      ]
    }
  },
  {
    id: 'week-2',
    week: 2,
    version: 'v1.1',
    title: 'Eerste grotere tickets & GraphQL',
    date: '2026-02-14',
    teaser: 'Week 2: verder op dat tempo, meer onderdeel van het team. Van BTW op de supplier page en emailCost tot mijn eerste 5-punten ticket met GraphQL-schema, een Git-les over deploy en cherry-picking, en het afronden van het extra fields truck-ticket.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'BTW-validatie en autofill op de supplier page (zelfde als week 1, andere page)',
      'Email onthouden bij emailCost en ticket volledig afgewerkt (meer werk dan gepland)',
      'Ticket: bulk "administration done" zetten; eerste uitleg over een groter ticket (5 punten)',
      'GraphQL-schema aangepast met een collega, pipeline leren draaien en wachten op resultaten',
      'Git-les: deploy, hotfix en cherry-pick van commits',
      'Extra fields truck-ticket: veel backend-aanpassingen, daarna frontend, backend-error opgelost',
      'Gestart: shortcut transport overview -> customer tab (technisch uitdagend, net niet af)'
    ],
    technicalSpotlight: {
      title: 'GraphQL-schema en pipeline',
      content: 'Ik kreeg uitleg over mijn eerste grotere ticket (5 punten, inclusief backend) en paste samen met een collega het GraphQL-schema aan. Daarna leerde ik hoe de pipeline draait en dat je soms moet wachten op de resultaten voordat je verder kunt. Dat gaf me een duidelijker beeld van hoe een feature van schema tot deploy loopt.',
    },
    learned: [
      'Hoe je een ticket aanpakt dat in bulk iets moet zetten (administration done)',
      'GraphQL-schema aanpassen in overleg en de pipeline in de praktijk',
      'Deploy, hotfix en cherry-pick: korte Git-les van het team',
      'Grotere tickets: na analyse toch veel backend-werk, dan pas frontend; vervelende errors onderweg'
    ],
    changelog: {
      added: [
        'BTW-validatie en autofill op supplier page',
        'Onthouden van e-mailadres bij emailCost',
        'Bulk "administration done"-ticket afgehandeld',
        'GraphQL-schema aangepast (samen met collega)',
        'Extra velden truck (backend + frontend) afgerond'
      ],
      changed: [
        'emailCost-ticket verder afgewerkt (bleek meer werk dan gepland)',
        'Pipeline-workflow en wachten op resultaten meegenomen in workflow'
      ],
      fixed: [
        'Vervelende backend-error bij extra fields truck',
        'Nog enkele kleinere fouten rond het truck-ticket'
      ],
      knownIssues: [
        'Shortcut transport overview -> customer tab net niet volledig afgewerkt (technisch uitdagend)',
        'emailCost-ticket vroeg meer tijd dan ingeschat'
      ]
    }
  },
  {
    id: 'week-1',
    week: 1,
    version: 'v1.0',
    title: 'Onboarding & eerste tickets',
    date: '2026-02-07',
    teaser: 'Mijn eerste week bij Trans-IT: geïntroduceerd in het bedrijf en de manier van werken, accounts en tools opgezet, en meteen al eerste tickets opgepakt, van URL-aanpassingen tot BTW-validatie en mijn eerste PR-reviews.',
    tags: ['team', 'reflectie', 'code', 'wins'],
    highlights: [
      'Intro in het bedrijf: accounts, tools, sprintmeeting en dagelijkse stand-up',
      'Eerste blik op de codebase en eerste tickets, URL-aanpassing opgelost net voor release',
      'Apply button & toll base price fix (thuiswerken, na zoeken naar de juiste files)',
      'BTW-nummer validatie en autofill via externe API geïmplementeerd',
      'Voor het eerst pull requests nagekeken met behulp van Copilot'
    ],
    technicalSpotlight: {
      title: 'BTW-validatie en externe API',
      content: 'Eén van mijn tickets ging over het valideren van een btw-nummer en het autofillen van gegevens via een externe API. Daarmee kreeg ik meteen te maken met API-aanroepen vanuit de app, foutafhandeling en het koppelen van validatie aan de UI. Goede oefening om in een bestaande codebase te duiken en een concrete feature af te leveren.',
    },
    learned: [
      'Hoe het team werkt: sprintmeetings, stand-ups, Jira en de release-cyclus',
      'Codebase verkennen kost tijd, zeker thuis zonder collega naast je',
      'Eerste PR\'s reviewen met Copilot als ondersteuning bij commentaar',
      'Tickets lopen uiteen van kleine fixes (URL\'s) tot grotere features (export Excel)'
    ],
    changelog: {
      added: [
        'Alle nodige accounts en tools geïnstalleerd',
        'Deelname aan sprintmeeting en dagelijkse stand-up',
        'Eerste tickets opgepakt en opgelost',
        'Pull requests nagekeken met Copilot-commentaar'
      ],
      changed: [
        'URL-aanpassingen (net op tijd voor release)',
        'Apply button & toll base price fix',
        'BTW-nummer validatie met autofill via externe API'
      ],
      fixed: [
        'Apply button en toll base price (na zoeken naar juiste files)',
        'BTW-validatie en koppeling met externe API'
      ],
      knownIssues: [
        'Veel tijd verloren met zoeken naar de juiste files (één ticket, thuiswerken)',
        'Tickets worden stilaan moeilijker: bijv. export naar Excel in het vooruitzicht'
      ]
    }
  }
];
