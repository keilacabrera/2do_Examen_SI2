import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const colors = ["#0ea5e9", "#22c55e", "#facc15"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 75,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 75,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null;
};

export default ConfettiEffect;
