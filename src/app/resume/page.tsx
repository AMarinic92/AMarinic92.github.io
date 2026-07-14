import type { Metadata } from "next";

import { site, profile, experience, education, skills } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export const metadata: Metadata = {
  title: `Résumé · ${site.name}`,
  description: "Experience, education, and skills.",
};

export default function Resume() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-12 lg:py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{site.name}</CardTitle>
          <CardDescription className="text-base">
            {site.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldDescription className="leading-relaxed">
            {profile}
          </FieldDescription>
        </CardContent>
      </Card>

      <FieldSet className="min-w-0 gap-4">
        <FieldLegend className="mb-0 text-xl">Experience</FieldLegend>
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
      </FieldSet>

      <FieldSet className="min-w-0 gap-4">
        <FieldLegend className="mb-0 text-xl">Education</FieldLegend>
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
      </FieldSet>

      <FieldSet className="min-w-0 gap-4">
        <FieldLegend className="mb-0 text-xl">Skills</FieldLegend>
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
      </FieldSet>
    </div>
  );
}
