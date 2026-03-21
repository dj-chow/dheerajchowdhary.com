# CLAUDE.md — dheerajchowdhary.com

## What This Is
Personal portfolio site for Dheeraj Chowdhary. Static React SPA, no backend.

## Tech Stack
- React 19 + TypeScript
- Vite (bundler/dev server)
- Tailwind CSS v4 (CSS variable theming, dark mode forced on)
- Shadcn/ui (New York style) + Radix primitives
- Framer Motion for animations
- Wouter for routing
- pnpm as package manager

## Project Structure
```
artifacts/portfolio/src/
  pages/          — One file per route (Home.tsx, CaseStudy1-4.tsx, About, Contact)
  components/     — Layout.tsx (header/footer), ui/ (Shadcn primitives)
  config/         — wordcloud.ts (hero section keywords)
  hooks/          — useDocumentMeta, use-mobile, use-toast
  lib/            — utils.ts
public/
  images/         — Site images
```

## Commands
```bash
pnpm dev        # Dev server (needs PORT + BASE_PATH env vars)
pnpm build      # TypeScript check + Vite production build
pnpm serve      # Preview production build
pnpm typecheck  # Type check only
```

## Content Model
All content is hardcoded in TypeScript. No database, no CMS.
- **Hero word cloud**: `src/config/wordcloud.ts` (array of keywords with size/highlight/opacity)
- **Case studies**: Static array in `Home.tsx` (lines 41-87), individual pages in `pages/CaseStudy1-4.tsx`
- **Images**: `public/images/`

## Routing
Wouter with base path support. Routes defined in `App.tsx`:
- `/` — Home
- `/case-studies/risk-platform` — CaseStudy1
- `/case-studies/frtb-program` — CaseStudy2
- `/case-studies/upgrad-google` — CaseStudy3
- `/case-studies/nlp-assessment` — CaseStudy4

## Conventions
- Named exports only (no default exports)
- Shadcn components live in `components/ui/` and are composed from Radix
- Animations use Framer Motion container + item variant pattern
- Styling is pure Tailwind. No separate CSS files beyond `index.css`.

## Deploy
Hosted on Replit. Deployment is manual: pull from GitHub, then publish in Replit.
Plan to migrate to Netlify (auto-deploy on merge) once site stabilizes.

## Rules
- Never commit directly to main. Always branch + PR.
- Stage specific files only (no `git add .` or `git add -A`).
- All content changes go through the config/data files, not by editing JSX directly where avoidable.
