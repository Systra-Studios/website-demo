// Feste Texte, die nicht zu einer einzelnen Seite gehoeren (Menue, Footer, Buttons).
// Jede Zeile gibt es in beiden Sprachen.

export const sprachen = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Sprache = keyof typeof sprachen;
export const standardSprache: Sprache = 'de';

export const texte = {
  de: {
    'skip': 'Zum Inhalt springen',
    'nav.label': 'Hauptmenü',
    'sprache.label': 'Sprache wählen',
    'news.titel': 'Neuigkeiten',
    'news.mehr': 'Weiterlesen',
    'news.zurueck': 'Zur Startseite',
    'footer.demo': 'Demo-Website mit fiktivem Unternehmen. Gebaut, um den Pflege-Ablauf mit Claude zu zeigen.',
    'footer.rechte': 'Nordwerk Teilefertigung (fiktiv)',
    '404.titel': 'Diese Seite gibt es nicht.',
    '404.text': 'Vielleicht wurde sie verschoben. Hier geht es zurück zur Startseite.',
  },
  en: {
    'skip': 'Skip to content',
    'nav.label': 'Main menu',
    'sprache.label': 'Choose language',
    'news.titel': 'News',
    'news.mehr': 'Read more',
    'news.zurueck': 'Back to home',
    'footer.demo': 'Demo website with a fictional company. Built to show the editing workflow with Claude.',
    'footer.rechte': 'Nordwerk Parts Manufacturing (fictional)',
    '404.titel': 'This page does not exist.',
    '404.text': 'It may have moved. Head back to the home page.',
  },
} as const;

export function t(sprache: Sprache, schluessel: keyof (typeof texte)['de']) {
  return texte[sprache][schluessel];
}

export function datum(sprache: Sprache, d: Date) {
  return d.toLocaleDateString(sprache === 'de' ? 'de-DE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
