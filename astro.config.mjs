// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * lastmod véridique : les agents IA et les moteurs priorisent la fraîcheur, et
 * un lastmod égal à la date de build est un signal faux. On lit donc la date
 * `updated:` réelle du fichier de contenu qui alimente chaque URL.
 */
function buildLastmodMap() {
  const map = new Map();
  const root = path.resolve('./src/content');
  const routeFor = { services: 'services', zones: 'zones' };

  for (const [collection, segment] of Object.entries(routeFor)) {
    for (const lang of ['fr', 'ar']) {
      const dir = path.join(root, collection, lang);
      if (!fs.existsSync(dir)) continue;
      for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        const updated = raw.match(/^updated:\s*(\S+)/m)?.[1]?.replace(/['"]/g, '');
        const slug = raw.match(/^slug:\s*(\S+)/m)?.[1] ?? file.replace(/\.md$/, '');
        if (!updated) continue;
        const prefix = lang === 'ar' ? '/ar' : '';
        map.set(`${prefix}/${segment}/${slug}`, updated);
      }
    }
  }

  // Pages d'index (et accueil) : la date la plus récente de leur périmètre.
  const newestUnder = (prefix) =>
    [...map.entries()]
      .filter(([k]) => k.startsWith(prefix + '/'))
      .map(([, v]) => v)
      .sort()
      .at(-1);

  for (const prefix of ['', '/ar']) {
    for (const segment of ['services', 'zones']) {
      const d = newestUnder(`${prefix}/${segment}`);
      if (d) map.set(`${prefix}/${segment}`, d);
    }
    const home = newestUnder(prefix || '');
    if (home) map.set(prefix || '/', home);
  }
  return map;
}

const LASTMOD = buildLastmodMap();

// Production domain. The blog lives on a separate project/deploy:
// https://blog.tapissier-casablanca.ma
export default defineConfig({
  site: 'https://tapissier-casablanca.ma',
  trailingSlash: 'never',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },

  // Bilingue : FR (par défaut, sans préfixe) + AR sous /ar/
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-MA', ar: 'ar-MA' },
      },
      filter: (page) => !page.includes('/mentions-legales'),
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const real = LASTMOD.get(pathname);
        if (real) item.lastmod = new Date(real).toISOString();

        // Priorité : money pages > quartiers > pages de confiance.
        if (pathname === '/' || pathname === '/ar') item.priority = 1.0;
        else if (pathname.includes('/services/')) item.priority = 0.9;
        else if (pathname.includes('/devis-gratuit') || pathname.includes('/tarifs')) item.priority = 0.8;
        else if (pathname.includes('/zones/')) item.priority = 0.7;
        else item.priority = 0.5;
        return item;
      },
    }),
  ],
});
