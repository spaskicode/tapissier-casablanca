# Sauvegarde — tapissier-casablanca.ma

**Date : 24 octobre 2026, 15h20 (Casablanca)**
**État : passe SEO/indexation terminée. Jamais compilé (`npm install` non exécuté).**

## Contenu de l'archive

```
tapissier-casablanca/
├── HANDOFF.md              ← état du projet, ce qui reste à faire
├── BACKUP-INFO.md          ← ce fichier
├── README.md               ← doc du site principal
├── .env.example
├── astro.config.mjs        ← sitemap : lastmod réel + priority
├── package.json / tsconfig.json
├── public/                 ← robots.txt, llms.txt, og-default.jpg, logo, favicon
├── src/
│   ├── data/business.ts    ← SOURCE NAP UNIQUE (contient les [À COMPLÉTER])
│   ├── lib/schema.ts       ← LocalBusiness, Service, HowTo, FAQ, Breadcrumb, OfferCatalog
│   ├── content.config.ts   ← schémas Zod
│   ├── content/            ← 46 fichiers : services, zones, réalisations (fr + ar)
│   ├── components/ (11) · layouts/ · i18n/ · styles/
│   └── pages/              ← 24 pages FR + 11 pages AR
├── blog/                   ← projet Astro séparé (blog.tapissier-casablanca.ma)
│   └── src/content/posts/  ← 10 articles
└── docs/
    ├── keywords.csv        ← 500 mots-clés OpenSEO clusterisés
    ├── topical-map.md      ← carte topique sémantique
    ├── competitors.md      ← analyse SERP + pack local
    ├── indexnow-urls.txt   ← 59 URLs à soumettre au déploiement
    └── _raw_keywords_fr.csv / _raw_keywords_ar.csv
```

`node_modules/`, `dist/` et `.astro/` ne sont pas inclus : ils se régénèrent.

## Restauration

```bash
# 1. Site principal
cd tapissier-casablanca
npm install
npm run dev          # http://localhost:4321

# 2. Blog (projet séparé, autre terminal)
cd tapissier-casablanca/blog
npm install
npm run dev          # http://localhost:4322

# 3. Build de production
npm run build        # dans chaque dossier → dist/
```

## Avant mise en ligne

1. Remplacer tous les `[À COMPLÉTER]` — chercher dans le projet :
   `grep -rn "À COMPLÉTER" src/`
   Concerne : `src/data/business.ts` (NAP, email, réseaux sociaux, année),
   les prix dans `src/content/services/`, la clé Web3Forms dans `src/components/DevisForm.astro`,
   les mentions légales (ICE/RC/IF), les délais en jours ouvrés.
2. **`sameAs` est bloquant pour l'entité** : les 3 URLs sociales sont des placeholders,
   donc le schema Organization part sans `sameAs`. Renseigner au minimum
   Google Business Profile + Facebook + Instagram.
3. Remplacer les `<Placeholder>` par de vraies photos (`astro:assets` → `<Image>`).
4. Déployer les 2 projets séparément (site + sous-domaine blog).
5. Indexation rapide, dans cet ordre : IndexNow (`docs/indexnow-urls.txt`),
   puis Google Search Console + Bing Webmaster Tools (sitemaps),
   puis fiche Google Business Profile.

## Deux déploiements distincts

| Projet | Domaine | Dossier |
|---|---|---|
| Site principal | tapissier-casablanca.ma | racine |
| Blog | blog.tapissier-casablanca.ma | `blog/` |
