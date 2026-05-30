import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'week-15',
    week: 15,
    version: 'v2.4',
    title: 'Custom mails testen, documentatie schrijven en stage afronden',
    date: '2026-05-17',
    image: '/images/week-15.png',
    teaser:
      'Deze week was korter door de feestdag, maar er was nog veel te doen. Op maandag testte en verfijnde ik de custom mailfunctionaliteit. Dertien van de vijftien mailtypes werkten al zoals bedoeld. In de sprintmeeting kon ik tonen wat ik gebouwd had. De custom e-mailhandtekening en de custom auto mail werden goed ontvangen. Daarna deed ik code cleanup en kleine aanpassingen, ook in de vertalingen, zodat alles netter en consistenter oogde. De volgende dagen lag de nadruk op afronding en documentatie. Ik werkte de user guide verder uit en schreef technische documentatie over wat al klaar is en wat er nog moet gebeuren om het ticket af te ronden. Ook startte ik de laatste testfase voor custom fields for truck. Ik schreef de eerste systeemtests in Playwright. Toen de software en packages correct geïnstalleerd waren, kon ik verder testen en extra tests toevoegen. Tegen het einde verwerkte ik feedback over mijn stage en rondde ik mijn laatste documenten af. Ik schreef nog extra tests voor de truckfunctionaliteit en een korte reflectie voor Ismat. Als afsluiter was er een klein afscheidsmoment met een hapje, drankje en darts. Zo eindigde de stage op een leuke en persoonlijke manier.',
    tags: ['code', 'wins', 'lessons-learned', 'team', 'reflectie'],
    highlights: [
      'Custom mailfunctionaliteit verder getest en verfijnd: dertien van de vijftien mailtypes werken zoals bedoeld',
      'Sprintmeeting: demo van custom e-mailhandtekening en custom auto mail, beide positief onthaald',
      'Code cleanup en kleine aanpassingen, onder andere in de vertalingen, voor een nettere en consistentere app',
      'User guide verder uitgewerkt en technische documentatie over status en openstaande punten van het ticket',
      'Laatste testfase voor custom fields for truck gestart met eerste systeemtests in Playwright',
      'Feedback over de stage verwerkt, laatste documenten afgerond en korte reflectie voor Ismat geschreven',
      'Afscheidsmoment met hapje, drankje en darts als persoonlijke afsluiter van de stage'
    ],
    technicalSpotlight: {
      title: 'Testen en documenteren naast afwerken',
      content:
        'Bij mailtypes helpt het om ze één voor één te testen en bij te houden welke al goed zijn. Documentatie over wat klaar is en wat nog openstaat, maakt het makkelijker om een ticket later af te ronden of over te dragen. Voor Playwright-tests moet je setup eerst kloppen. Als packages en software pas laat goed staan, verlies je tijd. Dan is het nuttig om die installatie vroeg te regelen, zodat je de rest van de week echt kunt testen.'
    },
    learned: [
      'Positieve feedback in de sprintmeeting geeft vertrouwen, maar twee mailtypes en open ticketwerk blijven aandacht vragen',
      'Goede documentatie en tests maken het makkelijker om werk over te dragen of later verder te zetten',
    ],
    changelog: {
      added: [
        'Technische documentatie over voortgang en openstaande punten voor het mailticket',
        'Eerste en extra systeemtests in Playwright voor custom fields for truck',
        'Korte reflectie voor Ismat en verwerking van stagefeedback'
      ],
      changed: [
        'Custom mailfunctionaliteit verder verfijnd, vertalingen en kleine UI-aanpassingen voor meer consistentie',
        'User guide verder uitgewerkt'
      ],
      fixed: [],
      knownIssues: [
        'Twee van de vijftien mailtypes moeten nog getest of afgerond worden',
        'Custom fields for truck: testfase loopt, meer systeemtests kunnen nog volgen',
        'Ticket rond custom mails nog niet volledig afgesloten volgens technische documentatie'
      ]
    }
  },
  {
    id: 'week-14',
    week: 14,
    version: 'v2.3',
    title: 'Placeholders corrigeren, hook voor mailtemplate en grote opkuis',
    date: '2026-05-10',
    teaser:
      'Deze week ging ik verder met feedback op placeholders: sommige pasten niet bij de juiste context, bijvoorbeeld een klantnaam waar het over een leverancier ging. Dat aanpassen kostte tijd, vooral omdat ik moest uitzoeken wat in de transportsector logisch is. (ben zelf niet echt thuis in de transportsector) Op maandag na een korte wandeling met Ismat nog kort gedart, ik ben daar (helaas) niet zo sterk in. Ik was al begonnen aan de hook voor de e-mailbodytemplate en maakte die deze week af. Billing en invoice zette ik in als testsubject. Daarna verplaatste ik code uit apiIntegration en companyService naar eigen integration- en servicebestanden. Samen met Ismat deed ik nog een implementatieronde met veel knippen en plakken en verwijderen, zo kon ik een kleine vijftien tot twintig dubbele bestanden wegdoen. Op donderdag werkte ik alles technisch af maar deed de beoogde functionaliteit het niet, zonder foutmelding. Ik kon het probleem beperken tot één useEffect, maar de exacte oorzaak bleef onduidelijk tot later. Verder was er een tweede intervisiemoment met medestudenten en testte ik ook verschillende soorten mails. Ongeveer drie kwart van de mailtypes doet wat ik wil, de rest is nog niet getest of nog niet in orde door tijdgebrek.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Hook voor emailBodyTemplate: eerst veel werk om te starten, daarna afgerond na veel denkwerk over meerdere bestanden',
      'Billing en invoice als testsubject uitgewerkt',
      'Refactor: code uit apiIntegration en companyService naar eigen integration en service gezet',
      'Implementatie: veel dubbele code weg, ongeveer vijftien tot twintig bestanden verwijderd',
      'Bug zonder errors: gedrag klopt niet, oorzaak ingeperkt tot één useEffect, verder uitpluizen is voor een andere dag',
      'Tweede intervisiemoment: stage en verschillen tussen werkplekken besproken met medestudenten',
      'Na het intervisiemoment naar huis met (weer) wat treinvertraging, daarna verder aan auto mailtemplates',
      'Auto mailtemplates verder getest: ruwweg drie kwart van de mailtypes werkt zoals bedoeld'
    ],
    technicalSpotlight: {
      title: 'Veel bestanden, één hook en stille bugs',
      content:
        'Een hook voor een mailtemplate raakt snel veel plekken in de codebase. Als je oude code opruimt en naar eigen modules verplaatst, helpt dat om het overzicht te houden. Als iets niet werkt maar de console blijft leeg, moet je stap voor stap volgen wat er in een useEffect gebeurt. Dan weet je tenminste waar je verder moet zoeken, ook al is de echte fout nog niet gevonden. (een duidelijke error hebben was gemakkelijker geweest)'
    },
    learned: [
      'Placeholders zijn pas goed als de naam ook bij de juiste rol hoort, voor transport moet je soms even navragen wat gebruikelijk is',
      'Grote refactor met veel verwijderen voelt goed, maar daarna moet je alles nog eens testen, wat veel werk is',
      'Geen foutmelding wil nog niet zeggen dat alles goed gaat',
    ],
    changelog: {
      added: [
        'Hook voor emailBodyTemplate en uitwerking van billing en invoice als testsubject',
        'Eigen integration- en servicebestanden voor code die eerst in apiIntegration en companyService zat'
      ],
      changed: [
        'Placeholders aangepast na feedback zodat namen beter bij de context passen',
        'Implementatie doorgevoerd in andere bestanden na afstemming met Ismat, dubbele functionaliteit verwijderd'
      ],
      fixed: [],
      knownIssues: [
        'Billing en invoice als testsubject getest na implementatie',
        'Probleem met gedrag van een useEffect na grote refactor, verder onderzoek gebeurt maandag',
        'Ongeveer een kwart van de mailtypes nog niet af: niet getest, fouten nog niet bekeken of nog niet opgelost'
      ]
    }
  },
  {
    id: 'week-13',
    week: 13,
    version: 'v2.2',
    title: 'Basis en UI rond signatures en mailtemplates verder afwerken',
    date: '2026-05-03',
    teaser:
      'Deze week ging volledig naar het verder afwerken van de basis en de UI rond de signatures en mailtemplates, zonder al aan Lambdas of layers te raken. Ik begon met een korte uitleg over GitHub-reviews van Steven en pikte in de voormiddag heel wat kleine reviewopmerkingen op, vooral rond leesbaarheid en consistentie. Tijdens de sprintmeeting had ik nog niet veel om te tonen omdat ik nog midden in hetzelfde grote ticket zat. Daarna kreeg ik van Ismat vooral feedback over gebruiksvriendelijkheid, kleine dingen zoals waar een Save-knop hoort te staan, vanzelfsprekend voor vaste gebruikers maar minder voor mij. De volgende dag heb ik die designsuggesties verwerkt en ook enkele zaken aangepast die functioneel niet helemaal logisch waren binnen de bestaande flow van de applicatie. Daarna verschoof de focus weer volledig naar de mailtemplates: de json grondig nagekeken, vergeleken en aangepast na feedback van Ismat, zodat de structuur nu beter aansluit bij hoe de app met default en custom templates moet omgaan. Op het einde van de week kwam er opnieuw feedback, deze keer vooral over placeholders en een paar kleine UI-accenten. Die placeholders heb ik gerefactord en consistenter gemaakt, wat verrassend veel werk was, maar er wel voor zorgt dat de gebruiker straks een duidelijker en vollediger voorbeeld ziet bij het aanpassen van een template. Zo staat de hele basis (json, placeholders en UI) nu klaar, zodat ik volgende week kan starten aan de laatste stap: de Lambda- en layerkant van het ticket.',
    tags: ['code', 'lessons-learned', 'team'],
    highlights: [
      'Korte uitleg van Steven over GitHub-reviews, daarna in de voormiddag een reeks kleine reviewopmerkingen opgepikt en toegepast',
      'Sprintmeeting met weinig om te demonstreren, want hetzelfde grote ticket liep nog door',
      'Feedback van Ismat over gebruiksvriendelijkheid: kleine UI-keuzes zoals de plaats van een Save-knop',
      'Designsuggesties verwerkt en enkele functioneel onlogische stukken bijgestuurd binnen de bestaande flow',
      'Json van de mailtemplates grondig nagekeken, vergeleken en aangepast na feedback van Ismat',
      'Structuur van default en custom templates beter laten aansluiten bij hoe de app ermee werkt',
      'Op het einde van de week feedback gekregen over placeholders en een paar kleine UI-accenten',
      'Placeholders gerefactord en consistenter gemaakt zodat de gebruiker straks een duidelijker voorbeeld ziet'
    ],
    technicalSpotlight: {
      title: 'Eerst de basis afmaken, dan pas naar Lambdas en layers',
      content:
        'Door deze week bewust nog niet aan de Lambdas en layers te beginnen, kon ik de basis (json, placeholders en UI) eerst netjes afwerken. Reviewopmerkingen rond leesbaarheid en consistentie samen oppakken zorgt voor minder kleine verschillen verspreid over het ticket. De feedback van Ismat over gebruiksvriendelijkheid maakte zichtbaar dat sommige UI-keuzes voor een vaste gebruiker vanzelfsprekend zijn maar voor mij niet, dus dat was nuttig om vroeg mee te nemen. Het refactoren van placeholders nam meer tijd dan verwacht, maar dat soort consistentiewerk loont straks dubbel zodra de Lambda- en layerkant erbij komt.'
    },
    learned: [
      'Eerst de basis en UI laten kloppen voor je naar de Lambda- en layerkant gaat, geeft minder verspreid herstelwerk achteraf',
      'Wat voor een vaste gebruiker vanzelfsprekend is, is dat niet altijd voor iemand die de app pas leert kennen, vroege UX-feedback is daarom waardevol',
      'Een sprintmeeting waar je weinig kan tonen voelt minder fijn, maar bij grotere tickets is dat normaal en geen probleem',
      'Placeholders consistenter maken is verrassend veel werk, maar zorgt voor een veel duidelijker voorbeeld voor de eindgebruiker'
    ],
    changelog: {
      added: [
        'Consistentere placeholders in de mailtemplates voor een duidelijker voorbeeld bij het aanpassen van een template',
        'Verwerkte designsuggesties van Ismat in de signature- en templatescherm-UI'
      ],
      changed: [
        'Json van de mailtemplates aangepast zodat default en custom templates beter aansluiten bij de app',
        'Kleine functionele bijsturingen in de bestaande flow waar iets niet helemaal logisch zat',
        'Reviewopmerkingen rond leesbaarheid en consistentie verwerkt'
      ],
      fixed: [],
      knownIssues: [
        'Lambda- en layerkant van het ticket staat klaar voor volgende week, basis (json, placeholders en UI) is af'
      ]
    }
  },
  {
    id: 'week-12',
    week: 12,
    version: 'v2.1',
    title: 'E-mailhandtekening afronden, herbruikbaar contract en custom auto mails opbouwen',
    date: '2026-04-26',
    teaser:
      'Deze week heb ik vooral verder gewerkt aan het grote ticket rond e-mailhandtekening en custom mails. Ik rondde de volledige UI af voor de gebruikers- en bedrijfshandtekening, zodat alles duidelijk is te customizen. Daarna startte ik met het tweede deel en zette een eerste stap voor de Lambdas (layer), met oog op hergebruik zoals bij de bestaande e-mailutil. Uitgebreide feedback van Ismat ging vooral over hergebruik. Op zijn advies werd het oorspronkelijke signaturecontract breder, zodat dezelfde opzet straks ook voor custom auto mails past. Ook zette ik placeholders in zodat geen enkele gebruiker van nul moet starten. Later verfijnde ik de handtekening-UI, werkte de resolver en het schema bij en kon ik alles met de pipeline mergen. Tegen het einde lag de focus op custom mails, met een grote json voor standaard- en fallbacktemplates en de pagina om custom mails te beheren. Het ticket is nog niet 100% klaar, maar de basis voor handtekening en custom mails staat stevig en is voor maandag klaar om af te werken.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'E-mailhandtekening-UI afgewerkt voor user en company met een overzichtelijke flow',
      'Eerste Lambda-layer neergezet, aansluitend op bestaande patronen zoals de e-mailutil',
      'Feedback van Ismat vooral rond hergebruik: contract verbreed zodat custom auto mails dezelfde structuur kunnen gebruiken',
      'Placeholders, zodat iemand zonder e-mail signature niet alles helemaal opnieuw hoeft te maken',
      'Signature-UI aangescherpt, e-mailhandtekeningresolver en schema aangepast, klaar richting pipeline',
      'Custom mail: grote json met default- en fallbacktemplates uitgewerkt, meer tijd dan eerst verwacht',
      'Pagina voor beheer van custom mails stond tegen het eind van de week goed op punt'
    ],
    technicalSpotlight: {
      title: 'Eén contract voor signature en toekomstige mails',
      content:
        'Door het contract te verbreden in plaats van alleen de handtekening mee te nemen, houden de UI, de resolver en later de custom auto mails dezelfde afspraken. Een layer voor de Lambdas, zoals bij de bestaande e-mailutil, laat dezelfde stukken op meerdere plekken werken. Placeholders zorgen dat de "eerste ervaring" niet leeg is, makkelijker te testen en gebruiksvriendelijker.'
    },
    learned: [
      'Bij grote json-structuren lijkt het eenvoudig, toch kost het uitwerken en uitzoeken van default en fallback al snel langer dan je denkt',
      'Herbruikbaarheid in review terugkrijgen geeft richting, liever even herschikken in het midden van het werk dan straks overal anders oplossen',
      'Als dagen in het ticket logisch op elkaar doorgaan, is het eenvoudig om door te lopen, ook wanneer het eindpunt niet dezelfde week haalbaar is',
      'Custom mails met een grote json voor default- en fallbacktemplates is een goede manier om de basis te leggen voor custom mails, zodat later meer kan worden toegevoegd'
    ],
    changelog: {
      added: [
        'Afgeronde UI voor gebruikers- en bedrijfshandtekening, eerste Lambda-layer met hergebruik',
        'Algemener e-mailcontract met placeholders, updates aan resolver en schema, json voor custom mailtemplates met default en fallback',
        'Stabiele basis-UI om custom mails te beheren'
      ],
      changed: [
        'Signature-gericht contract en resolver op schaal gebracht richting breder e-mailgebruik'
      ],
      fixed: [],
      knownIssues: [
        'Ticket handtekening en custom mails nog niet volledig afgesloten, resterend werk gepland maandag'
      ]
    }
  },
  {
    id: 'week-11',
    week: 11,
    version: 'v2.0',
    title: 'Location notes afronden, e-mailhandtekening en beheer van mailtemplates opzetten',
    date: '2026-04-19',
    teaser:
      'Deze week startte met het afronden van het location-notes-ticket: opmerkingen bij locaties verschijnen nu als tooltips in het transportoverzicht en op de planning-naar-transports-pagina. Daarna kreeg ik van Ismat een groter, acht storypoints ticket: gebruikers moeten hun e-mailhandtekening kunnen customizen en alle uitgaande mails vanuit de app moeten qua template aanpasbaar worden. Na gezamenlijke eerste analyse en voorbereidende schema-wijzigingen ging ik zelf verder met uitwerking, een duidelijke takenlijst, en de stapsgewijze opbouw van de basis. Ik definieerde een “contract” voor de signature, paste emailsUtil daarop aan, bouwde een eerste edit-formulier en schoof daarna richting frontend: user signature grotendeels afgewerkt, UI verfijnd en het grootste deel van de company-signature opgezet. Nog enkele final touches en UX-verfijning, maar de kern staat.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Location-notes-ticket af: tooltips met locatie-opmerkingen in transportoverzicht en op planning-naar-transports',
      'Nieuw acht-storypoints ticket van Ismat: custom user signature + aanpasbare templates voor alle uitgaande mails',
      'Eerste gezamenlijke analyse, schema voorbereid, daarna zelfstandig uitwerking en takenlijst',
      'Analyse verdiept, basis opgebouwd: signature-contract, emailsUtil hierop afgestemd, eerste handtekeningformulier',
      'Focus op frontend: user signature nagenoeg rond, UI aangescherpt, company-signature grotendeels opgezet',
      'Klein opruimwerk en usability nog open, maar kernfunctionaliteit voor het signature deel is afgerond'
    ],
    technicalSpotlight: {
      title: 'Signature contract: dezelfde afspraken in util en UI',
      content:
        'Centraliseren in een duidelijk contract voor de e-mailhandtekening maakt dat emailsUtil en de UI dezelfde afspraken houden: minder problemen bij uitbreiding en minder werk bij nieuwe template-plekken. Een takenlijst na de eerste analyse hield overzicht terwijl ik stap voor stap de base-laag en daarna de schermen opbouwde. Dat hielp om “company” en “user” gescheiden te houden, maar toch in hetzelfde spoor te blijven.'
    },
    learned: [
      'Bij 8 story points helpt expliciet bijhouden wat al klaar is en wat nog in de frontend of UX zit, zodat je eindfase niet vertekent',
      'Een gedeeld contract tussen util en UI voorkomt dat handtekening en templates op twee manieren worden gedefinieerd',
      'Na een ticket met duidelijk scope-einde (location notes) voelt de switch naar een groter ticket zwaarder: dat hoort erbij en geeft groeimogelijkheden'
    ],
    changelog: {
      added: [
        'Location-opmerkingen als tooltips in transportoverzicht en op planning-naar-transports',
        'Eerste versie van signature- en template-systeem: contract voor signature, integratie in emailsUtil, editformulier en UI voor user- en grotendeels company signature'
      ],
      changed: [
        'emailsUtil aangepast om te werken met het nieuwe signature-contract'
      ],
      fixed: [],
      knownIssues: [
        'Final touches en usability-verbeteringen voor handtekening en template-beheer is voor volgende week',
        'Mailtemplates volledig gebruiken en afronden moet verder afgewerkt worden in het vervolg van dit ticket'
      ]
    }
  },
  {
    id: 'week-10',
    week: 10,
    version: 'v1.9',
    title: 'Custom fields verfijnen, export en reminders uitbreiden, requested changes afronden',
    date: '2026-04-12',
    teaser:
      'Deze week bouwde ik vooral verder op lopende functionaliteit met focus op kwaliteit en herbruikbaarheid. Het ticket rond custom fields for drivers is zo goed als volledig afgerond en de bestaande logica werd opgeschoond zodat uitbreidingen later vlotter gaan. Daarna startte ik een nieuw ticket om customer reference en containernummer toe te voegen in de Excel-export en in reminder-mails. Na analyse volgden de nodige Lambda-wijzigingen en de dag erna werkte ik alles af tot het ticket volledig getest was. Tussen het werk door namen we met het team een korte ijsjespauze. De week eindigde met een volledige dag requested changes verwerken, vooral rond leesbaarheid en kleine verbeteringen, waardoor beide tickets er merkbaar strakker op staan.',
    image: '/images/week-10.png',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Ticket custom fields for drivers bijna volledig afgerond met extra focus op kwaliteit',
      'Bestaande custom-fields-logica opgeschoond en herbruikbaarder gemaakt voor latere uitbreidingen',
      'Nieuw ticket opgestart voor customer reference en containernummer in Excel-export en reminder-mail',
      'Na eerste analyse de nodige Lambda-aanpassingen doorgevoerd',
      'Ticket rond export en reminders de volgende dag volledig uitgewerkt en getest',
      'Korte pauze met collega’s in het lokale ijssalon zorgde voor een leuke break',
      'Laatste dag volledig besteed aan requested changes met focus op leesbaarheid en kleine verbeteringen'
    ],
    technicalSpotlight: {
      title: 'Herbruikbaarheid als versneller',
      content:
        'Door de custom-fields-logica eerst op te schonen en herbruikbaar te maken, kon ik daarna sneller en gerichter verder op het nieuwe ticket rond export en reminders. Die basis hielp om de Lambda-wijzigingen duidelijk af te bakenen en gecontroleerd te testen. Het maakte opnieuw zichtbaar dat investeren in structuur vooraf latere uitbreidingen eenvoudiger maakt.'
    },
    learned: [
      'Afwerken is meer dan klaar krijgen, de kwaliteit van de basis bepaalt hoe vlot een volgend ticket gaat',
      'Herbruikbare code verlaagt de drempel om nieuwe velden op meerdere plekken toe te voegen',
      'Requested changes rond leesbaarheid lijken klein maar maken een groot verschil in onderhoudbaarheid',
    ],
    changelog: {
      added: [
        'Customer reference en containernummer toegevoegd aan Excel-export van de reminder-mail',
        'Benodigde Lambda-wijzigingen voor de nieuwe export- en reminderdata'
      ],
      changed: [
        'Custom-fields-logica herwerkt met nadruk op opschoning en herbruikbaarheid',
        'Codekwaliteit verhoogd door requested changes op twee recente tickets volledig te verwerken'
      ],
      fixed: [
        'Leesbaarheidsproblemen en kleine verbeterpunten uit reviewcomments op beide tickets'
      ],
      knownIssues: [
        'Custom fields for drivers was deze week zo goed als afgerond, laatste afronding nodig in de volgende week'
      ]
    }
  },
  {
    id: 'week-9',
    week: 9,
    version: 'v1.8',
    title: 'Automatische mails, Lambda-splitsing en verfijning rond Copilot en bijlagen',
    date: '2026-04-05',
    teaser:
      'Deze week stond vooral in het teken van een groter technisch ticket: automatisch mails versturen naar de leverancier bij het verzenden van een transport naar de driver. Dat bleek inhoudelijk zwaarder dan eerst gedacht. Na uitbreiding van de logica en het opzetten van de Lambda liep ik vast op deployproblemen door de grootte van de environment variables. Samen met Ismat losten we dat op door de Lambda op te splitsen, waarna de pipeline weer correct draaide en ik verder kon testen. Nadien nog werk met het correct triggeren van de mail, tegen het einde van de week kon ik alles verifiëren. Daarnaast kleinere taken: het afwijzen van Copilot-jobs verfijnd (extra bevestigingsmodal weg op feedback) en het meesturen van een containerfoto als bijlage bij een automatisch bericht uitgewerkt na grondige analyse. Puzzelen, debuggen en bestaande logica verbeteren, met een stabiele functionaliteit als resultaat.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Groot ticket automatische mails bij verzenden naar de driver: complexer dan ingeschat, logica uitgebreid en benodigde Lambda aangepast',
      'Deploy geblokkeerd door omvang environment variables, samen met Ismat Lambda opgesplitst en pipeline weer werkende gekregen',
      'Permissies en triggers voor de mail verder afgesteld tot gedrag klopte',
      'Einde week: volledige verificatie en documentatie van de mail-automatisering',
      'Ticket Copilot-jobs afwijzen: op feedback extra bevestigingsmodal verwijderd om het aantal stappen voor de gebruiker te beperken',
      'Containerfoto als bijlage bij automatisch bericht: na analyse uitgewerkt en opgelost',
      'Weekbeeld: veel puzzelen en debuggen, belangrijkste functionaliteit uiteindelijk stabiel en werkend'
    ],
    technicalSpotlight: {
      title: 'Lambda te groot',
      content:
        'Te grote environment vairiables kunnen een deploy tegenhouden zonder dat de logica zelf fout is. Door de verantwoordelijkheden over meerdere Lambda’s te verdelen, blijft elke functie binnen de limieten en blijft de pipeline werkende. Het toont ook dat infrastructuur en applicatiecode samen moeten kloppen voordat je een feature echt “af” kunt noemen.'
    },
    learned: [
      'Extra UI-stappen (zoals een modal) kunnen tegenstrijdig zijn met gebruikersfeedback: minder "clicks" is soms beter',
      'CloudWatch kende ik nog niet, deze week voor het eerst gebruikt om logs te doorzoeken en met queries te filteren, zodat ik problemen kon lokaliseren',
      'Wanneer iets niet werkt, hoeft de oorzaak niet in de applicatielogica te zitten, deploy, pipeline of omgeving kunnen net zo goed het probleem zijn',
      'Documenteren nadat alles werkt is handig voor collega\'s en voor jezelf later'
    ],
    changelog: {
      added: [
        'Automatische mailflow bij transport verzenden naar driver: uitgewerkte logica, gesplitste Lambda-setup, documentatie na verificatie',
        'Containerfoto als bijlage bij automatisch bericht (na analyse)'
      ],
      changed: [
        'Copilot-gegenereerde jobs afwijzen: bevestigingsmodal verwijderd na feedback (minder stappen voor de gebruiker)'
      ],
      fixed: [
        'Deploy/pipeline na env-size-probleem -> Lambda opgesplitst',
        'Permissies en triggerlogica voor automatische mails tot consistent gedrag'
      ],
      knownIssues: [
        'Nog werken aan: iets sneller hulp vragen en minder "koppig" alles zelf willen oplossen'
      ]
    }
  },
  {
    id: 'week-8',
    week: 8,
    version: 'v1.7',
    title: 'Estimated ETD time, Copilot-jobs afwijzen en containerfoto als bijlage',
    date: '2026-03-29',
    teaser:
      'Deze week vooral twee grotere tickets verder afwerken, testen en bijsturen. Estimated ETD time kreeg nog twee volledige dagen: fouten opgelost, samen met Ismat het ticket van drie naar vijf story points gezet omdat het complexer bleek, feedback meteen toegepast en klaar voor een eerste technische review. Daarna een ticket om Copilot-gegenereerde jobs af te wijzen: extra analyse, daarna grotendeels uitgewerkt en getest. In de tweede helft dat ticket afgerond en gestart met een containerfoto als bijlage bij het automatische bericht. Backend en frontend aangepast, testen leverde nog problemen op en aan het einde van de week was het nog niet volledig in orde, met een duidelijke vervolgstap voor maandag.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Estimated ETD time: twee volledige dagen, bugs opgelost en met Ismat story points van drie naar vijf gezet wegens hogere complexiteit',
      'Eerste feedback op estimated ETD time snel toegepast, ticket klaar voor eerste technische review',
      'Nieuw ticket: Copilot-gegenereerde jobs kunnen afwijzen, eerst dieper in de bestaande Copilot-flow gedoken',
      'Copilot-afwijzen-ticket: groot deel uitgewerkt, getest en later in de week volledig afgerond',
      'Nieuw ticket: foto van een container meesturen als bijlage bij het automatische bericht, na analyse backend- en frontend-wijzigingen',
      'Bij testen containerfoto nog niet volledig zoals gewenst, meerdere oplossingen geprobeerd, einde week grote stap gezet, maandag verder'
    ],
    technicalSpotlight: {
      title: 'Van story points bijsturen tot bijlagen in automatische berichten',
      content:
        'Het estimated ETD time-ticket liet zien hoe schattingen kunnen verschuiven zodra de complexiteit duidelijker wordt. Samen met Ismat de story points verhogen geeft ruimte voor kwaliteit in plaats van te forceren op het oorspronkelijke plaatje. Snel feedback verwerken hielp om het ticket review-klaar te krijgen. Bij het afwijzen van Copilot-jobs was vertrouwdheid met de bestaande flow belangrijk: eerst analyseren, dan bouwen en testen. Het bijlage-ticket combineert weer backend en frontend, met testen dat pas laat de echte kanttekeningen zichtbaar maakt. Dat hoort bij grotere wijzigingen rond berichten en bestanden.'
    },
    learned: [
      'Als een ticket complexer uitpakt dan gedacht, story points bijsturen met je mentor is beter dan jezelf kort houden',
      'Onbekendere domeinen (zoals Copilot-gedrag) vragen eerst analyse voordat je grote stukken code schrijft',
      'Een ticket kan inhoudelijk klaar zijn voor review terwijl je de volgende al plant: goede overgang tussen tickets',
      'Bijlagen en automatische berichten: testen wijst pas uit waar het nog hapert',
      'Niet alles hoeft op vrijdag perfect: een duidelijke tussenstand en plan voor maandag is ook waardevol'
    ],
    changelog: {
      added: [
        'Estimated ETD time: uitwerking tot eerste technische review, inclusief correcties na feedback',
        'Functionaliteit om Copilot-gegenereerde jobs af te wijzen (volledig afgerond in de loop van de week)',
        'Start en uitwerking: containerfoto als bijlage bij automatisch bericht (backend en frontend)'
      ],
      changed: [
        'Estimated ETD time-ticket: story points met Ismat verhoogd van drie naar vijf na inschatting van complexiteit'
      ],
      fixed: [
        'Diverse fouten opgelost in het estimated ETD time-ticket tijdens afwerking en testen'
      ],
      knownIssues: [
        'Containerfoto als bijlage: gedrag bij testen nog niet zoals gewenst, vervolg gepland na het weekend'
      ]
    }
  },
  {
    id: 'week-7',
    week: 7,
    version: 'v1.6',
    title: 'Tussentijdse evaluatie, supplier price on order en late reasons',
    date: '2026-03-22',
    teaser:
      'De week begon met mijn tussentijdse evaluatie. We bespraken hoe de stage loopt, wat goed gaat, wat minder goed gaat en waar ik kan groeien. Daarna volgden de sprintmeeting en review met positieve feedback op mijn demo van het custom-fields-ticket. Verder werken aan supplier price on order (Lambda en frontend), load- en unload-referenties in de kostenmail, een bugfix in de zoekfunctie van het transport overview, late reasons op transportdetail en de start van het estimated ETD time-ticket.',
    tags: ['code', 'wins', 'lessons-learned', 'team', 'reflectie'],
    highlights: [
      'Tussentijdse evaluatie: werkpunten genoteerd en veel waardering voor inzet, zelfstandigheid en de complexere tickets die ik al heb opgepakt',
      'Eerste dag vooral overleg door evaluatie en aansluitende sprintmeeting',
      'Sprintreview: positieve feedback op de demo van het custom-fields-ticket',
      'Gestart met analyse van supplier price on order en een eerste schemawijziging voorbereid',
      'Supplier-ticket verder uitgewerkt: kleine Lambda-aanpassing, daarna frontend die vlot vooruitging',
      'Ticket load- en unload-referenties in de kostemail inhoudelijk bijna afgerond, dag nadien duidelijkere fallbacktekst toegevoegd',
      'Bug in zoekfunctie transport overview opgelost: zoeken op plaatsnamen bij Copilot-gegenereerde transporten',
      'Ticket late reasons bij transportdetail afgerond',
      'Reeks kleine requested changes op eerdere tickets doorgevoerd',
      'Gestart met analyse van estimated ETD time: nog geen gelijkaardige functionaliteit in de app, eerste basis gelegd voor volgende week'
    ],
    technicalSpotlight: {
      title: 'Van evaluatie naar resultaat: supplier ticket en transportdetail',
      content:
        'De evaluatie gaf structuur aan werkpunten en bevestigde dat zelfstandigheid en complexere tickets gewaardeerd worden. In de sprintreview kwam de demo van het custom-fields-ticket terug als erkenning voor de tijd en moeite. Daarna het supplier price on order-ticket: na schema en Lambda ging de frontend relatief vlot. Bij de kostenmail waren load- en unload-referenties met een betere fallbacktekst afgewerkt. Late reasons op transportdetail en een zoekbug bij Copilot-transporten maakten de week inhoudelijk afgerond, terwijl estimated ETD time een nieuwe uitdaging wordt zonder bestaand patroon in de applicatie. (en dus ook geen voorbeeld)'
    },
    learned: [
      'Een tussentijdse evaluatie helpt om groei en sterke punten scherp te krijgen en werkpunten concreet te noteren',
      'Positieve feedback op een demo na veel werk voelt bevestigend en motiveert voor vergelijkbare tickets',
      'Nieuwe tickets: eerste schemawijziging en Lambda voorbereiden maakt de frontend-bouw vlotter',
      'Kleine tickets zoals referenties in mail en fallbacktekst verfijnen leveren merkbare kwaliteitswinst op',
      'Zoeken op gegenereerde data vraagt aandacht voor edge cases, bijvoorbeeld plaatsnamen bij Copilot-transporten',
      'Features zonder gelijkaardige bestaande bouwstenen vragen extra analysedagen voordat je verder bouwt'
    ],
    evaluationWorkPoints: {
      title: 'Werkpunten uit de tussentijdse evaluatie',
      intro:
        'De lector had een vragenlijst met verschillende aspecten van de stage. Ismat (stagementor) is met mij vraag per vraag door die lijst gegaan. Bij elke vraag kreeg ik uitleg over hoe hij mijn prestatie daar zag. Hieronder de werkpunten waar ik de komende weken bewust op blijf inzetten.',
      items: [
        'Sneller werken',
        'Meer vragen stellen, zeker bij thuiswerk, te veel tijd verloren met vastzitten',
        'Communiceren met het hele team, niet enkel met Ismat en Rayan',
        'Overzicht altijd bewaren',
        'Analyse eerst zelf doen voor je AI gebruikt',
        'Herbruikbaarheid en compactheid',
        'Git nog extra bekijken',
        'Meer eigen werkwijze verantwoorden en meer alternatieve werkwijzen suggereren: nadenken voor mezelf, niet blindelings volgen, met of zonder AI'
      ]
    },
    changelog: {
      added: [
        'Supplier price on order: schema, Lambda-aanpassing en frontend',
        'Load- en unload-referenties in de kostemail met verbeterde fallbacktekst',
        'Late reasons zichtbaar op transportdetail',
        'Start analyse en basis voor estimated ETD time-ticket'
      ],
      changed: [
        'Kleine requested changes op eerder afgeronde tickets doorgevoerd'
      ],
      fixed: [
        'Zoekfunctie transport overview: zoeken op plaatsnamen bij Copilot-gegenereerde transporten'
      ],
      knownIssues: [
        'Estimated ETD time: uitdagend omdat vergelijkbare functionaliteit nog ontbreekt, volgende week verder uitwerken'
      ]
    }
  },
  {
    id: 'week-6',
    week: 6,
    version: 'v1.5',
    title: 'Lopende tickets afronden & cargocard for drivers',
    date: '2026-03-14',
    teaser: 'De focus lag op afronden en aanscherpen: checkbox-ticket afgewerkt, custom fields-ticket verder uitgewerkt met een bugfix voor booleanvelden (met Ismat), daarna het nieuwe cargocard-for-drivers-ticket (analyse, backend en frontend) en veel tijd in PR-feedback en codekwaliteit. Custom fields definitief afgerond, cargocard klaar voor maandag.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Checkbox-ticket afgewerkt',
      'Custom fields-ticket: aangevraagde wijzigingen doorgevoerd, bug ontdekt bij opslaan booleanveld -> met Ismat stap voor stap opgelost',
      'Halverwege de week: alle changes aan custom fields afgerond, gestart met nieuw "cargocard for drivers"-ticket',
      'Cargocard: analyse en backend aangepakt, dag erna frontend uitgewerkt en getest tot alles correct werkte',
      'Focus op codekwaliteit en best practices: korte CLI-les AWS van Steven, tests op cargocard (niets meer aan te passen voorlopig)',
      'Veel tijd in verwerken van PR-comments op custom fields: extra refactoren voor herbruikbaarheid en goede patronen',
      'Laatste dag: feedback verder uitgewerkt, één wijziging zorgde voor niet-werkende app, in call met Ismat opgelost',
      'Custom fields-ticket definitief afgerond, eerste aanpassingen cargocard al voorbereid voor maandag'
    ],
    technicalSpotlight: {
      title: 'Boolean-bug custom fields & cargocard end-to-end',
      content: 'Bij het custom fields-ticket stuitte ik op een bug bij het opslaan van een booleanveld. Samen met Ismat ben ik daar stap voor stap doorgeraakt, wat weer liet zien hoe nuttig samenwerken is bij lastige bugs. Daarna het cargocard-for-drivers-ticket: eerst analyse en backend, dan frontend, en testen tot alles klopte. De combinatie van een nieuw ticket goed opzetten en ondertussen PR-feedback verwerken (refactoren voor herbruikbaarheid en patronen) maakte dat codekwaliteit deze week centraal stond.'
    },
    learned: [
      'Bug bij booleanvelden in custom fields: met Ismat systematisch doorstappen om tot een oplossing te komen',
      'Cargocard-ticket: analyse → backend → frontend → testen, deze flow werkt goed voor een nieuw feature-ticket',
      'Korte AWS CLI-les van Steven: onthouden voor later gebruik (maar voorlopig niet veel nodig)',
      'PR-comments verwerken kan een wijziging opleveren die de app breekt -> door samen te werken snel te traceren en op te lossen'
    ],
    changelog: {
      added: [
        'Checkbox-ticket afgerond',
        'Nieuw ticket: cargocard for drivers (analyse, backend en frontend uitgewerkt)'
      ],
      changed: [
        'Custom fields-ticket: alle aangevraagde wijzigingen doorgevoerd en PR-feedback verwerkt (refactoren, herbruikbaarheid, patronen)',
        'Focus op codekwaliteit en best practices'
      ],
      fixed: [
        'Bug bij opslaan booleanveld in custom fields',
        'Niet-werkende applicatie na één PR-wijziging, in call met Ismat opgelost'
      ],
      knownIssues: [
        'Cargocard-ticket: eerste aanpassingen voor maandag voorbereid, back-end changes gaan nodig zijn'
      ]
    }
  },
  {
    id: 'week-5',
    week: 5,
    version: 'v1.4',
    title: 'Afronden, bijsturen en vooruitkijken',
    date: '2026-03-07',
    teaser: 'Deze week stond in het teken van afronden, bijsturen en vooruitkijken: eerste intervisie, sprintmeeting en review, het custom-fields-ticket volledig afgewerkt, Git-opfrissing en cherry-picking, daarna bugfix documentupload, jobbeurs "Moving forward" en veel PR-comments met focus op herbruikbaarheid.',
    image: '/images/week-5.png',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Maandag: eerste intervisiemoment, daardoor maar een halve dag op stage',
      'Lange sprintmeeting en review: werk van de voorbije twee weken getoond, weinig inhoudelijke feedback, wel zelfstandig backend-changes doorgevoerd en pipeline correct getriggerd',
      'Custom-fields-ticket volledig afgewerkt, eindresultaat mocht er zijn, korte Git-opfrissing van Ismat',
      'Foutieve merge van vorige week hersteld via cherry-picking',
      'Dag afgesloten met verwerken van PR-comments en analyseren van nieuwe tickets',
      'Kleine bug opgelost rond uploaden van documenten voor drivers + requested changes op openstaande tickets',
      'Job- en studiebeurs "Moving forward": info over overstap graduaat → bachelor + cv laten nakijken',
      'Thuis nog kleine aanpassingen aan custom-fields-ticket, o.a. vertalingen naar het Bulgaars',
      'Laatste dagen bijna volledig aan PR-comments custom-fields gewerkt, veel focus op herbruikbaarheid van de code',
      'Inhoudelijke feedback positief, vooral structurele verbeteringen + call met Ismat, over het algemeen tevreden',
      'Vrijdag gestart met nieuw ticket: extra checkbox in een kolom -> aanzet voor werk van volgende week'
    ],
    technicalSpotlight: {
      title: 'Cherry-picking en PR-feedback op herbruikbaarheid',
      content: 'Een foutieve merge van de vorige week heb ik met wat denkwerk kunnen herstellen via cherry-picking, weer een praktische toepassing van Git. Daarnaast stonden de laatste dagen in het teken van de pull-request-comments op het custom-fields-ticket. De inhoudelijke feedback was positief, het ging vooral om structurele verbeteringen en de herbruikbaarheid van de code. Door daar gericht op in te zetten, wordt de codebase beter onderhoudbaar en kan de oplossing vaker hergebruikt worden.'
    },
    learned: [
      'Zelfstandig backend-changes doorvoeren en pipeline triggeren: goed te doen na eerdere uitleg',
      'Cherry-picking in de praktijk om een foutieve merge te herstellen',
      'PR-feedback richt zich vaak op structuur en herbruikbaarheid ->investeren daarin loont',
      'Jobbeurs nuttig voor info over vervolgstappen (bachelor + minorkeuze) en cv-feedback'
    ],
    changelog: {
      added: [
        'Custom-fields-ticket volledig afgewerkt (inclusief vertalingen o.a. Bulgaars)',
        'Start nieuw ticket: extra checkbox in een kolom'
      ],
      changed: [
        'Requested changes doorgevoerd op openstaande tickets',
        'Code structureel verbeterd en herbruikbaarder gemaakt na PR-comments'
      ],
      fixed: [
        'Foutieve merge hersteld via cherry-picking',
        'Bug rond uploaden van documenten voor drivers'
      ],
      knownIssues: [
        'Nog veel te leren over herbruikbaarheid van code, daar in volgende tickets bewuster op letten'
      ]
    }
  },
  {
    id: 'week-4',
    week: 4,
    version: 'v1.3',
    title: 'Twee complexe tickets & pipeline-problemen',
    date: '2026-02-28',
    teaser: 'Twee complexere tickets bepaalden het beeld: een Outlook-.msg-button (uiteindelijk op blocked gezet) en een groter ticket rond custom velden per truck en per bedrijf, met pipeline-problemen en debugging, maar wel een goede afloop.',
    tags: ['code', 'wins', 'lessons-learned', 'team'],
    highlights: [
      'Ticket .msg in Outlook openen: pipeline niet up-to-date, met Ismat de juiste branch in de pipeline gemerged en localhost weer werkende gekregen',
      'Eerste dag eindigde met een reeks errors, het .msg-ticket bleek een pak minder makkelijk dan gedacht',
      'Na veel proberen en overleg met Ismat: ticket op "blocked" gezet omdat de oplossing te complex zou worden in verhouding tot de meerwaarde die het gaf',
      'Nieuw ticket: custom velden per truck en per bedrijf, met Ismat de backend-aanpak uitgewerkt en het ticket in twee duidelijke delen opgesplitst',
      'Deel "custom veld per bedrijf": pipeline triggerde niet, na overleg en debugging toch opgelost',
      'Deel "custom veld per truck": redelijk vlot tot een kleine bug, na afsluitende call met Ismat de bug opgelost en bevestiging dat hij tevreden was met wat al gerealiseerd was',
      'Maandag: enkel nog de puntjes op de i zetten voor het custom-velden-ticket'
    ],
    technicalSpotlight: {
      title: 'Custom velden: analyse en opsplitsing',
      content: 'Bij het ticket rond custom velden per truck en per bedrijf heb ik de eerste dagen vooral aan analyse gedaan. Samen met Ismat heb ik de backend-aanpak uitgewerkt en het ticket in twee duidelijke delen opgesplitst. Die aanpak maakte het werk overzichtelijk en gaf een duidelijke volgorde van werken: eerst het bedrijfsgedeelte, daarna het truck-gedeelte. Voor grotere tickets blijkt zo\'n gezamenlijke analyse en opsplitsing essentieel voordat je in de code duikt.'
    },
    learned: [
      'Pipeline up-to-date houden is cruciaal, met hulp van een collega de juiste branch mergen om weer te kunnen testen',
      'Soms is een ticket makkelijk tot de errors zich opstapelen, dan is "blocked" zetten soms de beste keuze, zeker als de oplossing te complex wordt voor de meerwaarde die het geeft',
      'Grotere tickets: eerst analyse en opsplitsing met een collega, dan gericht werken per deel',
      'Backend-/pipeline-problemen (bijv. trigger die niet loopt) kosten tijd maar zijn met overleg en debugging op te lossen'
    ],
    changelog: {
      added: [
        'Start ticket extra (custom) velden per truck en per bedrijf',
        'Backend-aanpak uitgewerkt met Ismat, ticket in twee duidelijke delen opgesplitst'
      ],
      changed: [
        'Ticket .msg in Outlook openen na veel errors en overleg op "blocked" gezet'
      ],
      fixed: [
        'Pipeline weer aan de praat (juiste branch gemerged met hulp van Ismat)',
        'Backend pipeline-trigger bij bedrijfsgedeelte na overleg en debugging',
        'Kleine bug bij extra veld per truck, opgelost in afsluitende call'
      ],
      knownIssues: [
        'Outlook-.msg-ticket staat op blocked (oplossing te complex vs meerwaarde)',
        'Custom-velden-ticket: maandag nog de puntjes op de i'
      ]
    }
  },
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
