// Typische Schweizer Lebensmittel – Grundliste
// Einfügen im Projektordner, ersetzt alte foods.js oder als foods_ch.js speichern

const foods = [
  // ---- Fleisch ----
  { name: "Rindfleisch", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["tierisch","proteinreich"] },
  { name: "Poulet", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["tierisch","mager","proteinreich"] },
  { name: "Schweinefleisch", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["tierisch","fettreich","traditionell"] },
  { name: "Kalbfleisch", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["tierisch","proteinreich"] },
  { name: "Wurstwaren (Cervelat, Bratwurst)", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise","Snack"], tags: ["verarbeitet"] },
  { name: "Schinken", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Beilage","Sandwich"], tags: ["verarbeitet","mager"] },
  { name: "Speck", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Beilage","Würze"], tags: ["fettreich"] },
  { name: "Fisch (Lachs, Forelle, Felchen)", category: "Fleisch", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["omega3","leicht"] },

  // ---- Vegetarisch / Milch / Eier ----
  { name: "Eier", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Hauptspeise","Beilage"], tags: ["proteinreich"] },
  { name: "Milch", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Getränk","Kochzutat"], tags: ["milchprodukt"] },
  { name: "Joghurt", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Frühstück","Snack"], tags: ["proteinreich"] },
  { name: "Käse (Emmentaler, Gruyère, Appenzeller)", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Beilage","Hauptspeise"], tags: ["fettreich","proteinreich"] },
  { name: "Hüttenkäse", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Beilage","Snack"], tags: ["mager","proteinreich"] },
  { name: "Butter", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Backen","Sauce"], tags: ["fettreich"] },
  { name: "Rahm / Sahne", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Sauce","Dessert"], tags: ["fettreich"] },

  // ---- Vegan / Grundnahrungsmittel ----
  { name: "Tofu", category: "Vegan", season: ["Ganzes Jahr"], use: ["Hauptspeise","Beilage"], tags: ["proteinreich"] },
  { name: "Tempeh", category: "Vegan", season: ["Ganzes Jahr"], use: ["Hauptspeise","Beilage"], tags: ["fermentiert","proteinreich"] },
  { name: "Seitan", category: "Vegan", season: ["Ganzes Jahr"], use: ["Hauptspeise"], tags: ["gluten","proteinreich"] },
  { name: "Kartoffeln", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage","Hauptspeise"], tags: ["kohlenhydratreich"] },
  { name: "Reis", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage"], tags: ["kohlenhydratreich"] },
  { name: "Pasta", category: "Vegan", season: ["Ganzes Jahr"], use: ["Hauptspeise","Beilage"], tags: ["kohlenhydratreich"] },
  { name: "Brot (Ruchbrot, Vollkorn, Bürli)", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage","Snack"], tags: ["ballaststoffreich"] },
  { name: "Haferflocken", category: "Vegan", season: ["Ganzes Jahr"], use: ["Frühstück"], tags: ["ballaststoffreich"] },
  { name: "Polenta / Maisgries", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage"], tags: ["glutenfrei"] },

  // ---- Hülsenfrüchte ----
  { name: "Linsen", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage","Hauptspeise"], tags: ["proteinreich"] },
  { name: "Kichererbsen", category: "Vegan", season: ["Ganzes Jahr"], use: ["Hauptspeise","Sauce"], tags: ["proteinreich"] },
  { name: "Bohnen", category: "Vegan", season: ["Sommer","Herbst"], use: ["Beilage","Hauptspeise"], tags: ["ballaststoffreich"] },
  { name: "Erbsen", category: "Vegan", season: ["Frühling","Sommer"], use: ["Beilage","Suppe"], tags: ["proteinreich"] },

  // ---- Gemüse ----
  { name: "Karotten", category: "Vegan", season: ["Ganzes Jahr"], use: ["Beilage","Suppe"], tags: ["vitaminreich"] },
  { name: "Zwiebeln", category: "Vegan", season: ["Ganzes Jahr"], use: ["Basis","Sauce"], tags: ["aromatisch"] },
  { name: "Knoblauch", category: "Vegan", season: ["Ganzes Jahr"], use: ["Würze","Sauce"], tags: ["aromatisch"] },
  { name: "Tomaten", category: "Vegan", season: ["Sommer"], use: ["Beilage","Sauce"], tags: ["vitaminreich"] },
  { name: "Paprika / Peperoni", category: "Vegan", season: ["Sommer","Herbst"], use: ["Beilage","Salat"], tags: ["vitaminreich"] },
  { name: "Spinat", category: "Vegan", season: ["Frühling","Herbst"], use: ["Beilage","Hauptspeise"], tags: ["eisenreich"] },
  { name: "Broccoli", category: "Vegan", season: ["Herbst","Winter"], use: ["Beilage"], tags: ["vitaminreich"] },
  { name: "Blumenkohl", category: "Vegan", season: ["Herbst","Winter"], use: ["Beilage"], tags: ["leicht"] },
  { name: "Lauch / Porree", category: "Vegan", season: ["Herbst","Winter"], use: ["Basis","Suppe"], tags: ["aromatisch"] },
  { name: "Kabis (Weiss-/Rotkohl)", category: "Vegan", season: ["Herbst","Winter"], use: ["Beilage","Hauptspeise"], tags: ["ballaststoffreich"] },

  // ---- Früchte ----
  { name: "Äpfel", category: "Vegan", season: ["Herbst","Winter"], use: ["Snack","Dessert"], tags: ["regional"] },
  { name: "Birnen", category: "Vegan", season: ["Herbst","Winter"], use: ["Snack","Dessert"], tags: ["regional"] },
  { name: "Beeren", category: "Vegan", season: ["Sommer"], use: ["Snack","Dessert"], tags: ["saisonal"] },
  { name: "Bananen", category: "Vegan", season: ["Ganzes Jahr"], use: ["Snack","Dessert"], tags: ["import"] },
  { name: "Trauben", category: "Vegan", season: ["Herbst"], use: ["Snack","Dessert"], tags: ["regional"] },

  // ---- Saucen & Würzen ----
  { name: "Mayonnaise", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Sauce"], tags: ["fettreich"] },
  { name: "Senf", category: "Vegan", season: ["Ganzes Jahr"], use: ["Sauce","Würze"], tags: ["aromatisch"] },
  { name: "Ketchup", category: "Vegan", season: ["Ganzes Jahr"], use: ["Sauce"], tags: ["süsslich"] },
  { name: "BBQ-Sauce", category: "Vegan", season: ["Ganzes Jahr"], use: ["Sauce"], tags: ["aromatisch"] },
  { name: "Bouillon (Gemüse oder Fleisch)", category: "Variabel", season: ["Ganzes Jahr"], use: ["Basis","Suppe"], tags: ["würze"] },

  // ---- Sonstiges ----
  { name: "Schokolade", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Dessert"], tags: ["süss"] },
  { name: "Zucker / Honig", category: "Vegetarisch", season: ["Ganzes Jahr"], use: ["Süssen"], tags: ["energiereich"] },
  { name: "Kaffee / Tee", category: "Vegan", season: ["Ganzes Jahr"], use: ["Getränk"], tags: ["anregend"] },
  { name: "Wasser / Mineralwasser", category: "Vegan", season: ["Ganzes Jahr"], use: ["Getränk"], tags: ["neutral"] }
];