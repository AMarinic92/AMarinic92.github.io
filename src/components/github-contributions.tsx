"use client";

import { useEffect, useState } from "react";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// The site is a static export, so the calendar is fetched in the browser from
// a public proxy over GitHub's contributions GraphQL API (no token needed).
const API = "https://github-contributions-api.jogruber.de/v4";

type Day = { date: string; count: number; level: number };
type ApiResponse = { total: Record<string, number>; contributions: Day[] };

const LEVELS = [
  "bg-muted",
  "bg-emerald-200 dark:bg-emerald-950",
  "bg-emerald-300 dark:bg-emerald-800",
  "bg-emerald-500 dark:bg-emerald-600",
  "bg-emerald-700 dark:bg-emerald-400",
];

const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

function parseDay(date: string) {
  // Parse as local time — `new Date("2026-08-06")` would be UTC midnight and
  // can land on the previous day west of Greenwich.
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDay(date: string) {
  return parseDay(date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Chunk the flat day list into calendar weeks (columns), padding the first
// week so every column runs Sunday -> Saturday.
function toWeeks(days: Day[]) {
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = Array(parseDay(days[0].date).getDay()).fill(null);
  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);
  return weeks;
}

// Month labels sit above the grid, each spanning the weeks it covers. Runs
// narrower than two columns are left blank so labels don't collide.
function toMonths(weeks: (Day | null)[][]) {
  const months: { key: string; label: string; span: number }[] = [];
  weeks.forEach((week, i) => {
    const first = week.find(Boolean);
    if (!first) return;
    const date = parseDay(first.date);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    const last = months.at(-1);
    if (last?.key === key) last.span++;
    else
      months.push({
        key: `${key}-${i}`,
        label: date.toLocaleDateString(undefined, { month: "short" }),
        span: 1,
      });
  });
  return months;
}

export function GitHubContributions({
  username,
  href,
  className,
}: {
  username: string;
  href?: string;
  className?: string;
}) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API}/${username}?y=last`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(setData)
      .catch((err) => {
        if (!controller.signal.aborted) setFailed(true);
        void err;
      });
    return () => controller.abort();
  }, [username]);

  const days = data?.contributions ?? [];
  const weeks = days.length ? toWeeks(days) : [];
  const total = data ? Object.values(data.total)[0] : undefined;

  return (
    <Card className={cn("gap-4 py-4", className)}>
      <CardHeader className="px-4">
        <CardTitle className="text-base">
          {total === undefined
            ? "Contributions"
            : `${total.toLocaleString()} contributions in the last year`}
        </CardTitle>
        <CardDescription>@{username} on GitHub</CardDescription>
        {href && (
          <CardAction>
            <Button asChild variant="outline" size="sm">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> Profile
              </a>
            </Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent className="px-4">
        {failed ? (
          <CardDescription>
            Couldn&apos;t load the contribution graph right now.
          </CardDescription>
        ) : !weeks.length ? (
          <Skeleton className="h-[120px] w-full" />
        ) : (
          <div className="overflow-x-auto pb-1">
            <div className="flex w-fit gap-1">
              <div className="grid grid-rows-7 gap-[3px] pt-[15px] text-[10px] text-muted-foreground">
                {WEEKDAYS.map((label, i) => (
                  <span key={i} className="h-[11px] leading-[11px]">
                    {label}
                  </span>
                ))}
              </div>
              <div className="grid gap-[3px]">
                <div
                  className="grid gap-[3px] text-[10px] text-muted-foreground"
                  style={{
                    gridTemplateColumns: `repeat(${weeks.length}, 11px)`,
                  }}
                >
                  {toMonths(weeks).map((month) => (
                    <span
                      key={month.key}
                      style={{ gridColumn: `span ${month.span}` }}
                    >
                      {month.span > 1 ? month.label : ""}
                    </span>
                  ))}
                </div>
                <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                  {weeks.flatMap((week, w) =>
                    week.map((day, d) =>
                      day ? (
                        <Tooltip key={day.date}>
                          <TooltipTrigger asChild>
                            <span
                              className={cn(
                                "size-[11px] rounded-[2px] ring-1 ring-border/40 ring-inset",
                                LEVELS[day.level] ?? LEVELS[0],
                              )}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            {day.count === 1
                              ? "1 contribution"
                              : `${day.count} contributions`}{" "}
                            on {formatDay(day.date)}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <span key={`${w}-${d}`} className="size-[11px]" />
                      ),
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-end gap-[3px] text-[10px] text-muted-foreground">
              <span className="mr-1">Less</span>
              {LEVELS.map((level, i) => (
                <span
                  key={i}
                  className={cn(
                    "size-[11px] rounded-[2px] ring-1 ring-border/40 ring-inset",
                    level,
                  )}
                />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
