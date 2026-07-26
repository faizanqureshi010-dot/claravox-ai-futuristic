"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

/**
 * Root-level error boundary — Next.js renders this for any uncaught
 * error thrown during rendering, in place of its generic default error
 * page. Client component by requirement (Next.js error boundaries must
 * be client components). Kept deliberately simple and on-brand rather
 * than exposing error internals to the visitor.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
        Something Went Wrong
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal">
        This wasn't supposed to happen. Try again, or head back to the
        homepage — nothing on your end caused this.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button onClick={() => reset()} variant="gold">
          Try Again
        </Button>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
