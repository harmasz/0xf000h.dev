# 0xf000h.dev

<p align="center">
  Personal site for Piotr Harmasz.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-111111?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-111111?style=for-the-badge&logo=typescript&logoColor=3178C6">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-111111?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-10-111111?style=for-the-badge&logo=pnpm&logoColor=F69220">
</p>

![Homepage screenshot](./screenshot.png)

## Overview

This repository contains the current production codebase for [0xf000h.dev](https://0xf000h.dev), a personal site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local Development

```bash
pnpm install
pnpm dev
```

Useful project commands:

- `pnpm dev` starts the local development server.
- `pnpm lint` runs Biome lint checks.
- `pnpm format` formats supported files with Biome.
- `pnpm check` validates lint and formatting with Biome.
- `pnpm build` validates the production build.
- `pnpm start` serves the production build locally.

## Notes

- Deployments are intended for Vercel.
- Agent workflow and repository collaboration rules live in [AGENTS.md](./AGENTS.md).
