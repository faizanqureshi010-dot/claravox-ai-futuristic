"use client";

import { useState, useId } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
  defaultTabId?: string;
};

/**
 * Standard roving-tab pattern (role="tablist"/"tab"/"tabpanel", arrow-key
 * navigation, one tabpanel rendered at a time). Underline-indicator style
 * matches the header nav's existing active-link underline treatment, per
 * the Design System's Section 5 spec — same visual language, new context.
 */
export function Tabs({ tabs, defaultTabId }: Props) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);
  const idBase = useId();

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % tabs.length
      : (index - 1 + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    setActiveId(nextTab.id);
    document.getElementById(`${idBase}-tab-${nextTab.id}`)?.focus();
  }

  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-1 border-b border-mist">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              id={`${idBase}-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`${idBase}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e, index)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "text-violet" : "text-charcoal hover:text-violet"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gold" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${idBase}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${idBase}-tab-${tab.id}`}
          hidden={tab.id !== activeTab.id}
          className="pt-6"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
