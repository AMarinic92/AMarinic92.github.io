import Image from "next/image";
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
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <section id={id} className="scroll-mt-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-20">
      <aside className="lg:sticky lg:top-20 lg:h-fit">
        <div className="flex flex-col items-start gap-5">
          <Image
            src="/logo.png"
            alt={site.name}
            width={96}
            height={96}
            className="rounded-2xl border"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
            <p className="mt-1 text-muted-foreground">{site.tagline}</p>
          </div>
          <p className="text-sm text-muted-foreground">{site.description}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </aside>

      <main className="flex flex-col gap-12">
        <Section id="about" title="About">
          <p className="leading-relaxed text-muted-foreground">{profile}</p>
        </Section>

        <Section id="projects" title="Projects">
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
        </Section>

        <Section id="experience" title="Experience">
          <ul className="flex flex-col gap-3">
            {experience.map((e) => (
              <li
                key={e.role}
                className="flex flex-col border-l-2 border-border pl-4"
              >
                <span className="font-medium">{e.role}</span>
                <span className="text-sm text-muted-foreground">{e.org}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <div className="flex flex-col gap-3">
            {education.map((ed) => (
              <div
                key={ed.school}
                className="flex flex-col border-l-2 border-border pl-4"
              >
                <span className="font-medium">{ed.degree}</span>
                <span className="text-sm">{ed.detail}</span>
                <span className="text-sm text-muted-foreground">
                  {ed.school} · {ed.period}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Soft
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="hobbies" title="Hobbies">
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <Badge key={h} variant="outline">
                {h}
              </Badge>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
