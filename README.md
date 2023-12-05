# 3D-Druck Datei-Upload Portal

Dieses Projekt bietet ein einfaches Portal für den Upload von 3D-Druckdateien. Benutzer können ihre Dateien hochladen, verschiedene Druckoptionen auswählen und den Fortschritt ihres Auftrags überwachen.

## Funktionen

- **Datei-Upload:** Benutzer können 3D-Druckdateien hochladen.
- **Druckoptionen:** Auswahl des Druckers, Filaments und der Farbe für den Druck.
- **Statusanzeige:** Überwachen Sie den Fortschritt Ihres Auftrags auf einer dedizierten Statusseite.
- **Abbrechen von Aufträgen:** Benutzer können einen laufenden Druckauftrag abbrechen.

## Ordnerstruktur

- `uploads/`: Hier werden die hochgeladenen Dateien gespeichert.
- `error_pages/`: Enthält benutzerdefinierte Fehlerseiten für verschiedene HTTP-Statuscodes.
- `styles.css`: Stildefinitionen für das gesamte Projekt.
- `index.html`: Die Hauptseite des Portals mit dem Datei-Upload-Formular.
- `status_anzeigen.html`: Seite zur Anzeige des Druckstatus.
- `auftrag_abgebrochen.html`: Bestätigung für abgebrochene Aufträge.
- `impressum.html`, `datenschutz.html`, `agb.html`: Statische Seiten mit rechtlichen Informationen.
- `upload.php`: PHP-Skript zur Verarbeitung des Datei-Uploads und Weiterleitung zum Status.

## Wie man beiträgt

1. Forken Sie das Repository.
2. Erstellen Sie einen neuen Branch (`git checkout -b feature/neues-feature`).
3. Führen Sie Ihre Änderungen durch und commiten Sie sie (`git commit -am 'Füge neues Feature hinzu'`).
4. Pushen Sie zum Branch (`git push origin feature/neues-feature`).
5. Erstellen Sie einen Pull-Request.

## Lizenz

Dieses Projekt ist unter der [MIT Lizenz](LICENSE) lizenziert - siehe die [LICENSE](LICENSE)-Datei für weitere Details.
