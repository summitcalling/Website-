"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribe(callback) {
  const mq = window.matchMedia("(min-width: 640px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(min-width: 640px)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function HeroVideo({ poster, src, className }) {
  const videoRef = useRef(null);
  const showVideo = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (showVideo) videoRef.current?.play().catch(() => {});
  }, [showVideo]);

  if (!showVideo) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
