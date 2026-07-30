"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteBreadcrumb } from "@/components/site-breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const KONAMI = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
  "enter",
];

// The layout's client shell: normal chrome everywhere, plus the konami
// listener. /1996 renders bare — it brings its own (deeply cursed) chrome.
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === KONAMI[i]) i++;
      else i = key === KONAMI[0] ? 1 : 0;
      if (i === KONAMI.length) {
        i = 0;
        router.push("/1996");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  if (pathname.startsWith("/1996")) return <>{children}</>;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-40 flex h-12 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <SiteBreadcrumb />
        </header>
        <ThemeToggle />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
