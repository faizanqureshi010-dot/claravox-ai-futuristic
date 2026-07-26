"use client";

import { useEffect, useRef } from "react";

/**
 * Branded custom cursor: a lagging ring + a tight dot, both following the
 * pointer with easing. Buttons and cards get a gentle magnetic pull toward
 * the cursor when nearby. A soft particle trail is intentionally limited to
 * elements marked `data-cursor-particles` (the hero) rather than running
 * site-wide — a particle trail following every scroll and click on a long
 * content page reads as gimmicky rather than premium.
 *
 * Fully inert on touch devices (no pointer to track) and respects
 * prefers-reduced-motion by rendering nothing at all.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let lastParticleTime = 0;
    let rafId = 0;

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot) dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      const target = event.target as HTMLElement;
      const inParticleZone = Boolean(target?.closest("[data-cursor-particles]"));

      if (inParticleZone) {
        const now = performance.now();
        if (now - lastParticleTime > 45) {
          lastParticleTime = now;
          spawnParticle(mouseX, mouseY);
        }
      }
    }

    function spawnParticle(x: number, y: number) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position:fixed; top:0; left:0; width:4px; height:4px; border-radius:50%;
        background:var(--color-orchid, #A78BFA); pointer-events:none; z-index:9998;
        transform:translate(${x}px, ${y}px);
      `;
      document.body.appendChild(particle);
      let opacity = 0.8;
      let scale = 1;
      const fade = () => {
        opacity -= 0.06;
        scale -= 0.04;
        particle.style.opacity = String(opacity);
        particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        if (opacity > 0) {
          requestAnimationFrame(fade);
        } else {
          particle.remove();
        }
      };
      requestAnimationFrame(fade);
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(animateRing);
    }

    function onMouseOver(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest(
        "a, button, [data-magnetic]"
      );
      if (target && ring) {
        ring.style.width = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(75, 29, 107, 0.55)";
      }
    }

    function onMouseOut(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest(
        "a, button, [data-magnetic]"
      );
      if (target && ring) {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(75, 29, 107, 0.35)";
      }
    }

    // Magnetic pull: elements marked data-magnetic drift slightly toward
    // the cursor when it's nearby, and ease back to rest on mouseleave.
    // Implemented via delegation on document (rather than binding to a
    // static NodeList captured at mount) so it keeps working after
    // client-side navigation swaps in new page content.
    let magneticTarget: HTMLElement | null = null;

    function onDocMouseMove(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest<HTMLElement>(
        "[data-magnetic]"
      );
      if (target) {
        magneticTarget = target;
        const rect = target.getBoundingClientRect();
        const relX = event.clientX - rect.left - rect.width / 2;
        const relY = event.clientY - rect.top - rect.height / 2;
        target.style.transform = `translate(${relX * 0.08}px, ${relY * 0.08}px)`;
      } else if (magneticTarget) {
        magneticTarget.style.transform = "";
        magneticTarget = null;
      }
    }
    document.addEventListener("mousemove", onDocMouseMove, { passive: true });

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    document.body.classList.add("cursor-none-desktop");

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousemove", onDocMouseMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border-[1.5px] border-violet/35 transition-[width,height,border-color] duration-200 ease-out md:block"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.7)] md:block"
      />
    </>
  );
}
