export type Project = {
  name: string
  title: string
  blurb: string
  highlights: string[]
  stack: string[]
  repo: string
  demo?: string
  year: string
  featured?: boolean
}

export const GITHUB = 'https://github.com/technikky'
export const EMAIL = 'ixayle@gmail.com'

export const projects: Project[] = [
  {
    name: 'lumina-analytics',
    title: 'Lumina Analytics',
    blurb:
      'AI-powered analytics dashboard SaaS with streaming, Claude-generated insights over your metrics. Architected to run fully in demo mode with graceful stub fallbacks when no API keys are present.',
    highlights: [
      'Server-streamed AI insights (Anthropic Claude) rendered token-by-token',
      'Supabase Postgres data layer + Stripe subscription billing',
      'Graceful-degradation design: every external dependency has a stub fallback',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Supabase', 'Stripe', 'Claude API', 'Tailwind'],
    repo: `${GITHUB}/lumina-analytics`,
    year: '2026',
    featured: true,
  },
  {
    name: 'pulseboard',
    title: 'PulseBoard',
    blurb:
      'Multi-tenant customer feedback & feature-voting SaaS. Tenants are isolated at the database layer with Postgres Row-Level Security; billing is handled through Stripe subscriptions.',
    highlights: [
      'True multi-tenancy enforced by Postgres RLS policies, not app-layer checks',
      'Stripe subscription tiers gating features',
      'Next.js App Router with server actions',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Postgres RLS', 'Stripe', 'Tailwind'],
    repo: `${GITHUB}/pulseboard`,
    demo: 'https://pulseboard-silk.vercel.app',
    year: '2026',
    featured: true,
  },
  {
    name: 'workforce-ops-dashboard',
    title: 'Workforce Ops Dashboard',
    blurb:
      'Enterprise workforce operations & project-management dashboard. Real-time-style KPI cards, charts, and project boards backed by typed state and persisted locally.',
    highlights: [
      'Recharts data-viz: utilization, throughput, and project KPIs',
      'Typed Context API state, persisted to localStorage',
      'Vite build, component-driven architecture',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Recharts', 'Context API'],
    repo: `${GITHUB}/workforce-ops-dashboard`,
    year: '2026',
    featured: true,
  },
  {
    name: 'AIResume',
    title: 'AI Resume Builder',
    blurb:
      'SaaS resume builder with AI-assisted content generation, authentication, and subscription billing wired end to end on a Node backend.',
    highlights: [
      'Firebase Auth + Stripe billing',
      'React frontend over a Node.js/Express API',
      'AI generation with a stub fallback path',
    ],
    stack: ['React', 'Node.js', 'Express', 'Firebase', 'Stripe'],
    repo: `${GITHUB}/AIResume`,
    year: '2026',
  },
  {
    name: 'LLM-ChatBot',
    title: 'LLM Chatbot',
    blurb:
      'A from-scratch chat application over an LLM API — built to understand the full request/stream/render loop rather than relying on a framework abstraction.',
    highlights: [
      'Next.js frontend + Express backend',
      'Streaming chat completions',
      'Minimal, dependency-light architecture',
    ],
    stack: ['Next.js', 'Express', 'JavaScript', 'LLM API'],
    repo: `${GITHUB}/LLM-ChatBot`,
    year: '2026',
  },
  {
    name: 'mini-Golf',
    title: 'Mini Golf (Unity)',
    blurb:
      'A small 3D mini-golf game built in Unity — physics, custom shaders, and level design. A break from the web stack and a demonstration of breadth.',
    highlights: ['3D physics & input', 'Custom ShaderLab materials', 'C# gameplay scripting'],
    stack: ['Unity', 'C#', 'ShaderLab'],
    repo: `${GITHUB}/mini-Golf`,
    year: '2026',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'Python'] },
  { group: 'Frontend', items: ['React', 'Next.js (App Router)', 'Vite', 'Tailwind CSS', 'Recharts'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Server Actions', 'REST', 'Streaming APIs'] },
  { group: 'Data & Infra', items: ['Supabase', 'Postgres', 'Row-Level Security', 'Firebase'] },
  { group: 'Payments & Auth', items: ['Stripe', 'Firebase Auth', 'Supabase Auth'] },
  { group: 'Applied AI', items: ['Anthropic Claude API', 'Streaming completions', 'Graceful stub fallbacks'] },
]
