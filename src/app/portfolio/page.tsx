import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { site, kommandosPhotos, coffinYouTubeId } from "@/data/resume";
import { Carousel } from "@/components/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: `Portfolio · ${site.name}`,
  description: "Maker projects: Blender, animatronics, and Warhammer 40K minis.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FieldSet className="min-w-0 gap-4">
      <FieldLegend className="mb-0 text-xl">{title}</FieldLegend>
      {children}
    </FieldSet>
  );
}

export default function Portfolio() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-12 lg:py-20">
      <header className="flex flex-col gap-4">
        <Button
          asChild
          variant="link"
          className="h-auto w-fit justify-start gap-1.5 p-0 text-muted-foreground hover:text-foreground"
        >
          <Link href="/">
            <ArrowLeft className="size-4" /> Back to résumé
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <FieldDescription>
          The side quests: where the software meets the physical.
        </FieldDescription>
      </header>

      <Separator />

      <Section title="Blender">
        <div className="mx-auto w-full max-w-sm">
          <AspectRatio
            ratio={600 / 753}
            className="overflow-hidden rounded-xl border bg-muted"
          >
            <Image
              src="/portfolio/sword.gif"
              alt="Sword modelled and animated in Blender"
              fill
              unoptimized
              sizes="(min-width: 640px) 384px, 100vw"
              className="object-contain"
            />
          </AspectRatio>
        </div>
      </Section>

      <Section title="Halloween Projects: The Coffin">
        <FieldDescription className="leading-relaxed">
          A small animatronic I built for Halloween 2024 on the SAME51 dev
          board, driving pneumatic relays and a piston. A randomly timed,
          dynamically programmed coffin mechanism for an unpredictable, eerie
          effect.
        </FieldDescription>
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-xl border"
        >
          <iframe
            className="size-full"
            src={`https://www.youtube.com/embed/${coffinYouTubeId}`}
            title="The Coffin animatronic"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
        <div className="flex flex-col gap-1.5">
          <Button
            asChild
            variant="link"
            className="h-auto w-fit justify-start p-0"
          >
            <a
              href="https://github.com/AMarinic92/SAME51-Kit/tree/halloween"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: SAME51-Kit (original 2024 build)
            </a>
          </Button>
          <Button
            asChild
            variant="link"
            className="h-auto w-fit justify-start p-0"
          >
            <a
              href="https://github.com/AMarinic92/Coffin-Reborn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: Coffin-Reborn (from-scratch firmware rebuild, ongoing)
            </a>
          </Button>
        </div>
      </Section>

      <Section title="Warhammer 40K: Kommandos">
        <FieldDescription>
          A squad of Orks I painted, model by model.
        </FieldDescription>
        <Carousel images={kommandosPhotos} alt="Painted Ork Kommando mini" />
      </Section>
    </div>
  );
}
