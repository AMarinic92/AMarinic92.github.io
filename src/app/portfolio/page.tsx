import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { site, kommandosPhotos, coffinYouTubeId } from "@/data/resume";
import { Carousel } from "@/components/carousel";

export const metadata: Metadata = {
  title: `Portfolio — ${site.name}`,
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
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-12 lg:py-20">
      <header className="flex flex-col gap-4">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to résumé
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground">
          The side quests — where the software meets the physical.
        </p>
      </header>

      <Section title="Blender">
        <div className="overflow-hidden rounded-xl border bg-muted">
          <Image
            src="/portfolio/sword.gif"
            alt="Sword modelled and animated in Blender"
            width={600}
            height={753}
            unoptimized
            className="mx-auto h-auto w-full max-w-sm"
          />
        </div>
      </Section>

      <Section title="Halloween Projects — The Coffin">
        <p className="text-sm leading-relaxed text-muted-foreground">
          A small animatronic I built for Halloween 2024 on the SAME51 dev
          board, driving pneumatic relays and a piston. A randomly timed,
          dynamically programmed coffin mechanism for an unpredictable, eerie
          effect.
        </p>
        <div className="relative aspect-video overflow-hidden rounded-xl border">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${coffinYouTubeId}`}
            title="The Coffin animatronic"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <a
            href="https://github.com/AMarinic92/SAME51-Kit/tree/halloween"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-primary underline-offset-4 hover:underline"
          >
            GitHub — SAME51-Kit (original 2024 build)
          </a>
          <a
            href="https://github.com/AMarinic92/Coffin-Reborn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm text-primary underline-offset-4 hover:underline"
          >
            GitHub — Coffin-Reborn (from-scratch firmware rebuild, ongoing)
          </a>
        </div>
      </Section>

      <Section title="Warhammer 40K — Kommandos">
        <p className="text-sm leading-relaxed text-muted-foreground">
          A squad of Orks I painted, model by model.
        </p>
        <Carousel images={kommandosPhotos} alt="Painted Ork Kommando mini" />
      </Section>
    </div>
  );
}
