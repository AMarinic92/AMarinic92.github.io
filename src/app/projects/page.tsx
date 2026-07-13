import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { site, projects } from "@/data/resume";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Software and embedded projects.",
};

export default function Projects() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 lg:py-20">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Software and embedded work — the code side of things.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {p.subtitle}
                  </CardDescription>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {p.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "w-fit",
                )}
              >
                View project <ExternalLink />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
