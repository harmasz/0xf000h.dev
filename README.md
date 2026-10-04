# harmasz.dev

<p align="center">
  Personal site for Piotr Harmasz.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-111111?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-111111?style=for-the-badge&logo=typescript&logoColor=3178C6">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-111111?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-11-111111?style=for-the-badge&logo=pnpm&logoColor=F69220">
</p>

![Homepage screenshot](./screenshot.png)

## Overview

This repository contains the current production codebase for [harmasz.dev](https://harmasz.dev), a personal site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local Development

Use Node.js 24 (declared in `.node-version`) and pnpm 11.10.0 (declared in `package.json`). CI reads the same Node version file, and Vercel uses the `24.x` package engine.

```bash
pnpm install
pnpm dev
```

Useful project commands:

- `pnpm dev` starts the local development server.
- `pnpm lint` runs Biome lint checks.
- `pnpm format` formats supported files with Biome.
- `pnpm check` validates lint and formatting with Biome.
- `pnpm typecheck` validates TypeScript types.
- `pnpm build` validates the production build.
- `pnpm verify` runs all repository checks in sequence.
- `pnpm start` serves the production build locally.

## Notes

- Deployments are intended for Vercel.
- The legacy `0xf000h.dev` host permanently redirects to `harmasz.dev` through `next.config.ts`, preserving paths and query strings.
- CI runs on pull requests, pushes to `main`, and weekly. It checks dependencies for high/critical advisories alongside the code checks.
- Dependabot checks npm dependencies and GitHub Actions weekly. Automatic security-update PRs and the required `Verify` check on `main` are managed in GitHub repository settings.
- Agent workflow and repository collaboration rules live in [AGENTS.md](./AGENTS.md).
