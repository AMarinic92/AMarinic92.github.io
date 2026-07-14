"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Image gallery built on the shadcn/embla Carousel: swipe, arrows, keyboard,
// plus dot indicators wired through the carousel API.
export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col gap-3">
      <CarouselRoot setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={src}>
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-background/80" />
        <CarouselNext className="right-2 bg-background/80" />
      </CarouselRoot>

      <div className="flex flex-wrap justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === selected}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "size-2 rounded-full transition-colors",
              i === selected ? "bg-foreground" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
