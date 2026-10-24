# Tapissier Casablanca — site Astro (FR + AR)

Site vitrine + SEO local pour **tapissier-casablanca.ma**, construit avec **Astro 5** et **Tailwind CSS v4**.
Architecture sémantique (voir `/docs/topical-map.md`), orientée SEO local + AEO/GEO.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
```

Build de production :

```bash
npm run build      # lance "astro check" puis "astro build" -> dossier dist/
npm run preview    # prévisualise le build
```

> ⚠️ Ce projet a été livré **sans exécution de `npm install`/build** (registre npm
> inaccessible depuis l'environnement de génération). Lancez `npm install` puis
> `npm run build` en local ; signalez-moi toute erreur, je la corrige.

## Stack

- **Astro ^5.6** (sortie statique / SSG), **TypeScript strict**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Content Collections** (`src/content.config.ts`) : services, zones, réalisations — tout est data-driven
- **@astrojs/sitemap** (sitemap i18n), **robots.txt** + **llms.txt** (crawlers IA autorisés)
- Polices **Exo + Roboto** auto-hébergées (fontsource)
- Zéro JS par défaut ; petites îles uniquement (menu mobile, formulaire WhatsApp)

## Design

Repris du template **Artima – Architecture & Interiors** : anthracite + blanc/béton chaud +
accent **cuivre** (`#c4662f`), titres **Exo**, texte **Roboto**. Tokens dans `src/styles/global.css`.

## À COMPLÉTER avant mise en ligne

Recherchez `[À COMPLÉTER]` dans le code. Les principaux :

- **`src/data/business.ts`** — NAP : raison sociale, e-mail, adresse exacte, horaires, année de création,
  liens Facebook/Instagram/Google Business, coordonnées GPS de l'atelier.
- **`src/pages/tarifs.astro`** — fourchettes de prix réelles (MAD).
- **`src/pages/a-propos.astro`** — histoire / fondateur / expérience.
- **`src/pages/mentions-legales.astro`** — ICE, RC, IF, hébergeur.
- **`src/components/DevisForm.astro`** — clé d'accès **Web3Forms** (gratuit, https://web3forms.com)
  pour recevoir les demandes par e-mail. Le bouton WhatsApp fonctionne déjà sans configuration.
- **`src/pages/contact.astro`** — iframe de la carte Google Business.
- **Photos** — remplacez les `<Placeholder>` par de vraies photos de chantiers
  (`<Image>` depuis `astro:assets`). Aucune fausse photo n'a été insérée.

Le téléphone (`+212 661-718659`) et la marque (« Tapissier Casablanca ») sont déjà en place.

## Structure

```
src/
  data/business.ts         # source unique NAP (alimente tout + JSON-LD)
  content.config.ts        # schémas Zod des collections
  content/services/fr/     # 8 pages services (markdown)
  content/zones/fr/        # 8 quartiers de Casablanca
  content/realisations/fr/ # galerie avant/après
  lib/schema.ts            # JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb...)
  i18n/ui.ts               # chaînes FR/AR + helpers
  components/ layouts/ pages/
```

## Bilingue (FR / AR)

- FR = langue par défaut (sans préfixe). AR sous `/ar/` (routing i18n + hreflang déjà configurés).
- **Les pages/contenus AR restent à ajouter** (`src/pages/ar/**` et `src/content/**/ar/*.md`).
  Le squelette, le routing, le `dir="rtl"` et le sélecteur de langue sont prêts.
  > Note SEO : la demande de recherche en arabe sur ce secteur est faible (voir `/docs/competitors.md`) ;
  > le français reste le moteur SEO principal.

## Blog (sous-domaine)

Le blog est un **projet Astro séparé** à déployer sur `blog.tapissier-casablanca.ma`
(10 articles prévus, voir `/docs/topical-map.md`). Livré séparément.

## Déploiement

Sortie 100 % statique (`dist/`). Hébergez sur Netlify, Vercel, Cloudflare Pages ou tout
hébergement statique. Pointez `tapissier-casablanca.ma` dessus, et créez un second déploiement
pour `blog.tapissier-casablanca.ma`.
