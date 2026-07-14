import { ExternalLink } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";

import {
  site,
  profile,
  education,
  experience,
  projects,
  skills,
  hobbies,
} from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
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
import { Separator } from "@/components/ui/separator";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FieldSet id={id} className="min-w-0 scroll-mt-8 gap-4">
      <FieldLegend className="mb-0 text-xl">{title}</FieldLegend>
      <Separator />
      {children}
    </FieldSet>
  );
}

export default function Home() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-20">
      <aside className="lg:sticky lg:top-20 lg:h-fit">
        <div className="flex flex-col items-start gap-5">
          <Avatar className="size-24 rounded-2xl border">
            <AvatarImage src="/logo.png" alt={site.name} />
            <AvatarFallback className="rounded-2xl text-2xl">AM</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
            <FieldDescription className="mt-1 text-base">
              {site.tagline}
            </FieldDescription>
          </div>
          <FieldDescription>{site.description}</FieldDescription>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex flex-col gap-12">
        <Section id="about" title="About">
          <FieldDescription className="leading-relaxed">
            {profile}
          </FieldDescription>
        </Section>

        <Section id="projects" title="Projects">
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
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View project <ExternalLink />
                      </a>
                    </Button>
                  </ItemFooter>
                )}
              </Item>
            ))}
          </ItemGroup>
        </Section>

        <Section id="experience" title="Experience">
          <ItemGroup className="gap-4">
            {experience.map((e) => (
              <Item key={e.role} variant="outline" className="items-start">
                <ItemContent className="gap-1.5">
                  <ItemHeader>
                    <ItemTitle className="text-base">{e.role}</ItemTitle>
                    <ItemActions>
                      <Badge variant="secondary">{e.period}</Badge>
                    </ItemActions>
                  </ItemHeader>
                  <ItemDescription>{e.org}</ItemDescription>
                  <ItemDescription className="line-clamp-none leading-relaxed">
                    {e.blurb}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </Section>

        <Section id="education" title="Education">
          <ItemGroup className="gap-4">
            {education.map((ed) => (
              <Item key={ed.school} variant="outline" className="items-start">
                <ItemContent className="gap-1.5">
                  <ItemHeader>
                    <ItemTitle className="text-base">{ed.degree}</ItemTitle>
                    <ItemActions>
                      <Badge variant="secondary">{ed.period}</Badge>
                    </ItemActions>
                  </ItemHeader>
                  <ItemDescription className="line-clamp-none">
                    {ed.detail}
                  </ItemDescription>
                  <ItemDescription>{ed.school}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </Section>

        <Section id="skills" title="Skills">
          <FieldGroup className="gap-4">
            {skills.map((group) => (
              <Field key={group.label}>
                <FieldLabel>{group.label}</FieldLabel>
                <FieldContent className="flex-row flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </FieldContent>
              </Field>
            ))}
          </FieldGroup>
        </Section>

        <Section id="hobbies" title="Hobbies">
          <FieldContent className="flex-row flex-wrap gap-2">
            {hobbies.map((h) => (
              <Badge key={h} variant="outline">
                {h}
              </Badge>
            ))}
          </FieldContent>
        </Section>
      </main>
    </div>
  );
}
