"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Cursor trail ---------------------------------------------------------- */

const SPARKLES = ["✦", "✧", "★", "✩", "✫", "✬", "✭", "✮", "❉", "✺", "✹", "✸"];

// Each sparkle chases the one in front of it, so the tail lags behind the
// cursor like it's 1996 and this is a 4KB .js include from a webring.
export function CursorTrail() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(box.current?.children ?? []) as HTMLElement[];
    const pts = els.map(() => ({ x: -99, y: -99 }));
    let mx = -99;
    let my = -99;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    let raf = 0;
    const tick = () => {
      let px = mx;
      let py = my;
      pts.forEach((p, i) => {
        p.x += (px - p.x) * 0.34;
        p.y += (py - p.y) * 0.34;
        els[i].style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.x + p.y}deg)`;
        px = p.x;
        py = p.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={box} className="geo-trail" aria-hidden>
      {SPARKLES.map((s, i) => (
        <span key={i} style={{ opacity: 1 - i / SPARKLES.length }}>
          {s}
        </span>
      ))}
    </div>
  );
}

/* Background music ------------------------------------------------------ */

// [midi note, beats]. An 8-beat loop over Am–F–G–C, square waves only,
// because that is what a .mid sounded like on a Sound Blaster.
const MELODY: [number, number][] = [
  [69, 0.5], [72, 0.5], [76, 0.5], [72, 0.5],
  [77, 0.5], [76, 0.5], [72, 0.5], [69, 0.5],
  [67, 0.5], [71, 0.5], [74, 0.5], [71, 0.5],
  [72, 0.5], [76, 0.5], [79, 1],
];
const BASS: [number, number][] = [[45, 2], [41, 2], [43, 2], [48, 2]];
const BEAT = 60 / 126;
const LOOP = 8 * BEAT;

function tone(
  ctx: AudioContext,
  out: AudioNode,
  midi: number,
  at: number,
  dur: number,
  type: OscillatorType,
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = 440 * 2 ** ((midi - 69) / 12);
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(0.8, at + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  osc.connect(gain).connect(out);
  osc.start(at);
  osc.stop(at + dur + 0.02);
}

function scheduleLoop(ctx: AudioContext, out: AudioNode, start: number) {
  for (const [part, type, sustain] of [
    [MELODY, "square", 0.85],
    [BASS, "triangle", 0.6],
  ] as const) {
    let t = start;
    for (const [midi, beats] of part) {
      tone(ctx, out, midi, t, beats * BEAT * sustain, type);
      t += beats * BEAT;
    }
  }
}

export function MidiPlayer() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    ctxRef.current?.close().catch(() => {});
    ctxRef.current = null;
    setPlaying(false);
  }, []);

  const play = useCallback(async () => {
    if (ctxRef.current) return;
    const ctx = new AudioContext();
    ctxRef.current = ctx;
    await ctx.resume().catch(() => {});
    // Stopped or superseded while we were awaiting: take only ours down.
    if (ctxRef.current !== ctx) return void ctx.close().catch(() => {});
    // No user gesture yet (someone opened /1996 directly) — stay silent.
    if (ctx.state !== "running") return stop();

    const master = ctx.createGain();
    master.gain.value = 0.05;
    master.connect(ctx.destination);

    let next = ctx.currentTime + 0.15;
    const pump = () => {
      while (next < ctx.currentTime + 1.5) {
        scheduleLoop(ctx, master, next);
        next += LOOP;
      }
    };
    pump();
    timerRef.current = setInterval(pump, 400);
    setPlaying(true);
  }, [stop]);

  // Autoplays when you konami'd in (the keypress counts as the gesture).
  useEffect(() => {
    // play() is async: it only sets state after awaiting the AudioContext.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    play();
    return stop;
  }, [play, stop]);

  return (
    <button
      type="button"
      className="geo-btn"
      onClick={() => (playing ? stop() : play())}
    >
      {playing ? "🔇 STOP THE MUSIC!!" : "🎵 PLAY MIDI"}
    </button>
  );
}

/* Hit counter ----------------------------------------------------------- */

export function HitCounter() {
  const ref = useRef<HTMLSpanElement>(null);

  // Written straight to the DOM: no state, so no hydration mismatch on a
  // number the server can't know.
  useEffect(() => {
    const hits = Number(localStorage.getItem("geo-hits") ?? 0) + 1;
    localStorage.setItem("geo-hits", String(hits));
    if (ref.current) {
      ref.current.textContent = String(1996 + hits).padStart(7, "0");
    }
  }, []);

  return (
    <span ref={ref} className="geo-counter">
      0001996
    </span>
  );
}
