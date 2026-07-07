"use client";

import type { MouseEvent } from "react";

export default function SkipLink() {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("main-content");
    if (!target) return;
    target.scrollIntoView({ behavior: "auto", block: "start" });
    target.focus({ preventScroll: true });
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="skip-link rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink"
    >
      Vai al contenuto principale
    </a>
  );
}
