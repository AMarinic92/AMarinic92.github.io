"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Image carousel (embla). Swipe, arrows, and dot indicators.
export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <div className="overflow-hidden rounded-xl border" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div className="relative min-w-0 flex-[0_0_100%]" key={src}>
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={src}
                    alt={`${alt} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={() => embla?.scrollPrev()}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "absolute left-2 top-1/2 -translate-y-1/2 bg-background/80",
          )}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => embla?.scrollNext()}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "absolute right-2 top-1/2 -translate-y-1/2 bg-background/80",
          )}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === selected}
            onClick={() => embla?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === selected ? "bg-foreground" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
