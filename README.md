# KYRO — landing en app Hydrogen (Oxygen)

Ce dossier contient la landing KYRO **portée pour Shopify Hydrogen** (Remix + Oxygen).
Le HTML statique est injecté dans une route Remix ; le CSS et les images sont servis par l'app.

## Pourquoi cette structure
Oxygen n'héberge pas de HTML statique : il déploie une **app Hydrogen** (Remix, buildée par Vite).
Le *boilerplate* Hydrogen (config Vite, worker Oxygen, entrées serveur/client) change souvent de version —
le plus fiable est de le générer avec le **squelette officiel**, puis d'y déposer les fichiers de ce dossier.

## Contenu fourni ici
```
app/
├─ root.jsx            # racine Remix : polices Google + feuille de style
├─ routes/_index.jsx   # la landing (injecte landing.html + JS compte à rebours)
├─ landing.html        # corps de la landing (HTML)
└─ styles/app.css      # la DA complète
public/
└─ assets/*.webp       # visuels produit / lifestyle
```

## Mise en route (3 étapes)

### 1. Générer le squelette Hydrogen officiel
```bash
npm create @shopify/hydrogen@latest
# choisis : JavaScript, "Demo store" ou "Hello World", Tailwind: non
cd <ton-app>
```

### 2. Déposer les fichiers de ce dossier
- Copie `app/routes/_index.jsx`, `app/landing.html`, `app/styles/app.css` dans le `app/` du squelette.
- Copie `public/assets/` dans le `public/` du squelette.
- **Racine** : deux options —
  - **Simple** : remplace le `app/root.(t|j)sx` du squelette par le `app/root.jsx` fourni (landing pure, sans données Shopify).
  - **Conserver le root du squelette** : n'utilise pas mon `root.jsx` ; ajoute juste dans son `links()` les `<link>` polices + `app.css` (voir mon `root.jsx`), et garde son `_index` remplacé par le mien.

### 3. Lancer puis déployer
```bash
npm install
npm run dev        # vérifie en local (http://localhost:3000)

# Déploiement Oxygen (nécessite un storefront Hydrogen lié à ta boutique + un token)
npx shopify hydrogen link
npx shopify hydrogen deploy
```

## Notes
- Le JS d'origine (compte à rebours, année, boutons d'achat) est ré-attaché côté client dans `_index.jsx` (`useEffect`).
- Le marquee du bandeau et la FAQ (`<details>`) sont 100 % CSS/HTML natif : rien à câbler.
- Les boutons « Ajouter au panier » affichent une alerte maquette — à brancher sur le **cart Hydrogen** (`/cart` + `CartForm`) ou Stripe.
- Contenu : les allégations produit et la section « spécialiste » restent sous ta responsabilité ; à faire valider avant tout usage commercial réel.
