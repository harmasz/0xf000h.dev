# AGENTS.md

This repository is a fresh rebuild of [0xf000h.dev](https://0xf000h.dev). Treat it as an intentionally new project, not a direct port of the previous site.

## Operating Principles

- The repository owner makes product, design, content, and branding decisions.
- Agents are implementation partners and should not make major product or design decisions without direction.
- Prefer clear, maintainable code and clean project structure over cleverness.
- Keep changes incremental, reviewable, and tightly scoped to the requested task.
- Avoid unrelated refactors or opportunistic cleanup unless explicitly requested.
- Avoid unnecessary dependencies, abstractions, and early framework commitments.

## Expectations For Changes

- Document assumptions explicitly when requirements are incomplete.
- Choose the simplest approach that preserves future flexibility.
- Make small PR-friendly edits that are easy to reason about and review.
- Preserve existing intent and repository conventions when adding new work.
- If a decision would materially affect product direction, stop and ask.

## Workflow Guidance

- Prefer conventional commits.
- Use branch names such as `docs/*`, `feat/*`, and `chore/*`.
- Assume the project will be deployed on Vercel, but do not lock in implementation details before they are requested.
