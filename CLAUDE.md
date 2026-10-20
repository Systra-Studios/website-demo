# Anleitung für Claude: Inhalte dieser Website pflegen

Du arbeitest für das Marketing-Team. Die Leute sind keine Entwickler. Sie sagen dir in normalen Worten, was sich auf der Website ändern soll. Du setzt das um, schlägst die Änderung als Pull Request vor und erklärst kurz, was du geändert hast. Live geht erst etwas, wenn ein Mensch den Pull Request freigibt.

## Wo was liegt

- `src/content/seiten/de/` und `src/content/seiten/en/`: alle Seiten, eine Markdown-Datei pro Seite und Sprache
- `src/content/news/de/` und `src/content/news/en/`: Neuigkeiten, eine Datei pro Beitrag und Sprache
- `src/i18n/ui.ts`: feste Texte wie Menü, Footer und Buttons, in beiden Sprachen
- Alles in `src/layouts`, `src/pages`, `src/lib`, `astro.config.mjs`, `.github/` ist Technik. Dort änderst du nur etwas, wenn ausdrücklich danach gefragt wird, und sagst dann vorher, dass es eine technische Änderung ist.

## Felder in einer Seite

| Feld | Bedeutung |
|---|---|
| `titel` | Titel im Browser-Tab und bei Google, höchstens 70 Zeichen |
| `beschreibung` | Text unter dem Titel bei Google, höchstens 160 Zeichen |
| `uebersetzung` | Verbindet die Sprachversionen. Muss in DE und EN gleich sein, nie ändern |
| `pfad` | Adresse der Seite ohne Sprache, z. B. `leistungen/3d-druck`. Nur ändern, wenn ausdrücklich gewünscht |
| `im_menue`, `reihenfolge`, `menuename` | Ob und wo die Seite im Menü steht |
| `kicker` | Kleine Zeile über der Überschrift |
| `headline`, `intro` | Große Überschrift und Einleitung oben auf der Seite |
| `vorteile` | Die drei Karten unter der Einleitung |
| `button_text`, `button_ziel` | Button oben auf der Seite. Ziel ist der `pfad` einer anderen Seite derselben Sprache |
| Text unter dem zweiten `---` | Der eigentliche Seiteninhalt in Markdown |

## Regeln

1. **Immer alle Sprachen.** Wenn sich ein Inhalt ändert, änderst du ihn in DE und EN. Gibt das Team nur eine Sprache vor, übersetzt du sinngemäß und natürlich, nicht Wort für Wort, und weist im Pull Request darauf hin, dass die Übersetzung von dir stammt und jemand mit der Sprache drüberschauen sollte.
2. **Neue Seite oder neuer Beitrag:** in jeder Sprache eine Datei anlegen, gleicher Wert bei `uebersetzung`, `pfad` in der jeweiligen Sprache (z. B. `leistungen/spritzguss` und `services/injection-moulding`).
3. **Nur ändern, was gewünscht ist.** Keine Umformulierungen an anderen Stellen, keine Design- oder Code-Änderungen nebenbei.
4. **Tonalität:** Sie-Form auf Deutsch, klar und sachlich, kurze Sätze, keine Werbefloskeln. Keine Gedankenstriche (– oder —).
5. **Fakten nie erfinden.** Zahlen, Kunden, Zertifikate, Termine nur übernehmen, wenn das Team sie nennt. Fehlt etwas, frag nach.
6. **Vor dem Pull Request prüfen:** `npm run check:content` und `npm run build` müssen ohne Fehler durchlaufen.

## Ablauf bei jeder Änderung

1. Neuen Branch anlegen: `inhalt/<kurze-beschreibung>`, z. B. `inhalt/messe-termin`
2. Dateien ändern
3. `npm run check:content` und `npm run build` ausführen
4. Commit mit verständlicher Nachricht auf Deutsch
5. Pull Request öffnen. In die Beschreibung gehört:
   - in zwei, drei Sätzen, was sich geändert hat
   - welche Seiten in welchen Sprachen betroffen sind
   - ob Übersetzungen von dir stammen
   - der Hinweis: „Die Vorschau erscheint in etwa einer Minute als Kommentar unter diesem Pull Request. Wenn alles passt: Button ‚Merge pull request‘ klicken, dann ist die Änderung nach etwa zwei Minuten live.“
6. Dem Team den Link zum Pull Request schicken. **Nie selbst mergen.**

Bittet das Team um eine Korrektur, arbeitest du im selben Branch weiter. Die Vorschau aktualisiert sich dann von selbst.
