# Video-Drehbuch: Website-Pflege mit Claude (ca. 2:30 Minuten)

Ziel: Zeigen, dass das Marketing nur sagt, was sich ändern soll, die Vorschau prüft und freigibt. Alles andere läuft automatisch.

## Vorbereitung (nicht im Video)

1. Demo-Repository ist auf GitHub, die Website läuft (siehe README).
2. Zwei Browser-Tabs offen: die Live-Website (Startseite, DE) und Claude Code im Web mit dem Demo-Repository verbunden.
3. Browser-Zoom auf 110 %, Lesezeichenleiste ausblenden, Benachrichtigungen aus.
4. Einmal vorher durchspielen, damit die Wartezeiten bekannt sind. Wartezeiten im Schnitt kürzen.

## Szenen

**1. Ausgangslage (0:00 bis 0:15)**
Live-Website zeigen, kurz zwischen DE und EN umschalten.
Text im Bild oder gesprochen: „Eine mehrsprachige Website, statisch auf GitHub. Kein WordPress, keine Plugins.“

**2. Änderung beauftragen (0:15 bis 0:40)**
Zu Claude wechseln und eintippen:

> Auf der Startseite soll die Überschrift lauten: Ersatzteile in Tagen statt Monaten. Ergänze außerdem bei den Vorteilen eine vierte Karte „Weltweit gefertigt“ mit dem Text: Unser Netzwerk fertigt dort, wo Sie das Teil brauchen. Bitte in allen Sprachen.

Text im Bild: „Das Marketing schreibt in normalen Worten, was sich ändern soll.“

**3. Claude arbeitet (0:40 bis 1:05, gekürzt)**
Zeigen, wie Claude die beiden Dateien (DE und EN) findet und ändert, die Prüfung laufen lässt und den Pull Request anlegt.
Text im Bild: „Claude ändert alle Sprachen, prüft die Seite und schlägt die Änderung vor.“

**4. Vorschau (1:05 bis 1:40)**
Pull Request öffnen, Kommentar mit dem Vorschau-Link zeigen, Link öffnen. In der Vorschau neue Überschrift und neue Karte zeigen, dann auf EN umschalten.
Text im Bild: „Für jede Änderung entsteht automatisch eine Vorschau. Die Live-Seite ist noch unverändert.“
Optional kurz die Live-Seite im anderen Tab zeigen: dort steht noch die alte Überschrift.

**5. Freigabe (1:40 bis 2:10)**
Zurück zum Pull Request, Button „Merge pull request“ klicken. Kurz den Tab „Actions“ mit dem laufenden Livegang zeigen (gekürzt).
Text im Bild: „Ein Klick zur Freigabe. Danach baut und veröffentlicht sich die Seite selbst.“

**6. Live (2:10 bis 2:30)**
Live-Website neu laden: neue Überschrift, vierte Karte, in DE und EN.
Text im Bild: „Live. Kein Entwickler, kein Plugin, kein Login in ein CMS.“

## Abschluss-Text fürs Video oder die Nachricht

„Das ist eine Demo mit einer erfundenen Firma auf GitHub Pages. Für euer Projekt läuft derselbe Ablauf auf eurem AWS-Setup (S3 und CloudFront), die Vorlage dafür liegt schon im Repository.“

## Ehrlich benennen, falls gefragt

- Manuell bleiben: Änderung beschreiben, Vorschau prüfen, freigeben. Bei Fremdsprachen sollte jemand die Übersetzung gegenlesen.
- Das Marketing braucht einen GitHub-Zugang mit Schreibrechten und Zugriff auf Claude mit dem Repository.
- Neue Seitentypen oder Design-Änderungen bleiben Entwicklungsarbeit.
