# 🌸 Menti in Fiore

Un blog moderno per educazione infantile 0-6 anni, costruito con Next.js 15 e il framework EAR (Essenza-Armonia-Risonanza).

## ✨ Caratteristiche

- **Next.js 15** con App Router e TypeScript
- **Tailwind CSS** con design system EAR personalizzato
- **WordPress Headless** tramite REST API
- **Responsive Design** mobile-first
- **SEO Ottimizzato** con metadata dinamici
- **Performance Eccellenti** con static generation

## 🎨 Design System EAR

Il sito utilizza una palette colori studiata secondo il framework EAR:

- **Verde Salvia** (#A8C5A8) - CTA primari
- **Beige Caldo** (#F5E6D3) - Backgrounds
- **Blu Nebbia** (#C8D5E0) - Accenti informativi
- **Corallo Morbido** (#FFB5A7) - CTA secondari
- **Viola Lavanda** (#E8D5F2) - Quote
- **Giallo Burro** (#FFF4D6) - Highlights

## 🚀 Quick Start

### Installazione

```bash
npm install
```

### Sviluppo Locale

```bash
npm run dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

### Build Produzione

```bash
npm run build
npm run start
```

## 📦 Deploy su Vercel

### Setup Vercel (Primo Deploy)

1. Vai su [vercel.com](https://vercel.com) e fai login
2. Clicca su "Add New" → "Project"
3. Importa il repository GitHub `raydalessandro/Menti-in-fiore`
4. Configura il progetto:
   - **Framework Preset**: Next.js (auto-detect)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Aggiungi le **Environment Variables**:
   ```
   NEXT_PUBLIC_WORDPRESS_URL=https://mentiinfiore.com/wp-json/wp/v2
   NEXT_PUBLIC_SITE_URL=https://mentiinfiore.com
   ```

6. Clicca su "Deploy"

### Deploy Successivi

Vercel farà deploy automatico ad ogni push sul branch main/master.

## 📁 Struttura Progetto

```
menti-in-fiore/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── chi-siamo/         # About page
│   ├── contatti/          # Contact page
│   ├── risorse/           # Resources page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── blog/             # Blog components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── utils.ts          # Generic utilities
│   └── wordpress.ts      # WordPress API client
├── types/                 # TypeScript types
├── styles/               # Global styles
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🔧 Configurazione WordPress

Il sito si connette a WordPress come headless CMS. Assicurati che:

1. WordPress REST API sia abilitata
2. I permalink siano configurati correttamente
3. CORS sia abilitato per permettere richieste dal frontend

### Plugin Consigliati

- **WP REST API Controller** - Per gestire CORS
- **Advanced Custom Fields Pro** - Per campi personalizzati
- **Yoast SEO** - Per ottimizzazione SEO

## 📊 Performance

Target di performance:

- ✅ Lighthouse Performance: 95+
- ✅ Lighthouse SEO: 100
- ✅ Lighthouse Accessibility: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s

## 📄 Documentazione

Per informazioni dettagliate sul design e l'architettura:

- `menti-in-fiore-ear-analysis.md` - Analisi completa framework EAR
- `menti-in-fiore-handoff.md` - Documentazione tecnica sviluppo
- `menti-in-fiore-quick-start.md` - Guida rapida setup

## 🤝 Contribuire

Questo è un progetto privato. Per suggerimenti o segnalazione bug, contatta il team di sviluppo.

## 📝 License

Copyright © 2026 Menti in Fiore. Tutti i diritti riservati.

---

**Sviluppato con il Framework EAR** (Essenza-Armonia-Risonanza)
**Build Date**: Gennaio 2026
