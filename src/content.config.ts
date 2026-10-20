import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Jede Seite liegt einmal pro Sprache als Markdown-Datei vor:
//   src/content/seiten/de/....md und src/content/seiten/en/....md
// "uebersetzung" verbindet die Sprachversionen derselben Seite miteinander.

const vorteil = z.object({
  titel: z.string(),
  text: z.string(),
});

const seiten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seiten' }),
  schema: z.object({
    titel: z.string().max(70, 'Der Seitentitel sollte hoechstens 70 Zeichen haben'),
    beschreibung: z.string().max(160, 'Die Beschreibung sollte hoechstens 160 Zeichen haben'),
    uebersetzung: z.string(),
    pfad: z.string(),
    im_menue: z.boolean().default(false),
    reihenfolge: z.number().default(99),
    menuename: z.string().optional(),
    kicker: z.string().optional(),
    headline: z.string(),
    intro: z.string(),
    vorteile: z.array(vorteil).optional(),
    button_text: z.string().optional(),
    button_ziel: z.string().optional(),
    news_anzeigen: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    titel: z.string().max(90),
    beschreibung: z.string().max(160),
    uebersetzung: z.string(),
    pfad: z.string(),
    datum: z.coerce.date(),
  }),
});

export const collections = { seiten, news };
