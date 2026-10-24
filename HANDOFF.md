# État du projet — tapissier-casablanca.ma

Dernière mise à jour : 24/10/2026 (passe SEO/indexation)

## Ce qui est FAIT ✅

### Recherche & stratégie (`/docs`)
- `keywords.csv` — 500 mots-clés OpenSEO (Maroc/FR), clusterisés + URL cible
- `competitors.md` — analyse SERP + pack local Google Maps, lacunes de contenu
- `topical-map.md` — carte topique sémantique complète (1 mot-clé = 1 URL)
- `indexnow-urls.txt` — **59 URLs** prêtes à soumettre via IndexNow le jour du déploiement

**Chiffres clés** : salon marocain 4400 · canapé maroc 1600 · tapissier 1300 · tête de lit 1300 ·
rideaux salon marocain 720 · tapissier casablanca 590. KD ≈ 0 partout.
Concurrence organique = réseaux sociaux + annuaires → niche très accessible.

### Site principal (racine) — Astro 5 + Tailwind 4
- **FR complet** : accueil, 8 services, 8 quartiers, tarifs, réalisations, contact,
  devis-gratuit, à-propos, mentions légales, 404
- **AR complet** sous `/ar/` : mêmes pages, RTL, hreflang
- Collections data-driven (services / zones / realisations), Zod
- NAP source unique : `src/data/business.ts`

### Blog (`/blog`) — projet séparé → blog.tapissier-casablanca.ma
- 10 articles SEO FR, answer-first, schema Article/FAQ/Breadcrumb, RSS

## Passe SEO du 24/10 ✅

| Amélioration | Avant | Après |
|---|---|---|
| Schema `HowTo` sur les pages service (16 fichiers avec `steps`) | absent | émis FR + AR, ancres `#etape-N` |
| `lastmod` du sitemap | date de build (faux signal) | **date `updated:` réelle** de chaque contenu (hook `serialize`) |
| `priority` du sitemap | uniforme | accueil 1.0 · services 0.9 · devis/tarifs 0.8 · quartiers 0.7 |
| Date « Mis à jour le » visible | blog seulement | **+48 pages** (services & quartiers, FR + AR) |
| H2 question-shaped (quartiers) | 1/16 (6 %) | **48/48 (100 %)** FR + AR |
| H2 question-shaped (services) | 20/28 (71 %) | **72/72 (100 %)** FR + AR |
| Sections contenant un chiffre réel | 0/28 services FR (0 %) | **22 %** (densités kg/m³, cycles Martindale, métrage, laize) |
| Liens internes in-body (moyenne) | services 1,4 · quartiers 2,0 | **services 3,5–4,4 · quartiers 4,6–4,8** |
| Pont service → blog | 0 lien (sens unique) | **8/8 pages service FR** pointent vers le blog |
| `llms.txt` | site seulement | **site + blog** |
| Entité : `alternateName`, `knowsAbout` | absents | ajoutés au LocalBusiness |
| `ImageObject` + `speakable` + `isPartOf` sur les articles | absents | ajoutés |
| Tableaux comparatifs (agentic SEO) | 0 | 4 (mousse FR/AR, tissus FR/AR) |

### Chiffres techniques utilisés (vérifiables, pas inventés)
Mousse HR assise 35–40 kg/m³ sur 12–14 cm · dossier 25–30 kg/m³ sur 8–10 cm ·
abrasion 20–25 000 cycles Martindale (domestique) / 30 000+ (contract) ·
laize tissu 140 cm · coefficient d'ampleur rideau 2 à 2,5× · boutons de capitonnage 12–20 cm ·
sedari : profondeur 70–75 cm, hauteur 40–45 cm, 4–5 m de tissu par banquette de 200 cm.
**Aucun prix, avis, certification ni durée d'expérience n'a été inventé.**

## Vérifications passées ✅ (sans npm)

| Contrôle | Résultat |
|---|---|
| Frontmatter 46 fichiers vs schémas Zod | ✅ 0 erreur |
| Dates `updated` / `dateModified` parsables | ✅ |
| Liens internes → routes réelles (52 site + 13 blog) | ✅ 0 lien mort |
| Liens service → blog → routes blog réelles | ✅ |
| Appariement slugs FR ↔ AR (hreflang) | ✅ 8+8 |
| Imports `@/…`, noms `<Icon>`, accès `business.*` | ✅ |
| `buildLastmodMap()` exécuté sous Node sur le contenu réel | ✅ 38 entrées site / 11 blog |

## Ce qui RESTE à faire ⏳

1. **Build** (jamais exécuté — registre npm inaccessible depuis l'environnement de génération) :
   `npm install && npm run build` sur les 2 projets. Les erreurs possibles sont de type
   **compilation/typage** uniquement (résolution Tailwind v4, types Astro) — contenu et liens validés.
2. **Remplir les `[À COMPLÉTER]`** : NAP exact, prix réels en MAD, ICE/RC/IF, clé Web3Forms,
   année de création, délais en jours ouvrés.
3. **`sameAs` — bloquant pour l'entité** : les 3 URLs sociales de `business.ts` sont des
   placeholders, donc `localBusinessSchema()` les filtre et l'Organization part **sans `sameAs`**.
   Renseigner au minimum Google Business Profile + Facebook + Instagram.
4. **Photos réelles** : remplacer les `<Placeholder>` par `<Image>` (astro:assets) + `ImageObject`.
5. **Déploiement** : 2 déploiements statiques (site + sous-domaine blog).
6. **Jour du déploiement — indexation rapide, dans cet ordre** :
   - soumettre `docs/indexnow-urls.txt` (59 URLs) via IndexNow → Bing/Yandex en quelques minutes
   - Google Search Console : vérifier les 2 propriétés, soumettre les 2 sitemaps
   - Bing Webmaster Tools : idem
   - créer la fiche Google Business Profile (levier n°1 local), 20+ photos, services tagués
7. **Avis** : viser 30 avis Google dont 5 dans les 90 derniers jours (concurrents à 21–22).
   Ensuite seulement activer `aggregateRating` dans le schema.
8. **`Person` auteur** : dès que l'artisan signe sous son nom, remplacer l'auteur Organization
   des articles par un `Person` (voir commentaire dans `blog/src/lib/schema.ts`).

## Décisions prises

- Design : template **Artima** (anthracite / béton chaud / cuivre `#c4662f`, Exo + Roboto).
  Le `.fig` local n'était pas lisible par le connecteur Figma → implémenté depuis les tokens extraits.
- Géo : **Casablanca + quartiers uniquement**.
- Services : **réfection ET sur-mesure** sur chaque page.
- Blog en **sous-domaine**, projet séparé.
- Langues : FR = moteur SEO ; AR en support (volume arabe faible, « منجد » ambigu).

## Anti-cannibalisation (à respecter)

- « fauteuil » n'est principal que sur `/services/canapes-et-fauteuils`
- « chaise » uniquement sur `/services/chaises`
- « salon marocain » (service) ≠ « salon marocain moderne 2026 » (blog) ≠ « rideaux salon marocain »
