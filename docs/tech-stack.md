# WIZ Tech Stack

**Decision date:** 2026-06-24  
**Owner:** CTO

---

## Choices

| Layer | Choice | Why |
|-------|--------|-----|
| Language | TypeScript | Catches bugs at compile time; the whole team speaks one language across frontend and backend |
| Framework | Next.js 15 (App Router) | SSR + API routes in one repo, edge-ready, best-in-class DX, huge ecosystem |
| Styling | Tailwind CSS v4 | Utility-first, no naming overhead, pairs perfectly with component libraries |
| Hosting | Vercel | Zero-config deploys for Next.js; free tier; automatic preview URLs per PR; global edge network |
| CI/CD | GitHub Actions | Standard; runs lint, type-check, and build on every PR; deploys to Vercel on merge to `main` |
| Database | PostgreSQL (via Prisma) | Will be added when the first data model is defined (WIZ-3); provisioned on Railway or Supabase |
| Auth | NextAuth.js (when needed) | Drop-in auth for Next.js; supports OAuth and email magic links |
| Package manager | npm | Built in, no extra tool to install |
| Runtime | Node.js 22 LTS | Even-numbered LTS; matches Vercel's runtime |

---

## Key decisions and trade-offs

### Why Next.js instead of a separate frontend + backend?

At this stage one person owns all the code. Splitting into two repos adds overhead (two deploy pipelines, CORS config, API versioning) before there's any product to justify the separation. Next.js API routes are the backend until the product requires dedicated services.

### Why Vercel instead of AWS/GCP?

A startup's first deploy should take 5 minutes, not 5 days. Vercel gives us HTTPS, CDN, preview URLs, and zero-downtime deploys out of the box. We revisit when we hit Vercel's limits or need features like GPU workloads or custom networking.

### Why PostgreSQL?

It's the safe default for relational data: strong consistency, rich querying, excellent Prisma support, and widely available on managed platforms. We switch to a different data store only if a specific product requirement demands it.

---

## What is NOT in scope yet

- Message queues (add when async jobs are needed)
- Search (add when full-text search is needed)
- Caching layer (Redis etc. — add when performance profiling shows a need)
- Mobile apps (React Native when/if mobile becomes a priority)
- Microservices (add when individual services have distinct scaling or ownership requirements)

---

## Updating this document

Any change to the choices above requires a PR with a brief rationale added to the trade-offs section. This doc is the canonical source of truth for the tech stack.
