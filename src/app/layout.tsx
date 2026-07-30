import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/resume";
import { Providers } from "@/components/theme-toggle";
import { SiteShell } from "@/components/site-shell";

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
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
