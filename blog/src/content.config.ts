import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    primaryKeyword: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    answer: z.string(),                 // réponse directe en tête d'article (AEO)
    author: z.string().default('Tapissier Casablanca'),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    cover: z.string().default('sofa'),  // icône de couverture (placeholder)
    coverAlt: z.string(),
    tags: z.array(z.string()).default([]),
    bridge: z.object({ url: z.string(), label: z.string() }), // lien vers la page service
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).min(2),
    related: z.array(z.string()).default([]), // slugs d'autres posts
    order: z.number().default(50),
  }),
});

export const collections = { posts };
