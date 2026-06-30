# technikky — Portfolio

Personal portfolio of a senior full-stack engineer. Single-page site showcasing selected
production-grade SaaS, dashboard, and applied-AI projects.

**Live:** _deploy pending (Vercel)_ · **Author:** [github.com/technikky](https://github.com/technikky)

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite 6** build tooling
- **Tailwind CSS 3** for styling
- Zero runtime UI dependencies — hand-rolled components and inline SVG icons

## Featured projects

| Project | What it is | Stack |
|---|---|---|
| [Lumina Analytics](https://github.com/technikky/lumina-analytics) | AI analytics SaaS with streamed Claude insights | Next.js 16, Supabase, Stripe, Claude |
| [PulseBoard](https://github.com/technikky/pulseboard) | Multi-tenant feedback SaaS, Postgres RLS isolation | Next.js, Supabase, Stripe |
| [Workforce Ops Dashboard](https://github.com/technikky/workforce-ops-dashboard) | Enterprise KPI & project dashboard | React, TS, Vite, Recharts |

## Develop

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck (tsc -b) + production build
npm run preview  # preview the production build
```

## Structure

```
src/
  App.tsx      # all sections: Hero, Work, Skills, About, Contact
  data.ts      # single source of truth for projects & skills
  index.css    # Tailwind layers + design tokens
```

Project content lives in `src/data.ts` — edit there to add or reorder work.
