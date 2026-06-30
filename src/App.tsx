import { projects, skills, GITHUB, EMAIL } from './data'

function Icon({ path, className = 'h-4 w-4' }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={path} />
    </svg>
  )
}
const I = {
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  external: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14 21 3',
  mail: 'M4 4h16v16H4z M22 6l-10 7L2 6',
  arrow: 'M5 12h14 M12 5l7 7-7 7',
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-white">
          tech<span className="text-accent">nikky</span><span className="text-slate-600">{'</>'}</span>
        </a>
        <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
          {['Work', 'Skills', 'About', 'Contact'].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="link-underline hover:text-white">{s}</a>
          ))}
        </nav>
        <a href={GITHUB} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200 transition hover:border-accent/60 hover:text-white">
          <Icon path={I.github} /> GitHub
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="container-x pt-20 pb-16 md:pt-28">
      <div className="max-w-3xl animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for senior full-stack roles
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          I build production-grade<br />
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            SaaS & AI products
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Senior full-stack engineer specializing in TypeScript across the stack — React & Next.js
          on the front, Node, Postgres and Supabase behind it, with Stripe billing and applied AI
          (Anthropic Claude) woven in. I care about multi-tenancy, type-safety, and systems that
          degrade gracefully.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90">
            View selected work <Icon path={I.arrow} />
          </a>
          <a href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-accent/60 hover:text-white">
            <Icon path={I.mail} /> Get in touch
          </a>
        </div>
        <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line/60 pt-8 max-w-xl">
          {[
            ['6+', 'shipped projects'],
            ['Full-stack', 'TS · React · Node'],
            ['AI-native', 'Claude · streaming'],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="text-2xl font-bold text-white">{k}</dt>
              <dd className="mt-1 text-sm text-slate-500">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className={`card group p-6 hover:border-accent/40 ${p.featured ? 'md:col-span-3' : 'md:col-span-2'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            {p.featured && <span className="chip border-accent/40 text-accent">Featured</span>}
          </div>
          <p className="mt-0.5 font-mono text-xs text-slate-600">{p.name} · {p.year}</p>
        </div>
        <div className="flex shrink-0 gap-1.5">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" title="Live demo"
              className="rounded-lg border border-line p-2 text-slate-400 transition hover:border-accent/60 hover:text-white">
              <Icon path={I.external} />
            </a>
          )}
          <a href={p.repo} target="_blank" rel="noreferrer" title="Source"
            className="rounded-lg border border-line p-2 text-slate-400 transition hover:border-accent/60 hover:text-white">
            <Icon path={I.github} />
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.blurb}</p>

      <ul className="mt-4 space-y-1.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-slate-400">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </article>
  )
}

function Work() {
  return (
    <section id="work" className="container-x py-16">
      <SectionTitle kicker="01 — Selected work" title="Things I've shipped" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6">
        {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">
        More on{' '}
        <a href={GITHUB} target="_blank" rel="noreferrer" className="link-underline text-accent">
          github.com/technikky
        </a>
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="container-x py-16">
      <SectionTitle kicker="02 — Toolbox" title="What I work with" />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent2">{s.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((i) => <li key={i} className="chip text-slate-300">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="container-x py-16">
      <SectionTitle kicker="03 — About" title="How I work" />
      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-slate-400 leading-relaxed">
          <p>
            I'm a senior full-stack engineer who likes owning a feature end to end — from the
            Postgres schema and row-level security policies, through the API and server actions,
            up to the React components and the pixels.
          </p>
          <p>
            My recent work clusters around <span className="text-slate-200">multi-tenant SaaS</span>{' '}
            (PulseBoard's RLS-isolated tenants, Stripe-gated tiers) and{' '}
            <span className="text-slate-200">applied AI</span> (Lumina's token-streamed Claude
            insights). A pattern you'll see across my repos: every external dependency has a
            graceful stub fallback, so the app runs and demos even with no keys configured.
          </p>
          <p>
            I write in TypeScript by preference, reach for the simplest architecture that holds,
            and treat type-safety and clear boundaries as features, not overhead.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="card p-6 font-mono text-sm">
            <div className="text-slate-500">// principles</div>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li><span className="text-accent2">const</span> typeSafety = <span className="text-emerald-400">'non-negotiable'</span></li>
              <li><span className="text-accent2">const</span> tenancy = <span className="text-emerald-400">'DB-enforced'</span></li>
              <li><span className="text-accent2">const</span> failures = <span className="text-emerald-400">'graceful'</span></li>
              <li><span className="text-accent2">const</span> scope = <span className="text-emerald-400">'end-to-end'</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container-x py-16">
      <div className="card overflow-hidden p-10 text-center md:p-14">
        <p className="font-mono text-xs uppercase tracking-wider text-accent2">04 — Contact</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let's build something.</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Open to senior full-stack and AI-product roles. The fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90">
            <Icon path={I.mail} /> {EMAIL}
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-accent/60 hover:text-white">
            <Icon path={I.github} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-accent2">{kicker}</p>
      <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{title}</h2>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-2 text-sm text-slate-600 md:flex-row">
        <span>© 2026 technikky · Built with React, Vite & Tailwind</span>
        <a href="#top" className="link-underline hover:text-slate-300">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
