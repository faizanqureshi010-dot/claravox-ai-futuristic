"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-mist bg-white p-3 shadow-raised transition-transform duration-200 ease-[var(--ease-out-premium)] lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Button href="/get-your-free-audit" variant="primary" className="w-full">
        Book Now
      </Button>
    </div>
  );
}
