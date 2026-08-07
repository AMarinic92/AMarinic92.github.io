"use client";

import { badgeVariants } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Buttons fire the real keydown, so the konami listener in site-shell.tsx
// stays the only copy of the sequence.
const press = (key: string) =>
  window.dispatchEvent(new KeyboardEvent("keydown", { key }));

function Btn({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <g onClick={() => press(k)} className="cursor-pointer active:opacity-70">
      {children}
    </g>
  );
}

// The SVG is a pointer-only affordance: the keys themselves work anywhere
// on the site, so it stays out of the a11y tree.
function Controller() {
  return (
    <svg viewBox="0 0 420 200" className="w-full select-none" aria-hidden>
      <rect
        x={40}
        y={14}
        width={90}
        height={34}
        rx={16}
        className="fill-snes-shell-deep"
      />
      <rect
        x={290}
        y={14}
        width={90}
        height={34}
        rx={16}
        className="fill-snes-shell-deep"
      />

      {/* One path, not three rects: the top is a single flat edge shared by
          the lobes and the waist, so the whole taper happens underneath.
          Tight radius (34) on the top corners, big sweep (60) on the bottom. */}
      <path
        className="fill-snes-shell"
        d="M 42 30 H 378 A 34 34 0 0 1 412 64 V 126 A 60 60 0 0 1 352 186
           H 312 C 284 186 280 156 262 156 H 158 C 140 156 136 186 108 186
           H 68 A 60 60 0 0 1 8 126 V 64 A 34 34 0 0 1 42 30 Z"
      />

      {/* Recessed pads the d-pad and face buttons sit in. */}
      <g className="fill-snes-shell-deep">
        <circle cx={93} cy={109} r={44} />
        <ellipse
          cx={327}
          cy={109}
          rx={62}
          ry={44}
          transform="rotate(-25 327 109)"
        />
      </g>

      <text
        x={210}
        y={72}
        textAnchor="middle"
        fontSize={9}
        letterSpacing={1.5}
        className="fill-snes-print"
      >
        SUPER NINTENDO
      </text>

      {/* Each arm is its own button rather than a transparent zone over one
          cross — Btn's active style needs visible geometry to act on. They
          overlap the static centre square, so the seams don't show. */}
      <g className="fill-snes-dpad">
        <rect x={81} y={97} width={24} height={24} />
        <Btn k="ArrowUp">
          <rect x={81} y={78} width={24} height={25} rx={6} />
        </Btn>
        <Btn k="ArrowDown">
          <rect x={81} y={115} width={24} height={25} rx={6} />
        </Btn>
        <Btn k="ArrowLeft">
          <rect x={62} y={97} width={25} height={24} rx={6} />
        </Btn>
        <Btn k="ArrowRight">
          <rect x={99} y={97} width={25} height={24} rx={6} />
        </Btn>
      </g>

      <g
        textAnchor="middle"
        fontSize={15}
        fontWeight="bold"
        className="fill-snes-btn-print"
      >
        <Btn k="x">
          <circle cx={327} cy={77} r={18} className="fill-snes-x" />
          <text x={327} y={82}>
            X
          </text>
        </Btn>
        <Btn k="y">
          <circle cx={295} cy={109} r={18} className="fill-snes-y" />
          <text x={295} y={114}>
            Y
          </text>
        </Btn>
        <Btn k="a">
          <circle cx={359} cy={109} r={18} className="fill-snes-a" />
          <text x={359} y={114}>
            A
          </text>
        </Btn>
        <Btn k="b">
          <circle cx={327} cy={141} r={18} className="fill-snes-b" />
          <text x={327} y={146}>
            B
          </text>
        </Btn>
      </g>

      <g className="fill-snes-pill">
        <rect
          x={150}
          y={106}
          width={44}
          height={14}
          rx={7}
          transform="rotate(-22 172 113)"
        />
        <Btn k="Enter">
          <rect
            x={206}
            y={106}
            width={44}
            height={14}
            rx={7}
            transform="rotate(-22 228 113)"
          />
        </Btn>
      </g>
      <g
        textAnchor="middle"
        fontSize={8}
        letterSpacing={0.5}
        className="fill-snes-print"
      >
        <text x={168} y={140}>
          SELECT
        </text>
        <text x={224} y={140}>
          START
        </text>
      </g>
    </svg>
  );
}

export function SnesHint({ label }: { label: string }) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          badgeVariants({ variant: "outline" }),
          "cursor-pointer hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {label}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Super Nintendo controller</DialogTitle>
        <Controller />
        <DialogDescription className="text-center text-xs">
          Try the old code.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
