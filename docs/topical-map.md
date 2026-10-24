# Carte topique sémantique — tapissier-casablanca.ma

> Méthodologie : autorité topique (Koray) = couverture × données historiques. 1 mot-clé principal = 1 URL (zéro cannibalisation). Architecture en silos, hub-and-spoke, EAV, answer-first (AEO/GEO).
> Entité centrale : **Tapissier Casablanca** — artisan tapissier-décorateur à Casablanca (réfection + sur-mesure).
> Langues : FR (moteur SEO) + AR sous `/ar/` (miroir, hreflang). Blog : sous-domaine `blog.tapissier-casablanca.ma`.

---

## 1. Entité centrale & intention canonique

- **Entité** : Tapissier Casablanca (HomeAndConstructionBusiness / tapissier-décorateur).
- **Intention canonique** : trouver un artisan de confiance à Casablanca pour **rénover (réfection/retapissage) ou fabriquer sur mesure** salons marocains, canapés, fauteuils, têtes de lit et sièges — avec devis et déplacement à domicile.
- **EAV principal** : Entité = tapissier · Attributs = services, zone, prix, délais, garantie, matières · Valeurs = salon marocain/canapé/tête de lit…, Casablanca + quartiers, fourchettes MAD [À COMPLÉTER], délais [À COMPLÉTER], tissus/mousses.

---

## 2. Arborescence (site principal `tapissier-casablanca.ma`)

### Hub d'entité
| URL | Mot-clé principal | Vol. | Rôle | Schema |
|---|---|--:|---|---|
| `/` | tapissier casablanca | 590 | Entity hub ; relie services + zones + tarifs | LocalBusiness + WebSite + Organization |
| `/a-propos` | artisan tapissier casablanca | — | **Entity Home** (histoire, atelier, savoir-faire) | AboutPage + Organization + Person |
| `/contact` | tapissier casablanca contact | — | NAP, carte, WhatsApp, formulaire devis | ContactPage + LocalBusiness |
| `/devis-gratuit` | devis tapissier casablanca | — | Conversion | Service + FAQPage |
| `/tarifs` | prix tapissier / tarif tapissier | 10+ | AEO — fourchettes MAD [À COMPLÉTER] | FAQPage + BreadcrumbList |
| `/realisations` | réalisations tapissier casablanca | — | Galerie avant/après | CollectionPage + ImageObject |
| `/mentions-legales` | — | — | Légal (confiance E-E-A-T) | — |

### Silo SERVICES (hub `/services/`)
> Chaque page = answer-first (40–60 mots), H2 en questions, tableau comparatif, fourchette prix MAD [À COMPLÉTER], FAQ 5–8 Q, bloc « réfection vs sur-mesure ».

| URL | Mot-clé principal | Vol. | Couvre aussi (EAV) |
|---|---|--:|---|
| `/services/salon-marocain` | salon marocain | 4400 | réfection/retapissage salon marocain, banquette (sedari), matelas salon, housse, tapisserie salon marocain, coussins |
| `/services/canapes-et-fauteuils` | réfection canapé (canapé maroc) | 1600 | retapisser fauteuil, fauteuil salon (720), housse canapé (170), réparation canapé, changer mousse canapé, tapissier canapé |
| `/services/tete-de-lit-et-capitonnage` | tête de lit | 1300 | tête de lit tapissier moderne (170), tête de lit capitonnée, lit capitonné (70), lit tapissier (260), capitonnage |
| `/services/rideaux-et-voilages` | rideaux salon marocain | 720 | rideaux sur mesure, rideaux salon moderne, voilages, stores |
| `/services/tapisserie-automobile` | tapisserie voiture | 210 | tapissier voiture casablanca (90), sellerie auto, réfection sièges, ciel de toit |
| `/services/chaises` | chaise tapissier | 50 | retapisser chaise, assises, chaises de salle à manger |
| `/services/mousse-sur-mesure` | mousse sur mesure | 10+ | mousse haute densité (HR), matelas sur mesure, garnissage |
| `/services/tissus-d-ameublement` | tissu d'ameublement casablanca | 50 | tissus d'ameublement maroc, velours, choix de tissu (→ blog) |

**Anti-cannibalisation** : « fauteuil » n'est principal que sur `/services/canapes-et-fauteuils`. « chaise » (salle à manger) vit sur `/services/chaises`. « salon marocain » ≠ « rideaux salon marocain » (page rideaux) ≠ « salon marocain moderne 2026 » (blog).

### Silo ZONES (hub `/zones/` — Grand Casablanca uniquement)
> Pages de soutien SEO local. **Contenu réellement unique** par quartier (repères, type d'habitat, exemples de chantiers, délais de déplacement) — jamais un simple copier-coller avec le nom qui change. Cible aussi « tapissier autour de moi » (110) sur le hub + home.

| URL | Mot-clé | Vol. | Note |
|---|---|--:|---|
| `/zones/` | tapissier casablanca (zones desservies) | — | Hub + carte zones |
| `/zones/maarif` | tapissier maârif | n/a* | Forte densité concurrente (Hakim, Art c.b.m) |
| `/zones/oulfa` | tapissier oulfa | 50 | Seul quartier avec volume mesuré |
| `/zones/bourgogne-gauthier` | tapissier bourgogne | n/a* | Quartiers aisés centre |
| `/zones/ain-diab-californie` | tapissier ain diab | n/a* | Haut de gamme |
| `/zones/sidi-maarouf` | tapissier sidi maârouf | n/a* | Résidentiel sud |
| `/zones/bouskoura` | tapissier bouskoura | n/a* | Grand Casa, villas |
| `/zones/ain-chock` | tapissier aïn chock | n/a* | Densité concurrente (pack local) |
| `/zones/al-fida` | tapissier al fida | n/a* | Densité concurrente (pack local) |

*n/a = pas de volume mesuré isolément, mais demande locale réelle (confirmée par la densité du pack Google Maps). À traiter comme pages locales, pas comme pages « volume ».

---

## 3. Silo BLOG (`blog.tapissier-casablanca.ma`) — 10 articles

> Cluster informationnel qui capte la demande « inspiration/déco/comparaison » (fort volume : salon marocain moderne 2025 480, salon marocain traditionnel 590, salon marocain moderne 2026 260…). Chaque post = **pont contextuel** vers sa page service (money page). Article + FAQPage + BreadcrumbList + Person (auteur).

| # | Slug | Mot-clé principal | Vol. | Pont vers |
|--:|---|---|--:|---|
| 1 | `/salon-marocain-moderne-2026` | salon marocain moderne 2026 | 260+480 | /services/salon-marocain |
| 2 | `/salon-marocain-traditionnel-ou-moderne` | salon marocain traditionnel | 590 | /services/salon-marocain |
| 3 | `/renover-salon-marocain-refection-ou-neuf` | réfection salon marocain | — | /services/salon-marocain |
| 4 | `/choisir-tissu-ameublement` | tissu d'ameublement | 50+ | /services/tissus-d-ameublement |
| 5 | `/tete-de-lit-capitonnee-styles-conseils` | tête de lit capitonnée | 30+ | /services/tete-de-lit-et-capitonnage |
| 6 | `/quelle-mousse-pour-canape` | mousse canapé / mousse HR | 10+ | /services/mousse-sur-mesure |
| 7 | `/nettoyer-entretenir-canape-tissu` | entretien canapé tissu | — | /services/canapes-et-fauteuils |
| 8 | `/rideaux-salon-marocain-modernes` | rideaux salon marocain moderne | 110 | /services/rideaux-et-voilages |
| 9 | `/prix-refection-salon-marocain-casablanca` | prix réfection salon marocain | — | /tarifs |
| 10 | `/tapisserie-automobile-renover-sieges` | tapisserie voiture | 210 | /services/tapisserie-automobile |

---

## 4. Maillage interne (silo + hub-and-spoke)

- **Home** → relie les 8 pages services, le hub `/zones/`, `/tarifs`, `/realisations`, `/a-propos`.
- **Chaque service (spoke)** → remonte vers `/` dans le 1er tiers + 2–3 liens latéraux vers services proches (ex. salon marocain ↔ rideaux ↔ tissus ; canapés ↔ mousse ↔ chaises) + 1 lien vers `/tarifs` + `/realisations`.
- **Chaque zone** → lie vers home + 2 services phares + `/contact`.
- **Chaque post de blog** → 1 lien montant vers sa page service (ancre descriptive, après avoir défini le concept) + 1 lien vers un post frère. Les pages services lient vers 1–2 posts (pont descendant).
- Ancres : descriptives, ≤ 4 concepts, jamais « cliquez ici ». Lien **après** définition du concept.
- `BreadcrumbList` sur toutes les pages hors home.

---

## 5. AEO / GEO / SEO local (appliqué partout)

- **Answer-first** : chaque page money ouvre par une réponse directe de 40–60 mots ; H2 formulés en questions réelles ("Combien coûte la réfection d'un salon marocain à Casablanca ?", "Comment retapisser un fauteuil ?").
- **Passages auto-portants** (extraction par agents IA), **tableaux comparatifs**, **1 chiffre par section** (prix/délai/densité mousse) — chiffres réels en [À COMPLÉTER].
- **NAP unique** depuis `src/data/business.ts` (nom, adresse, tél/WhatsApp, horaires) → identique home, footer, contact, JSON-LD, GBP.
- **JSON-LD** : LocalBusiness (HomeAndConstructionBusiness) avec geo, areaServed (quartiers), openingHours, sameAs (Facebook, Instagram, GBP) ; Service par page service ; FAQPage ; BreadcrumbList ; Article (blog) ; ImageObject (réalisations).
- **Crawlers IA** : robots.txt autorise OAI-SearchBot, ChatGPT-User, Claude-SearchBot/User, PerplexityBot, Googlebot ; `llms.txt` (résumé entreprise + pages clés) ; sitemap par domaine (site + sous-domaine blog).
- **GBP** = levier n°1 local : fiche complète, catégorie « Tapissier-décorateur », 20+ photos, avis (hors-site). [Action côté client — noté dans le rapport final.]

---

## 6. Collections de contenu (Astro Content Collections)

| Collection | Alimente | Champs clés (Zod) |
|---|---|---|
| `services` | /services/[slug] | title, primaryKeyword, answer (40–60 mots), eav, faq[], relatedServices[], priceRange, image |
| `zones` | /zones/[slug] | quartier, repères, habitat, services phares, faq[], geo |
| `blog` | blog.* /[slug] | title, primaryKeyword, excerpt, author, datePublished, dateModified, bridgeTo, faq[], cover |
| `realisations` | /realisations | title, type (salon/canapé/…), avant, après, quartier, tissu |
| `faq` | blocs FAQ réutilisables | question, answer |

Tout le contenu est **data-driven** : les pages sont générées dynamiquement depuis ces collections (ajout d'un service/quartier/article = un fichier de données, pas de code).

---

## 7. Vérification anti-cannibalisation (checklist)

- [x] 1 mot-clé principal = 1 URL (tableau §2–3).
- [x] « salon marocain » (service) ≠ « salon marocain moderne 2026 » (blog) ≠ « rideaux salon marocain » (rideaux).
- [x] « fauteuil » principal uniquement sur canapés-et-fauteuils ; « chaise » sur chaises.
- [x] Zones = intention locale, pas doublons (contenu unique par quartier).
- [x] Blog = informationnel ; services = commercial/transactionnel → intentions séparées.
