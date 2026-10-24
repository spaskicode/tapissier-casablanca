/**
 * Source UNIQUE des informations de l'entreprise (NAP).
 * Ces valeurs alimentent le header, le footer, la page contact et TOUS
 * les JSON-LD (LocalBusiness, Organization...). Ne dupliquez jamais ces
 * données ailleurs : modifiez-les ici uniquement.
 *
 * Les champs marqués [À COMPLÉTER] doivent être renseignés avant mise en
 * ligne — ils ne sont pas inventés volontairement.
 */

export const business = {
  brand: "Tapissier Casablanca",
  legalName: "[À COMPLÉTER : raison sociale exacte]",
  tagline: "Artisan tapissier-décorateur à Casablanca",
  tagline_ar: "منجد ومزخرف محترف بالدار البيضاء",

  domain: "https://tapissier-casablanca.ma",
  blogUrl: "https://blog.tapissier-casablanca.ma",

  // Téléphone fourni par le client
  phone: "+212661718659",
  phoneDisplay: "+212 661-718659",
  whatsapp: "212661718659", // format wa.me (sans +)

  email: "[À COMPLÉTER : email@tapissier-casablanca.ma]",

  address: {
    street: "[À COMPLÉTER : adresse / atelier]",
    locality: "Casablanca",
    region: "Casablanca-Settat",
    postalCode: "[À COMPLÉTER]",
    country: "MA",
  },

  // Centre de Casablanca — à ajuster sur l'adresse réelle de l'atelier
  geo: { lat: 33.5731, lng: -7.5898 },

  foundingYear: "[À COMPLÉTER : année de création]",
  priceRange: "MAD",

  // Horaires (ajustez si besoin)
  openingHours: [
    { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "09:00", closes: "19:00" },
  ],
  openingHoursHuman: "Lun – Sam : 9h00 – 19h00",
  openingHoursHuman_ar: "الإثنين – السبت: 9:00 – 19:00",

  social: {
    facebook: "[À COMPLÉTER : URL Facebook]",
    instagram: "[À COMPLÉTER : URL Instagram]",
    googleBusiness: "[À COMPLÉTER : URL fiche Google Business]",
  },

  // Zones desservies (Grand Casablanca)
  areaServed: [
    "Casablanca",
    "Maârif",
    "Oulfa",
    "Bourgogne",
    "Gauthier",
    "Aïn Diab",
    "Californie",
    "Sidi Maârouf",
    "Bouskoura",
    "Aïn Chock",
    "Al Fida",
    "Mohammedia",
  ],
} as const;

export type Business = typeof business;
