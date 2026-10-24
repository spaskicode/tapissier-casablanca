import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime()
  );
  return rss({
    title: 'Blog Tapissier Casablanca',
    description: "Guides et conseils d'un tapissier-décorateur à Casablanca.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.excerpt,
      pubDate: p.data.datePublished,
      link: `/${p.id}`,
    })),
    customData: `<language>fr-MA</language>`,
  });
}
