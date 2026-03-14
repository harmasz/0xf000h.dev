"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themeOptions = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
] as const;

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const activeTheme = theme ?? "system";

  return (
    <div className="inline-flex items-center gap-3 rounded-[calc(var(--radius-lg)-0.375rem)] border border-border/80 bg-surface px-2 py-2 shadow-[var(--shadow-soft)] backdrop-blur-sm">
      <div className="pl-1">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
          Theme
        </p>
        <p className="text-xs text-muted-foreground/80">
          {activeTheme === "system" ? "Following system" : activeTheme}
        </p>
      </div>

      <div
        aria-label="Theme switcher"
        className="inline-flex items-center gap-1 rounded-[calc(var(--radius-md)-0.125rem)] border border-border/70 bg-background/80 p-1"
        role="group"
      >
        {themeOptions.map((option) => {
          const isActive = option.value === activeTheme;

          return (
            <Button
              key={option.value}
              aria-pressed={isActive}
              className={cn(
                "min-w-16 rounded-[calc(var(--radius-sm)-0.125rem)] px-3",
                isActive &&
                  "border-transparent bg-foreground text-background hover:bg-foreground",
              )}
              onClick={() => setTheme(option.value)}
              size="sm"
              type="button"
              variant={isActive ? "default" : "ghost"}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
