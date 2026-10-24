// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** lastmod véridique : lit `dateModified:` de chaque article au lieu de la date de build. */
function buildLastmodMap() {
  const map = new Map();
  const dir = path.resolve('./src/content/posts');
  if (!fs.existsSync(dir)) return map;
  const dates = [];
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const d = raw.match(/^dateModified:\s*(\S+)/m)?.[1]?.replace(/['"]/g, '');
    if (!d) continue;
    map.set(`/${file.replace(/\.md$/, '')}`, d);
    dates.push(d);
  }
  const newest = dates.sort().at(-1);
  if (newest) map.set('/', newest);
  return map;
}

const LASTMOD = buildLastmodMap();

// Blog déployé sur le sous-domaine. Le site principal est tapissier-casablanca.ma
export default defineConfig({
  site: 'https://blog.tapissier-casablanca.ma',
  trailingSlash: 'never',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const real = LASTMOD.get(pathname);
        if (real) item.lastmod = new Date(real).toISOString();
        item.priority = pathname === '/' ? 0.9 : 0.7;
        return item;
      },
    }),
  ],
});
