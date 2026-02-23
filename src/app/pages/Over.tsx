import { Github, Linkedin, MapPin, Building2, Target, Code, Users, Lightbulb } from 'lucide-react';

export function Over() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Over deze <span className="text-[var(--neon-cyan)]">Stage</span>
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            Mijn reis als stagiair-developer bij Trans-IT: van onboarding tot production-ready code.
          </p>
        </div>

        {/* Developer Section */}
        <section className="mb-16">
          <div className="p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <div>
                <h2 className="text-3xl font-bold mb-2">Lars Verheyden</h2>
                <p className="text-[var(--neon-cyan)] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                  Full-Stack Development Stagiair
                </p>
                
                <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  Een gepassioneerde developer in opleiding. Bij Trans-IT werk ik samen met andere developers om functionaliteiten te bouwen in de web-app, aanpassingen aan bestaande zaken, maar ook nieuwe features.
                 Zo leer ik dagelijks van een ervaren team en doe ik ervaring op met echte projecten.
                </p>

                <p className="text-[var(--foreground)] mb-8 leading-relaxed">
                  Mijn doel is om een solide fundament te leggen in software development en kwalitatieve applicaties te bouwen. Deze blog is mijn manier om transparant te delen wat ik leer, welke fouten ik maak, en hoe ik daarvan groei.
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/LarsVerheyden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg hover:border-[var(--neon-cyan)] hover:bg-[var(--glass-bg)] transition-all group"
                  >
                    <Github className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--neon-cyan)] transition-colors" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lars-verheyden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg hover:border-[var(--neon-blue)] hover:bg-[var(--glass-bg)] transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--neon-blue)] transition-colors" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="mb-16">
          <div className="p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[var(--neon-cyan)]" />
              <h2 className="text-3xl font-bold">De Productieomgeving</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--neon-purple)]">Trans-IT</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                  Trans-IT is een innovatieve SaaS-ontwikkelaar uit Heist-op-den-Berg die zich richt op intelligente 
                  softwareoplossingen voor de transportsector, met een sterke focus op containertransport. Met hun 
                  gebruiksvriendelijk, AI-gebaseerd Transport Management System (TMS) automatiseren ze planningen, 
                  administratie en documentverwerking, zodat transportbedrijven efficiënter en duurzamer kunnen werken. 
                  Dankzij de combinatie van diepgaande operationele sectorkennis en moderne technologie creëert Trans-IT 
                  een ideale omgeving voor developers die willen meewerken aan impactvolle, data-gedreven producten.
                </p>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <MapPin className="w-4 h-4 text-[var(--neon-cyan)]" />
                  <span>Heist-op-den-Berg, België</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center">
                  <div className="text-2xl font-bold text-[var(--neon-cyan)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                    6+
                  </div>
                  <div className="text-[var(--muted-foreground)] text-sm">Teamleden</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center">
                  <div className="text-2xl font-bold text-[var(--neon-purple)] mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                    TMS
                  </div>
                  <div className="text-[var(--muted-foreground)] text-sm">AI-gedreven TMS en logistieke softwaremodules</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-center">
                  <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-mono)', color: '#00ff88' }}>
                    ~2020
                  </div>
                  <div className="text-[var(--muted-foreground)] text-sm">Opgericht</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Section */}
        <section>
          <div className="p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--glass-border)] backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[var(--neon-cyan)]" />
              <h2 className="text-3xl font-bold">Mijn Rol als Stagiair</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tech Stack */}
              <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-6 h-6 text-[var(--neon-cyan)]" />
                  <h3 className="font-semibold">Tech Stack</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-cyan)] mt-1">▸</span>
                    <span>React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-cyan)] mt-1">▸</span>
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-cyan)] mt-1">▸</span>
                    <span>GraphQL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-cyan)] mt-1">▸</span>
                    <span>AWS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-cyan)] mt-1">▸</span>
                    <span>Git</span>
                  </li>
                </ul>
              </div>

              {/* Taken */}
              <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--neon-purple)] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-[var(--neon-purple)]" />
                  <h3 className="font-semibold">Taken</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-purple)] mt-1">▸</span>
                    <span>Tickets oppakken via Jira en omzetten in werkbare taken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-purple)] mt-1">▸</span>
                    <span>Nieuwe functionaliteiten bouwen in de TMS web-app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-purple)] mt-1">▸</span>
                    <span>Bestaande onderdelen van de applicatie aanpassen of verbeteren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-purple)] mt-1">▸</span>
                    <span>Code schrijven die aansluit bij de bestaande codebase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neon-purple)] mt-1">▸</span>
                    <span>Samenwerken met het team (code reviews, overleg)</span>
                  </li>
                </ul>
              </div>

              {/* Leerdoelen */}
              <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[#00ff88] transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6" style={{ color: '#00ff88' }} />
                  <h3 className="font-semibold">Leerdoelen</h3>
                </div>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: '#00ff88' }}>▸</span>
                    <span>Kwalitatieve, onderhoudbare code in een productie-omgeving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: '#00ff88' }}>▸</span>
                    <span>Werken in een agile context (Jira, tickets, sprints)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: '#00ff88' }}>▸</span>
                    <span>React en GraphQL effectief inzetten in een echte applicatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: '#00ff88' }}>▸</span>
                    <span>AWS en moderne tooling voor deployment en development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: '#00ff88' }}>▸</span>
                    <span>Samenwerken in een klein, groeiend team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
