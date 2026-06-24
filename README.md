# WIZ

Building something great.

---

## Local development setup (~10 minutes)

### Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 22 LTS | [nodejs.org](https://nodejs.org) |
| npm | bundled with Node | — |
| Git | any | [git-scm.com](https://git-scm.com) |

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_ORG/wiz.git
cd wiz

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and fill in values (most are optional locally)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the WIZ home page.

Hot reloading is enabled: save any file and the browser updates instantly.

---

## Project structure

```
wiz/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout (fonts, metadata, providers)
│   ├── page.tsx      # Home page (/)
│   └── globals.css   # Global styles + Tailwind imports
├── components/       # Shared React components
├── docs/
│   └── tech-stack.md # Tech stack decisions and rationale
├── public/           # Static assets (images, fonts)
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD: lint + type-check + deploy to Vercel
├── .env.example      # Template for environment variables
└── README.md
```

---

## Common commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload (port 3000) |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

---

## Tech stack

See [`docs/tech-stack.md`](docs/tech-stack.md) for the full breakdown and rationale.

**TL;DR:** Next.js 15 · TypeScript · Tailwind CSS · Vercel · GitHub Actions · PostgreSQL (coming)

---

## Deployment

**Live URL:** https://ramkumarpazhanivel.github.io/wiz/

### Automatic (CI/CD)

Every push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`):
1. Lint + type-check
2. Build (Next.js static export → `./out/`)
3. Deploy to GitHub Pages

No secrets or tokens needed — GitHub Actions has built-in permission to deploy Pages.

### Migrating to Vercel (when needed)

When the product requires SSR, edge functions, or API routes at scale:
1. Create a Vercel account and import the GitHub repo
2. Set `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` as GitHub Secrets
3. Update `.github/workflows/deploy.yml` to use `amondnet/vercel-action`
4. Remove `output: 'export'` and `basePath` from `next.config.ts`

---

## Contributing

1. Create a branch: `git checkout -b your-name/short-description`
2. Make changes, run `npm run lint` and `npm run type-check` before pushing
3. Open a PR against `main`
4. PR gets a preview URL automatically — share it in the PR description
5. After approval, merge to `main` → auto-deploys to production

See WIZ-4 for the full PR workflow and definition of done.

---

## Questions?

Ask in Slack `#engineering` or comment on the relevant Paperclip issue.
