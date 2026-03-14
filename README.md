# 0xf000h.dev

Source for [0xf000h.dev](https://0xf000h.dev).

This repository contains the current personal site. It replaced the previous version and now serves as the canonical codebase for 0xf000h.dev, with an emphasis on clear structure, tight scope, and long-term maintainability.

## Goals

- Continue improving the site deliberately instead of carrying forward legacy implementation choices.
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
- Keep changes small and reviewable.

## Current Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- ESLint
- pnpm

## Local Development

1. Install dependencies with `pnpm install`.
2. Start the development server with `pnpm dev`.
3. Run `pnpm lint` before opening a PR.
4. Validate the production build with `pnpm build`.

The project is configured for standard Next.js deployment on Vercel without
additional platform-specific files.
