# 🥦 Nährstoff-Planer

Ein modular aufgebauter, offlinefähiger Nährstoffrechner, der es ermöglicht:
- **Benutzerprofile** anzulegen (Gewicht, Geschlecht, Aktivität, Ziel)
- **Lebensmittel** zu verwalten (inkl. Saucen, Fleischalternativen, saisonale & lokale Produkte)
- **Menüpläne** zu erstellen mit automatischer Berechnung von Kalorien, Eiweiss, Fett und Kohlenhydraten
- **Alternativen & Zusätze** vorzuschlagen, um Nährstofflücken zu schliessen
- **Nährstoffe auf Personen zu verteilen** (praktisch für Haushalte oder Gruppen)

Die Anwendung läuft komplett **offline im Browser** und speichert alle Daten **lokal** (über `localStorage`).
Optional kann sie mit einer Cloud-Datenbank (z. B. Firebase oder FastAPI-Backend) synchronisiert werden.

---

## 🚀 Nutzung

1. Öffne einfach die Seite  
   👉 [**App starten**](https://stefanthut.github.io/naehrstoff-planer/)
2. Alles läuft lokal – keine Registrierung nötig.
3. Im Tab **Benutzer** kannst du Profile anlegen, im Tab **Lebensmittel** deine Nahrungsmittel verwalten.

---

## ⚙️ Aufbau

| Bereich | Beschreibung |
|----------|---------------|
| `index.html` | Grundgerüst der App mit Tabs |
| `style.css` | Gestaltung (Farben, Layout, Buttons) |
| `users.js` | Benutzerverwaltung |
| `foods.js` | Lebensmittelliste |
| `menu.js` | Menüplan mit Berechnungen |
| `alternatives.js` | Vorschläge für Alternativen |
| `distribution.js` | Verteilung der Nährstoffe auf Personen |
| `storage.js` | Lokaler Speicher (Daten bleiben erhalten) |

---

## 💡 Geplant / Ideen
- Synchronisation zwischen Geräten (z. B. via Firebase)
- Preis- und CO₂-Angaben pro Lebensmittel
- Import/Export von Daten
- PWA-Installation (App auf Startbildschirm)

---

## 🧑‍💻 Entwicklung
Die App ist vollständig **in JavaScript, HTML und CSS** geschrieben.  
Du kannst sie lokal öffnen, direkt im Browser bearbeiten oder auf GitHub Pages hosten.

Änderungen werden sofort sichtbar, sobald sie in GitHub committed werden.

---

## 📜 Lizenz
MIT License – freie Nutzung und Anpassung erlaubt.