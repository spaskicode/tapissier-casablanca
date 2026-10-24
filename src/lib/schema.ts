import { business } from '@/data/business';

const SITE = business.domain;
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

/** Organisation / LocalBusiness (entité centrale, référencée par @id partout). */
export function localBusinessSchema() {
  const sameAs = [
    business.social.facebook,
    business.social.instagram,
    business.social.googleBusiness,
  ].filter((u) => u && !u.startsWith('[À'));

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': ORG_ID,
    name: business.brand,
    alternateName: ['منجد الدار البيضاء', 'Tapissier décorateur Casablanca'],
    legalName: business.legalName,
    knowsAbout: [
      'Réfection de salon marocain',
      'Tapisserie d’ameublement',
      'Capitonnage de tête de lit',
      'Garnissage mousse haute résilience',
      'Tapisserie automobile',
      'Rideaux et voilages sur mesure',
    ],
    description:
      "Artisan tapissier-décorateur à Casablanca : réfection et fabrication sur mesure de salons marocains, canapés, fauteuils, têtes de lit et sièges. Déplacement à domicile et devis gratuit.",
    url: SITE,
    telephone: business.phone,
    email: business.email,
    image: `${SITE}/og-default.jpg`,
    logo: `${SITE}/logo.svg`,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: business.areaServed.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE,
    name: business.brand,
    inLanguage: ['fr-MA', 'ar-MA'],
    publisher: { '@id': ORG_ID },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { '@id': ORG_ID },
    areaServed: business.areaServed.map((name) => ({ '@type': 'City', name })),
  };
}

/**
 * HowTo — construit à partir des `steps` déjà présentes dans les fichiers de
 * contenu des services. Le schéma reflète exactement l'<ol> visible sur la page.
 */
export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: { title: string; text: string }[];
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      url: `${opts.url}#etape-${i + 1}`,
    })),
  };
}

/** Catalogue d'offres : relie l'entité centrale à tous ses services. */
export function offerCatalogSchema(
  services: { title: string; slug: string; description: string }[],
  lang: 'fr' | 'ar' = 'fr',
) {
  const prefix = lang === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${SITE}/#services`,
    name: lang === 'ar' ? 'خدمات التنجيد' : "Services de tapisserie d'ameublement",
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: `${SITE}${prefix}/services/${s.slug}`,
        provider: { '@id': ORG_ID },
      },
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : `${SITE}${c.url}`,
    })),
  };
}
