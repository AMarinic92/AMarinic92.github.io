import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { site, projects } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export const metadata: Metadata = {
  title: `Projects · ${site.name}`,
  description: "Software and embedded projects.",
};

export default function Projects() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 lg:py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Projects</CardTitle>
          <CardDescription className="text-base">
            Software and embedded work: the code side of things.
          </CardDescription>
        </CardHeader>
      </Card>

      <ItemGroup className="gap-4">
        {projects.map((p) => (
          <Item key={p.title} variant="outline" className="items-start">
            <ItemContent className="gap-1.5">
              <ItemHeader>
                <ItemTitle className="text-base">{p.title}</ItemTitle>
                <ItemActions>
                  <Badge variant="secondary">{p.period}</Badge>
                </ItemActions>
              </ItemHeader>
              <ItemDescription>{p.subtitle}</ItemDescription>
              <ItemDescription className="line-clamp-none leading-relaxed">
                {p.description}
              </ItemDescription>
            </ItemContent>
            {p.href && (
              <ItemFooter>
                <Button asChild variant="secondary" size="sm">
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    View project <ExternalLink />
                  </a>
                </Button>
              </ItemFooter>
            )}
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
