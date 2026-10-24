# Blog Tapissier Casablanca — `blog.tapissier-casablanca.ma`

Projet **Astro séparé** du site principal, à déployer sur le sous-domaine
`blog.tapissier-casablanca.ma`. Même design system (Exo + Roboto, cuivre/anthracite),
mêmes composants partagés.

## Démarrer

```bash
cd blog
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build -> dist/
```

> Livré sans `npm install`/build (registre npm inaccessible côté génération).
> Lancez-les en local ; signalez-moi toute erreur.

## Contenu

10 articles SEO (FR, humanisés, answer-first + schéma `Article`/`FAQPage`/`Breadcrumb`),
chacun pointant vers sa page service du site principal :

| Article | Mot-clé | Pont vers |
|---|---|---|
| Salon marocain moderne 2026 | salon marocain moderne 2026 | /services/salon-marocain |
| Traditionnel ou moderne | salon marocain traditionnel | /services/salon-marocain |
| Réfection ou neuf | réfection salon marocain | /services/salon-marocain |
| Choisir son tissu | tissu d'ameublement | /services/tissus-ameublement |
| Tête de lit capitonnée | tête de lit capitonnée | /services/tete-de-lit-et-capitonnage |
| Quelle mousse pour un canapé | quelle mousse pour canapé | /services/mousse-sur-mesure |
| Nettoyer un canapé en tissu | nettoyer canapé tissu | /services/canapes-et-fauteuils |
| Rideaux de salon marocain | rideaux salon marocain moderne | /services/rideaux-et-voilages |
| Prix réfection salon marocain | prix réfection salon marocain | /tarifs |
| Tapisserie automobile | tapisserie voiture | /services/tapisserie-automobile |

Ajouter un article = créer un fichier dans `src/content/posts/` (voir un existant comme modèle).

## Fonctionnalités

- Flux **RSS** : `/rss.xml`
- **Sitemap** : `/sitemap-index.xml` + `robots.txt`
- Images en `<Placeholder>` — remplacez par de vraies photos (`astro:assets`).
- Liens croisés entre articles (maillage) + ponts vers les pages service (money pages).

## Déploiement

Build statique (`dist/`). Déployez sur un hébergement séparé pointé vers
`blog.tapissier-casablanca.ma` (sous-domaine indépendant du site principal).
