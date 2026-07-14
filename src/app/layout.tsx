import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/resume";
import { Providers, ThemeToggle } from "@/components/theme-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteBreadcrumb } from "@/components/site-breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
