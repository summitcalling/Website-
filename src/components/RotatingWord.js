"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Discover", "Explore", "Experience"];
const DISPLAY_MS = 2200;
const SLIDE_MS = 500;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const timerRef = useRef();

  useEffect(() => {
    function loop() {
      timerRef.current = setTimeout(() => {
        setPhase("out");
        timerRef.current = setTimeout(() => {
          setIndex((i) => (i + 1) % WORDS.length);
          setPhase("in");
          timerRef.current = setTimeout(() => {
            setPhase("idle");
          }, 30);
          loop();
        }, SLIDE_MS);
      }, DISPLAY_MS);
    }
    loop();
    return () => clearTimeout(timerRef.current);
  }, []);

  const translateY = phase === "out" ? "-100%" : phase === "in" ? "100%" : "0%";
  const opacity = phase === "idle" ? 1 : 0;
  const duration = phase === "in" ? "0ms" : `${SLIDE_MS}ms`;

  return (
    <span className="inline-block overflow-hidden align-bottom" style={{ height: "1.15em" }}>
      <span
        className="inline-block text-white ease-in-out"
        style={{
          transform: `translateY(${translateY})`,
          opacity,
          transitionProperty: "transform, opacity",
          transitionDuration: duration,
        }}
      >
        {WORDS[index]}
      </span>
    </span>
  );
}
