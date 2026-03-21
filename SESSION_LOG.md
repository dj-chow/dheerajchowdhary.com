# Session Log
*Reverse chronological — newest entries at top.*

---
## [2026-03-20 20:00] — Hero word maze, CLAUDE.md, headshot audit

**Project:** dheerajchowdhary.com
**Duration:** Extended

### Decisions
- Replace word cloud with crossword-style word maze (Option A: static hand-built layout, not algorithmic)
- Final 8 words: PLATFORM, RISK, ADOPTION, DATA, STRATEGY, ROADMAP, GROWTH, ENTERPRISE
- Words selected by cross-referencing existing word cloud with frequency analysis across 8 JDs from target companies (Affirm, BMO, Stripe, GitLab, Lyft)
- ADOPTION is the center highlighted word (gradient styling)
- Layout: 5 horizontal + 3 vertical words, 8 letter intersections, PLATFORM and STRATEGY as structural pillars
- Headshot: no-bg version (headshot-nobg.png) rejected. Looked AI-generated on dark background. Back-burnered until Replit credits return. Will try border/shadow treatment (Option C) with live preview.
- Created CLAUDE.md in repo root with stack, structure, conventions, and project slug

### Open Questions
- How does the word maze render on the actual site? Needs live preview (PR #2 not merged yet)
- Headshot treatment: border/shadow approach needs visual testing

### Follow-ups
- [ ] Preview word maze in Replit and merge PR #2
- [ ] Headshot styling (border/shadow treatment) — needs live preview, back-burnered
- [ ] Migrate to Netlify (would unblock preview problem, free auto-deploy)
- [ ] Case study video pilot (storyboarding/handwritten-note style)

### What I Learned
- RISK is the hardest word to place in a crossword with these 8 words. It shares very few letters with the others (only R, I, S are common). Ended up crossing ENTERPRISE at S as the only viable intersection.
- Job descriptions across Affirm, BMO, Stripe, GitLab, and Lyft all converge on the same PM keywords: strategy, roadmap, metrics, scale, platform, growth. Domain-specific terms (payments, compliance) vary by company.

### Artifacts
- [Created] `CLAUDE.md` — project-level instructions with stack, structure, conventions, project slug
- [Created] `artifacts/portfolio/src/config/wordmaze.ts` — crossword grid coordinates for 8 words
- [Created] `artifacts/portfolio/src/components/WordMaze.tsx` — CSS Grid crossword renderer with Framer Motion animation
- [Modified] `artifacts/portfolio/src/pages/Home.tsx` — swapped word cloud for WordMaze component
- [Created] `~/.claude/projects/.../memory/feedback_headshot_nobg.md` — no-bg headshot looks AI-generated, don't use
- [Modified] PR #2 title/description updated to reflect word maze (was "word cloud")

### Context
PR #2 is open on `hero-wordcloud` branch with 3 commits: original word cloud, session log, and word maze replacement. The maze replaces the word cloud entirely. Live site still shows the old headline layout since PR #2 hasn't been merged. User is out of Replit credits so can't preview yet. Netlify migration would solve the preview bottleneck. The old wordcloud.ts config file still exists in the repo but is no longer imported.

---
## [2026-03-19 18:00] — Portfolio audit reconciliation, headshot integration, hero redesign, Git workflow

**Project:** dheerajchowdhary.com
**Duration:** Extended

### Decisions
- IMG_1864.jpeg selected as headshot for both website and LinkedIn
- Operating model: all code changes go through branch → PR → merge → pull in Replit → publish workflow
- Replit deployment is manual (not auto-triggered by GitHub pushes)
- Hero redesign: replace long headline with word cloud of PM keywords, driven from config file
- Word cloud keywords finalized after audit against 100+ job listings: Adoption (xl), Regulated, Banking, Enterprise (lg), Risk, Platform, Data, Zero to One, AI (md), Cross-Functional, Governance, B2B, Fintech (sm)
- Removed: NLP, Discovery, Scale (low match to target roles). Did not add Payments (user has no payments experience)
- Removed "Senior Product Manager" badge from hero
- Fixed mobile blank space (reduced top padding)
- Option A (Replit as source of truth for now) selected as operating model for fast iteration, with plan to migrate to Netlify later

### Open Questions
- How does the word cloud actually look live? Needs preview in Replit
- Headshot background: user was working on removing blinds background in Canva. Status unclear. Replit shows headshot-final.jpeg already updated
- Netlify migration: deferred until site stabilizes

### Follow-ups
- [ ] Preview hero word cloud in Replit (PR #2: `git fetch origin && git checkout hero-wordcloud`)
- [ ] Merge PR #2 after preview approval, pull in Replit, publish
- [ ] Finalize headshot with neutral background (Canva BG Remover)
- [ ] Migrate hosting from Replit to Netlify (free, auto-deploy from GitHub)
- [ ] Case study video pilot: convert one case study into storyboarding/handwritten-note style video
- [ ] Create CLAUDE.md with project slug for this repo

### What I Learned
- Replit pushes TO GitHub on publish but does NOT pull FROM GitHub. Changes made outside Replit require manual `git pull` in Replit's shell before publishing.
- The professional Git workflow (branch → PR → merge) prevents accidental overwrites and creates a review gate. First PR was #1 (headshot).

### Artifacts
- [Created] `artifacts/portfolio/src/config/wordcloud.ts` — configurable word cloud keywords for hero section
- [Modified] `artifacts/portfolio/src/pages/Home.tsx` — hero refactored to word cloud, badge removed, padding fixed
- [Modified] `artifacts/portfolio/src/components/Layout.tsx` — headshot replaces DC initials (PR #1, merged)
- [Modified] `artifacts/portfolio/src/pages/About.tsx` — headshot added to story section (PR #1, merged)
- [Created] `REMAINING_CHANGES.md` — consolidated remaining tasks and future ideas
- [Created] `~/.claude/projects/.../memory/feedback_replit_deploy.md` — deployment is manual
- [Created] `~/.claude/projects/.../memory/project_operating_model.md` — Git workflow rules
- [Modified] `~/.claude/CLAUDE.md` — added global Git Workflow section (branch → PR → merge, applies to all projects)

### Context
All previous content changes from the portfolio audit are live. PR #1 (headshot) is merged and published. PR #2 (hero word cloud) is open and awaiting preview in Replit. The source code and live site are in sync on main. The word cloud keywords are in a config file so future updates don't require touching page code. User hit Replit plan limits and wants to eventually migrate to Netlify for free hosting with auto-deploy from GitHub.
