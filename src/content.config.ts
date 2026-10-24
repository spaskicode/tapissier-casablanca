import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collections data-driven : ajouter un service / un quartier / une réalisation
 * = créer un fichier de données, sans toucher au code des pages.
 * Organisation par langue :  <collection>/fr/<slug>.md  et  <collection>/ar/<slug>.md
 */

// fr/slug.md and ar/slug.md would otherwise share one id and overwrite each other.
const idFromPath = ({ entry }: { entry: string }) =>
  entry.replace(/\\/g, '/').replace(/\.md$/, '');

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const eav = z.object({
  quoi: z.string(),       // ce que couvre le service
  pourQui: z.string(),    // audience
  delai: z.string(),      // délai indicatif
  garantie: z.string(),   // garantie
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services', generateId: idFromPath }),
  schema: z.object({
    lang: z.enum(['fr', 'ar']),
    slug: z.string(),                 // slug partagé entre langues
    title: z.string(),
    primaryKeyword: z.string(),
    searchVolume: z.number().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    answer: z.string(),               // réponse directe 40–60 mots (AEO)
    order: z.number().default(50),
    icon: z.string().default('sofa'),
    priceFrom: z.string().optional(), // ex. "[À COMPLÉTER] MAD"
    priceNote: z.string().default('Devis gratuit sur mesure'),
    eav,
    steps: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    faq: z.array(faqItem).min(3),
    related: z.array(z.string()).default([]),  // slugs de services liés
    heroAlt: z.string(),
    updated: z.coerce.date(),
  }),
});

const zones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/zones', generateId: idFromPath }),
  schema: z.object({
    lang: z.enum(['fr', 'ar']),
    slug: z.string(),
    title: z.string(),
    quartier: z.string(),
    primaryKeyword: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    answer: z.string(),
    habitat: z.string(),              // type d'habitat du quartier
    landmarks: z.array(z.string()).default([]),
    servicesPhares: z.array(z.string()).default([]), // slugs de services
    faq: z.array(faqItem).min(2),
    heroAlt: z.string(),
    order: z.number().default(50),
    updated: z.coerce.date(),
  }),
});

const realisations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/realisations', generateId: idFromPath }),
  schema: z.object({
    lang: z.enum(['fr', 'ar']),
    title: z.string(),
    type: z.string(),                 // salon marocain / canapé / tête de lit...
    quartier: z.string().optional(),
    tissu: z.string().optional(),
    avantAlt: z.string(),
    apresAlt: z.string(),
    order: z.number().default(50),
  }),
});

export const collections = { services, zones, realisations };
