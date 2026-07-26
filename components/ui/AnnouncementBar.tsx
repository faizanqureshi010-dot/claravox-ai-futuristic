"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  children: React.ReactNode;
  /** Persists dismissal for the session via sessionStorage, keyed by this
   * id, so re-visiting the same page in the same tab doesn't re-show a
   * bar the visitor already closed. Use a new id if the message changes. */
  id: string;
};

/**
 * Built and ready but not mounted in app/(marketing)/layout.tsx — there is
 * no current announcement to show, and an empty or placeholder bar would
 * itself violate the Brand Constitution's never-claim-what-isn't-true
 * standard. Wire this into the marketing layout when there's a real,
 * specific thing to announce (a launch, a policy change).
 */
export function AnnouncementBar({ children, id }: Props) {
  const storageKey = `claravox-announcement-${id}`;
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(storageKey) === "1";
  });

  if (dismissed) return null;

  return (
    <div className="relative bg-violet text-white">
      <div className="container-page flex items-center justify-center gap-3 py-2.5 text-center text-sm">
        <span>{children}</span>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => {
            sessionStorage.setItem(storageKey, "1");
            setDismissed(true);
          }}
          className="absolute right-4 rounded-md p-1 text-white/70 hover:text-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
