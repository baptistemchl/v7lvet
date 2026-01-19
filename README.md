# V7LVET - Site Premium Expert-Comptable

![V7LVET](https://img.shields.io/badge/V7LVET-Drive%20the%20future-a78bfa)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

Site web ultra-premium pour le cabinet d'expertise comptable **V7LVET**, avec des effets visuels de niveau agence et une optimisation SEO maximale.

## ✨ Caractéristiques

### Design & UX
- 🎨 **Design System Premium** - Palette de couleurs cohérente avec effets glassmorphism
- 🖱️ **Curseur Custom** - Interaction fluide et élégante
- 📱 **100% Responsive** - Expérience parfaite sur tous les appareils
- ⚡ **Animations Fluides** - Framer Motion + GSAP pour des transitions premium
- 🌊 **Smooth Scroll** - Navigation ultra-fluide avec Lenis
- ✨ **Effets Visuels** - Parallax, text reveal, magnetic buttons, 3D cards

### Performance & SEO
- 🚀 **Score Lighthouse 95+** - Optimisations avancées
- 📊 **SEO Maximum** - Métadonnées, sitemap, robots.txt, données structurées
- 🖼️ **Images Optimisées** - AVIF/WebP automatique avec Next.js Image
- 📦 **Code Splitting** - Chargement intelligent des composants

### Technique
- ⚛️ **Next.js 14 App Router** - Le meilleur du SSR/SSG
- 🔷 **TypeScript Strict** - Code robuste et maintenable
- 🎯 **Tailwind CSS** - Styling utility-first optimisé
- 📝 **Prêt pour CMS** - Structure adaptée pour Keystatic/Sanity

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/v7lvet/website.git
cd v7lvet

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
npm start
```

## 📁 Structure du Projet

```
v7lvet/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Page Services
│   │   ├── about/             # Page À propos
│   │   ├── blog/              # Blog + Articles
│   │   ├── faq/               # FAQ
│   │   ├── layout.tsx         # Layout principal
│   │   ├── sitemap.ts         # Sitemap dynamique
│   │   └── robots.ts          # Robots.txt
│   │
│   ├── components/
│   │   ├── animations/        # Composants d'animation
│   │   │   ├── custom-cursor.tsx
│   │   │   ├── fade-in.tsx
│   │   │   ├── parallax.tsx
│   │   │   └── text-reveal.tsx
│   │   │
│   │   ├── layout/            # Header, Footer, etc.
│   │   │
│   │   ├── sections/          # Sections de pages
│   │   │   ├── hero-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   └── ...
│   │   │
│   │   └── ui/                # Composants UI réutilisables
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       └── ...
│   │
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilitaires et données
│   ├── styles/                # Styles globaux
│   └── types/                 # Types TypeScript
│
├── public/                    # Assets statiques
└── package.json
```

## 🎨 Design System

### Couleurs
```css
/* Accent (Violet Premium) */
--accent: #a78bfa
--accent-light: #c4b5fd
--accent-dark: #7c3aed

/* Surface (Dark Theme) */
--surface: #09090b
--surface-elevated: #18181b

/* Velvet (Grays) */
--velvet-50 → --velvet-950
```

### Typographie
- **Display** : Cabinet Grotesk (ou Inter en fallback)
- **Body** : Inter
- **Mono** : JetBrains Mono

### Composants Clés
- `Button` - Boutons avec effet magnétique
- `Card3D` - Cards avec effet de perspective 3D
- `GlassCard` - Cards glassmorphism
- `Accordion` - FAQ avec animations
- `TextReveal` - Animation de révélation de texte

## 🔧 Configuration

### Variables d'Environnement
Aucune variable d'environnement requise pour le développement local.

Pour la production, vous pouvez ajouter :
```env
NEXT_PUBLIC_SITE_URL=https://v7lvet.fr
```

### Personnalisation
Toutes les données du site sont dans `src/lib/data.ts` :
- Informations du cabinet
- Services
- Équipe
- FAQ
- Articles de blog

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero + Services + Témoignages + CTA |
| Services | `/services` | Détail des 4 services principaux |
| Le Cabinet | `/about` | Histoire, valeurs, équipe |
| Blog | `/blog` | Liste des articles |
| Article | `/blog/[slug]` | Article individuel |
| FAQ | `/faq` | Questions fréquentes |

## 🛠️ Intégration CMS

Le projet est préparé pour une intégration CMS. Options recommandées :

1. **Keystatic** (Gratuit, fichiers locaux/GitHub)
   ```bash
   npm install @keystatic/core @keystatic/next
   ```

2. **Sanity** (Freemium)
   ```bash
   npm install sanity next-sanity
   ```

3. **Strapi** (Self-hosted)

## 📈 Performance

Objectifs :
- ✅ Lighthouse Performance: 95+
- ✅ Lighthouse SEO: 100
- ✅ Lighthouse Accessibility: 95+
- ✅ Core Web Vitals: Pass

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

Propriétaire - © 2024 V7LVET

---

Développé avec 💜 par [Agence IXP](https://agence-ixp.fr)
