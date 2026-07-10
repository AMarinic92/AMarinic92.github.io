"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// System-following theme, with a manual override. Class strategy matches the
// existing `.dark` variant in globals.css; next-themes ships the no-flash
// script needed for the static export.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        "fixed right-4 top-4 z-50 bg-background/80 backdrop-blur",
      )}
    >
      {/* Render nothing until mounted to avoid a hydration mismatch. */}
      {mounted && (isDark ? <Sun /> : <Moon />)}
    </button>
  );
}
