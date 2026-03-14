"use client";

import { useEffect, useRef } from "react";

function getRestingPosition() {
  return {
    x: window.innerWidth * 0.62,
    y: window.innerHeight * 0.24,
  };
}

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    const pointerMedia = window.matchMedia("(pointer: fine)");
    const reducedMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frameId = 0;
    let removeListeners: (() => void) | null = null;

    const stop = () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      removeListeners?.();
      removeListeners = null;
      glow.style.removeProperty("opacity");
      glow.style.removeProperty("transform");
    };

    const start = () => {
      if (!pointerMedia.matches || reducedMotionMedia.matches || removeListeners) {
        return;
      }

      const restingPosition = getRestingPosition();
      let targetX = restingPosition.x;
      let targetY = restingPosition.y;
      let currentX = restingPosition.x;
      let currentY = restingPosition.y;

      const render = () => {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        glow.style.opacity = "1";
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;

        frameId = window.requestAnimationFrame(render);
      };

      const handlePointerMove = (event: PointerEvent) => {
        if (
          event.pointerType &&
          event.pointerType !== "mouse" &&
          event.pointerType !== "pen"
        ) {
          return;
        }

        targetX = event.clientX;
        targetY = event.clientY;
      };

      const handleReset = () => {
        const nextRestingPosition = getRestingPosition();

        targetX = nextRestingPosition.x;
        targetY = nextRestingPosition.y;
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("blur", handleReset);
      window.addEventListener("resize", handleReset, { passive: true });

      removeListeners = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("blur", handleReset);
        window.removeEventListener("resize", handleReset);
      };

      render();
    };

    const sync = () => {
      stop();

      if (pointerMedia.matches && !reducedMotionMedia.matches) {
        start();
      }
    };

    sync();
    pointerMedia.addEventListener("change", sync);
    reducedMotionMedia.addEventListener("change", sync);

    return () => {
      stop();
      pointerMedia.removeEventListener("change", sync);
      reducedMotionMedia.removeEventListener("change", sync);
    };
  }, []);

  return <div aria-hidden="true" className="cursor-glow" ref={glowRef} />;
}
