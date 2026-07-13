import type { Metadata } from "next";

import { site, profile, experience, education, skills } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Résumé · ${site.name}`,
  description: "Experience, education, and skills.",
};

export default function Resume() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-12 lg:py-20">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
        <p className="text-muted-foreground">{site.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {profile}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ul className="flex flex-col gap-6">
          {experience.map((e) => (
            <li key={e.role} className="flex flex-col border-l-2 border-border pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="font-medium">{e.role}</span>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <span className="text-sm text-muted-foreground">{e.org}</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.blurb}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="flex flex-col gap-3">
          {education.map((ed) => (
            <div key={ed.school} className="flex flex-col border-l-2 border-border pl-4">
              <span className="font-medium">{ed.degree}</span>
              <span className="text-sm">{ed.detail}</span>
              <span className="text-sm text-muted-foreground">
                {ed.school} · {ed.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-col gap-4">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
