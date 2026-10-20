# Demo: Website-Pflege mit Claude

Eine kleine zweisprachige Website (Deutsch und Englisch) mit erfundener Firma. Sie zeigt den Ablauf, mit dem ein nicht-technisches Marketing-Team Inhalte über Claude pflegt:

**Änderung beschreiben → Claude schlägt sie vor → Vorschau prüfen → freigeben → automatisch live**

- Framework: Astro, Styling mit Tailwind, Inhalte als Markdown pro Sprache
- Mehrsprachigkeit: eigene URLs pro Sprache, Sprachumschalter springt auf die passende Seite, hreflang
- Automatik: GitHub Actions baut für jeden Pull Request eine Vorschau und veröffentlicht nach dem Merge
- Demo-Hosting: GitHub Pages. Vorlage für AWS (S3 und CloudFront mit OIDC) in `docs/aws-vorlage/`

| Datei | Für wen |
|---|---|
| `CLAUDE.md` | Anleitung für Claude: wo was liegt, Regeln, Ablauf |
| `ANLEITUNG-MARKETING.md` | Anleitung für das Marketing-Team |

## Einrichtung (einmalig, ca. 10 Minuten)

1. Auf GitHub ein neues, **öffentliches** Repository anlegen, z. B. `website-demo` (für GitHub Pages im kostenlosen Tarif muss es öffentlich sein). Ohne README anlegen.
2. Diesen Ordner hochladen (siehe Befehle unten) auf den Branch `main`.
3. Unter **Actions** warten, bis „Livegang“ grün ist. Dabei entsteht der Branch `gh-pages`.
4. **Settings → Pages:** Source „Deploy from a branch“, Branch `gh-pages`, Ordner `/ (root)`, speichern.
5. **Settings → Actions → General → Workflow permissions:** „Read and write permissions“ auswählen, speichern.
6. Nach ein bis zwei Minuten läuft die Seite unter `https://<github-name>.github.io/website-demo/`.

Befehle zum Hochladen (im Ordner ausführen, `<github-name>` ersetzen):

```bash
git remote add origin https://github.com/<github-name>/website-demo.git
git push -u origin main
```

## Testen

Einen Pull Request mit einer kleinen Textänderung öffnen. Nach etwa einer Minute erscheint darunter ein Kommentar mit dem Vorschau-Link. Nach dem Merge ist die Änderung nach etwa zwei Minuten live, die Vorschau wird gelöscht.

## Lokal ansehen

```bash
npm install
npm run dev
```
