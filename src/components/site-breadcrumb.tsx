"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Section labels keyed by the first path segment.
const labels: Record<string, string> = {
  projects: "Projects",
  resume: "Résumé",
  portfolio: "Portfolio",
};

export function SiteBreadcrumb() {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0];
  const current = segment ? labels[segment] : undefined;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {current ? (
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Home</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {current && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{current}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
