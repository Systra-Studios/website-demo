// Prueft vor jeder Veroeffentlichung, ob jede Seite in allen Sprachen vorhanden ist.
// Fehlt eine Sprachversion oder ist ein Pfad doppelt vergeben, bricht die Automatik ab
// und die fehlerhafte Aenderung geht nicht live.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SPRACHEN = ['de', 'en'];
const SAMMLUNGEN = ['seiten', 'news'];
const fehler = [];

function frontmatter(datei) {
  const text = readFileSync(datei, 'utf8');
  const treffer = text.match(/^---\n([\s\S]*?)\n---/);
  if (!treffer) return {};
  const daten = {};
  for (const zeile of treffer[1].split('\n')) {
    const m = zeile.match(/^([a-z_]+):\s*(.*)$/);
    if (m) daten[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
  return daten;
}

for (const sammlung of SAMMLUNGEN) {
  const proSchluessel = new Map();
  for (const sprache of SPRACHEN) {
    const ordner = join('src/content', sammlung, sprache);
    let dateien = [];
    try {
      dateien = readdirSync(ordner).filter((d) => d.endsWith('.md') && statSync(join(ordner, d)).isFile());
    } catch {
      fehler.push(`Ordner fehlt: ${ordner}`);
      continue;
    }
    const pfade = new Set();
    for (const datei of dateien) {
      const daten = frontmatter(join(ordner, datei));
      const schluessel = daten.uebersetzung;
      if (!schluessel) {
        fehler.push(`${sammlung}/${sprache}/${datei}: Feld "uebersetzung" fehlt`);
        continue;
      }
      if (pfade.has(daten.pfad)) fehler.push(`${sammlung}/${sprache}/${datei}: Pfad "${daten.pfad}" ist doppelt vergeben`);
      pfade.add(daten.pfad);
      if (!proSchluessel.has(schluessel)) proSchluessel.set(schluessel, new Map());
      proSchluessel.get(schluessel).set(sprache, datei);
    }
  }
  for (const [schluessel, versionen] of proSchluessel) {
    for (const sprache of SPRACHEN) {
      if (!versionen.has(sprache)) {
        const vorhanden = [...versionen.entries()].map(([s, d]) => `${s}/${d}`).join(', ');
        fehler.push(`${sammlung}: "${schluessel}" fehlt auf ${sprache.toUpperCase()} (vorhanden: ${vorhanden})`);
      }
    }
  }
}

if (fehler.length) {
  console.error('\nInhalte unvollstaendig:\n');
  for (const f of fehler) console.error(`  - ${f}`);
  console.error('\nBitte die fehlenden Sprachversionen ergaenzen, dann geht es weiter.\n');
  process.exit(1);
}
console.log('Alle Seiten und Neuigkeiten sind in allen Sprachen vorhanden.');
