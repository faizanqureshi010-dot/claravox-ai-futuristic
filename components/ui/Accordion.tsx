"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
  /** Which item (by id) starts open. Defaults to none. */
  defaultOpenId?: string;
  /** Allow more than one panel open at once. Defaults to single-open,
   * matching FAQAccordion's existing behavior. */
  allowMultiple?: boolean;
};

/**
 * Generalizes the accessible expand/collapse pattern already proven in
 * FAQAccordion.tsx (proper aria-expanded/aria-controls, unique ids per
 * panel) into a reusable primitive for non-FAQ use — e.g. the Compliance
 * page's trust points, or an ExpandableCard. FAQAccordion itself is left
 * exactly as-is; it's a small, working, low-risk component that doesn't
 * need to be touched to get this benefit elsewhere.
 */
export function Accordion({ items, defaultOpenId, allowMultiple = false }: Props) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  function toggle(id: string) {
    setOpenIds((current: Set<string>) => {
      const next = new Set(allowMultiple ? current : []);
      if (current.has(id)) {
        if (allowMultiple) next.delete(id);
        // single-open mode: toggling an already-open item closes it (next stays empty)
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-mist border-t border-b border-mist">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-ink">{item.title}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-violet" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-violet" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-10 text-sm leading-relaxed text-charcoal"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
