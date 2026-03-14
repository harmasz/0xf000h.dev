type PageShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function PageShell({ children }: PageShellProps) {
  return (
    <section className="w-full max-w-3xl rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur sm:p-12">
      {children}
    </section>
  );
}
