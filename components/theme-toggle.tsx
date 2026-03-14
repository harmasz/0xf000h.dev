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
    <div className="inline-flex items-center gap-2 rounded-full bg-surface/90 p-1 shadow-[var(--shadow-soft)]">
      <div
        aria-label="Theme switcher"
        className="inline-flex items-center gap-1"
        role="group"
      >
        {themeOptions.map((option) => {
          const isActive = option.value === activeTheme;

          return (
            <Button
              key={option.value}
              aria-pressed={isActive}
              className={cn(
                "min-w-16 rounded-full px-3.5",
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
