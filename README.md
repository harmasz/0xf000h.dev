# 0xf000h-v2

Fresh rebuild of [0xf000h.dev](https://0xf000h.dev).

This repository is the clean-slate v2 of the personal site. It replaces an older Next.js site previously deployed on Vercel, but it is intentionally not a direct port. The goal is to rebuild the site from first principles, with clearer structure, tighter scope, and better long-term maintainability.

## Goals

- Rebuild the site deliberately instead of copying the previous implementation.
- Keep product, design, and branding decisions explicit and intentional.
- Optimize for maintainable code, simple architecture, and small reviewable changes.
- Prepare the project for deployment on Vercel without locking in the final stack too early.

## Collaboration

- The repository owner is the designer and product owner.
- Implementation work should follow the owner's direction on product, design, content, and branding.
- Changes should be incremental, easy to review, and clearly scoped to the requested task.
- Assumptions and tradeoffs should be documented explicitly when they affect implementation.

## Workflow

- Start small and build the project in thin vertical slices.
- Prefer discussion and documentation before introducing framework or architecture commitments.
- Keep pull requests focused on one concern at a time.
- Avoid unrelated refactors while the project foundation is still being established.

## Git Conventions

- Use conventional commits.
- Use descriptive branch names such as `docs/*`, `feat/*`, and `chore/*`.
- Keep the first PR small and reviewable.
