// Schweizer Grundliste – direkt verwendbar
window.foods = [
  // Fleisch / Fisch
  { name:"Rindfleisch", category:"Fleisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["tierisch","proteinreich"] },
  { name:"Poulet", category:"Fleisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["mager","proteinreich"] },
  { name:"Schweinefleisch", category:"Fleisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["fettreich","traditionell"] },
  { name:"Kalbfleisch", category:"Fleisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["proteinreich"] },
  { name:"Wurst (Cervelat/Bratwurst)", category:"Fleisch", season:["Ganzes Jahr"], use:["Hauptspeise","Snack"], tags:["verarbeitet"] },
  { name:"Lachs", category:"Fisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["omega3","leicht"] },
  { name:"Forelle", category:"Fisch", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["omega3"] },

  // Vegi / Milch / Ei
  { name:"Eier", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Hauptspeise","Beilage"], tags:["proteinreich"] },
  { name:"Joghurt/Skyr", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Frühstück","Snack"], tags:["proteinreich"] },
  { name:"Hüttenkäse", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Snack","Beilage"], tags:["mager","proteinreich"] },
  { name:"Käse (Gruyère/Emmentaler)", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Beilage","Hauptspeise"], tags:["fettreich","proteinreich"] },
  { name:"Milch", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Getränk","Kochzutat"], tags:["milchprodukt"] },

  // Vegan – Grundnahrungsmittel & Hülsenfrüchte
  { name:"Tofu", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise","Beilage"], tags:["proteinreich"] },
  { name:"Tempeh", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["fermentiert","proteinreich"] },
  { name:"Seitan", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise"], tags:["gluten","proteinreich"] },
  { name:"Linsen (gekocht)", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise","Beilage"], tags:["proteinreich"] },
  { name:"Kichererbsen (gekocht)", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise","Sauce"], tags:["proteinreich"] },
  { name:"Bohnen (weiss/rot/grün)", category:"Vegan", season:["Sommer","Herbst"], use:["Beilage","Hauptspeise"], tags:["ballaststoffreich"] },
  { name:"Erbsen", category:"Vegan", season:["Frühling","Sommer"], use:["Beilage","Suppe"], tags:["proteinreich"] },

  // Kohlenhydrate / Getreide / Brot
  { name:"Kartoffeln", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage","Hauptspeise"], tags:["kohlenhydratreich","lokal"] },
  { name:"Reis", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage"], tags:["kohlenhydratreich"] },
  { name:"Pasta", category:"Vegan", season:["Ganzes Jahr"], use:["Hauptspeise","Beilage"], tags:["kohlenhydratreich"] },
  { name:"Vollkornbrot", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage","Snack"], tags:["ballaststoffreich","lokal"] },
  { name:"Haferflocken", category:"Vegan", season:["Ganzes Jahr"], use:["Frühstück"], tags:["ballaststoffreich","lokal"] },
  { name:"Polenta (Maisgries)", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage"], tags:["glutenfrei"] },
  { name:"Quinoa (gekocht)", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage","Hauptspeise"], tags:["proteinreich"] },

  // Gemüse (CH-saisonal)
  { name:"Karotten", category:"Vegan", season:["Ganzes Jahr"], use:["Beilage","Suppe"], tags:["vitaminreich","lokal"] },
  { name:"Zwiebeln", category:"Vegan", season:["Ganzes Jahr"], use:["Basis","Sauce"], tags:["aromatisch","lokal"] },
  { name:"Knoblauch", category:"Vegan", season:["Ganzes Jahr"], use:["Würze","Sauce"], tags:["aromatisch"] },
  { name:"Tomaten (frisch)", category:"Vegan", season:["Sommer"], use:["Beilage","Sauce"], tags:["vitaminreich"] },
  { name:"Tomaten (Konserve)", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce","Basis"], tags:["haltbar"] },
  { name:"Peperoni", category:"Vegan", season:["Sommer","Herbst"], use:["Beilage","Salat"], tags:["vitaminreich"] },
  { name:"Spinat", category:"Vegan", season:["Frühling","Herbst"], use:["Beilage","Hauptspeise"], tags:["eisenreich"] },
  { name:"Broccoli", category:"Vegan", season:["Herbst","Winter"], use:["Beilage"], tags:["vitaminreich"] },
  { name:"Blumenkohl", category:"Vegan", season:["Herbst","Winter"], use:["Beilage"], tags:["leicht"] },
  { name:"Lauch", category:"Vegan", season:["Herbst","Winter"], use:["Basis","Suppe"], tags:["aromatisch"] },
  { name:"Kabis (Weiss-/Rotkohl)", category:"Vegan", season:["Herbst","Winter"], use:["Beilage","Hauptspeise"], tags:["ballaststoffreich","lokal"] },
  { name:"Salat (Kopf/Nüssli)", category:"Vegan", season:["Frühling","Sommer","Herbst"], use:["Beilage"], tags:["leicht"] },

  // Früchte
  { name:"Äpfel", category:"Vegan", season:["Herbst","Winter"], use:["Snack","Dessert"], tags:["regional","lokal"] },
  { name:"Birnen", category:"Vegan", season:["Herbst","Winter"], use:["Snack","Dessert"], tags:["regional","lokal"] },
  { name:"Beeren (gemischt)", category:"Vegan", season:["Sommer"], use:["Snack","Dessert"], tags:["saisonal"] },
  { name:"Bananen", category:"Vegan", season:["Ganzes Jahr"], use:["Snack","Dessert"], tags:["import"] },
  { name:"Trauben", category:"Vegan", season:["Herbst"], use:["Snack","Dessert"], tags:["regional"] },

  // Saucen & Würzen
  { name:"Mayonnaise", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Sauce"], tags:["fettreich"] },
  { name:"Senf", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce","Würze"], tags:["aromatisch"] },
  { name:"Ketchup", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce"], tags:["süsslich"] },
  { name:"BBQ-Sauce", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce"], tags:["aromatisch"] },
  { name:"Tomatensauce", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce","Basis"], tags:["sauce"] },
  { name:"Hummus", category:"Vegan", season:["Ganzes Jahr"], use:["Sauce","Dip"], tags:["huelse","proteinreich"] },

  // Fette & Öle
  { name:"Rapsöl", category:"Vegan", season:["Ganzes Jahr"], use:["Kochen","Sauce"], tags:["fettquelle","lokal"] },
  { name:"Olivenöl", category:"Vegan", season:["Ganzes Jahr"], use:["Kochen","Sauce"], tags:["fettquelle"] },
  { name:"Butter", category:"Vegetarisch", season:["Ganzes Jahr"], use:["Backen","Sauce"], tags:["fettreich","milchprodukt"] },

  // Nüsse & Samen
  { name:"Mandeln", category:"Vegan", season:["Ganzes Jahr"], use:["Snack","Backen"], tags:["fettreich","proteinreich"] },
  { name:"Baumnüsse", category:"Vegan", season:["Herbst","Winter"], use:["Snack","Backen"], tags:["fettreich","regional"] }
];
