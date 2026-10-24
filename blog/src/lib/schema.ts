import { business } from '@/data/business';

const BLOG = business.blogUrl;
const MAIN = business.domain;
const ORG_ID = `${MAIN}/#organization`;

export function organizationRef() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: business.brand,
    url: MAIN,
    logo: `${MAIN}/logo.svg`,
  };
}

export function blogWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BLOG}/#blog`,
    url: BLOG,
    name: `${business.brand} — Blog`,
    inLanguage: 'fr-MA',
    publisher: { '@id': ORG_ID },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  author: string;
  datePublished: Date;
  dateModified: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: 'fr-MA',
    url: `${BLOG}/${opts.slug}`,
    mainEntityOfPage: `${BLOG}/${opts.slug}`,
    datePublished: opts.datePublished.toISOString(),
    dateModified: opts.dateModified.toISOString(),
    // Authority Signature : dès que l'artisan signe sous son nom, remplacer par
    // { '@type': 'Person', name: '<nom>', jobTitle: 'Tapissier-décorateur',
    //   worksFor: { '@id': ORG_ID }, sameAs: ['<profil LinkedIn / Instagram>'] }
    author: { '@type': 'Organization', '@id': ORG_ID, name: opts.author, url: MAIN },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': `${BLOG}/#blog` },
    about: { '@id': ORG_ID },
    image: {
      '@type': 'ImageObject',
      url: `${BLOG}/og-default.jpg`,
      width: 1200,
      height: 630,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.answer-box'],
    },
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
      item: c.url.startsWith('http') ? c.url : `${BLOG}${c.url}`,
    })),
  };
}
