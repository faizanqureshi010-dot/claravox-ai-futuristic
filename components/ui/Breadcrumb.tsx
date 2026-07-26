import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/**
 * Visual counterpart to lib/schema.ts's breadcrumbSchema(), which every
 * subpage already feeds into JSON-LD but never renders on-screen. Pass
 * the same items array to both for a single source of truth:
 *   <JsonLd data={breadcrumbSchema(items)} />
 *   <Breadcrumb items={items} />
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-violet">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-violet">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
