import { PageShell } from "@/components/page-shell";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <PageShell>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          0xf000h.dev
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Fresh rebuild in progress.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
          Initial scaffold for the new personal site. Content, structure, and
          visual direction will be added incrementally.
        </p>
      </PageShell>
    </main>
  );
}
