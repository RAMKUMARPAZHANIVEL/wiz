# Contributing Guide

> Lightweight engineering process for the Wizards project. Clarity and repeatability, not bureaucracy.

---

## Branching Strategy

We use **trunk-based development** with short-lived feature branches.

- `main` is always deployable. Never commit directly to `main`.
- Branch off `main` for all work: `feat/short-description`, `fix/short-description`, `chore/short-description`.
- Branches live for **≤ 2 days**. If longer, break the work into smaller pieces or use a draft PR.
- Delete branches after merge.

---

## Pull Request Workflow

### Opening a PR

1. Push your branch and open a PR against `main`.
2. Title: imperative, ≤ 72 chars (e.g., `Add user authentication endpoint`).
3. Fill in the PR description:
   - **What**: one sentence on what changed.
   - **Why**: link to the issue (e.g., `Closes WIZ-12`).
   - **Test plan**: what you ran to verify it works.
4. Self-review your own diff before requesting review — catch obvious things yourself.

### Review

- At least **1 approval** required before merge (2 for changes to auth, payments, or data migrations).
- Reviewer SLA: **1 business day** for review turnaround.
- Prefer inline comments for specific feedback. Use summary comments for broad concerns.
- Mark comments as `nit:` if they are non-blocking suggestions.
- Resolve all non-nit threads before merging.

### Merging

- Merge via **squash merge** to keep `main` history clean.
- The PR author merges (not the reviewer), once approved.
- CI must be green. Do not merge with failing checks.
- Delete the branch after merge.

---

## Definition of Done

A ticket is **done** when ALL of the following are true:

| Criterion | What it means |
|-----------|--------------|
| **Code complete** | All acceptance criteria in the ticket are implemented |
| **Tests pass** | Automated tests cover the new behavior; CI is green |
| **Reviewed** | At least 1 approval on the PR |
| **Deployed** | Change is live in production (or staging, if agreed on the ticket) |
| **Observable** | You can verify the change worked — via logs, metrics, or a manual smoke test |
| **Ticket closed** | Issue is marked `done` with a link to the PR |

If a ticket is deployed but not observable (no way to verify), it is **not done** — add logging or a metric first.

---

## Issue Hygiene

### Labels

Use labels consistently so the board stays readable:

| Label | Use when |
|-------|----------|
| `bug` | Something is broken and needs fixing |
| `feature` | New user-facing functionality |
| `chore` | Tech debt, refactors, dependency updates |
| `docs` | Documentation-only changes |
| `question` | Needs discussion or a decision before work can start |
| `blocked` | Cannot proceed — add a comment naming the blocker |
| `urgent` | Needs immediate attention (P0 incidents, security issues) |

### Triage Process

New issues are triaged once per week (or immediately for `urgent` issues):

1. **Assign a label** — every issue must have at least one label.
2. **Set priority** — high / medium / low.
3. **Assign an owner** if it's clear who should do it.
4. **Break it down** — if an issue will take more than 3 days, split it into child issues.

Untracked work (found during coding) should be filed as a new issue, not silently fixed in a PR — keeps scope visible.

---

## Error Alerting

### Minimum Viable Alerting

Until a monitoring service is wired up, all unhandled errors must be:

1. **Logged with context** — include request ID, user ID (if applicable), and the stack trace.
2. **Surfaced in application logs** — logs go to stdout/stderr and are captured by the runtime.

### When a real monitoring integration is set up (target: WIZ-2)

Wire errors to at minimum one of:
- Email alert on error rate spike
- Slack `#alerts` channel for P0/P1 errors
- Sentry / Datadog / equivalent for aggregated error tracking

Error alert criteria:
- Any unhandled exception in production
- Error rate > 1% of requests over a 5-minute window
- Any authentication or payment failure

### On-call

Until the team is large enough for a rotation, the CTO is the de facto on-call. When an alert fires:
1. Acknowledge within 30 minutes during business hours.
2. Post an update to `#incidents` (Slack or equivalent) within 1 hour.
3. File a follow-up issue for the root cause fix within 24 hours.

---

## Commit Message Style

```
<type>(<scope>): <short summary>

[optional body — why, not what]
```

Types: `feat`, `fix`, `chore`, `docs`, `test`, `refactor`

Example: `feat(auth): add JWT refresh token rotation`

---

## First PR Checklist

Before your first merge, verify:
- [ ] Branch created from latest `main`
- [ ] PR description complete (what, why, test plan)
- [ ] Self-reviewed
- [ ] CI passing
- [ ] At least 1 approval
- [ ] Issue linked in PR (`Closes WIZ-XX`)
- [ ] Squash merged and branch deleted
- [ ] Issue marked `done`
