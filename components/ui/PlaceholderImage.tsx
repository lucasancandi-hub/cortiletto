type PlaceholderImageProps = {
  label: string;
  aspect?: string;
  fill?: boolean;
  className?: string;
};

export default function PlaceholderImage({
  label,
  aspect,
  fill = false,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      title={label}
      className={`relative overflow-hidden bg-gradient-to-br from-panel via-ink-soft to-ink ${
        fill ? "absolute inset-0 h-full w-full" : "rounded-2xl border border-line"
      } ${className}`}
      style={!fill && aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(45deg,var(--color-cream)_0,var(--color-cream)_1px,transparent_1px,transparent_12px)]" />

      <span className="absolute left-3 top-3 z-10 rounded-full border border-line bg-ink/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
        Da fotografare
      </span>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden px-8 text-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="shrink-0 text-smoke/60"
          aria-hidden="true"
        >
          <path
            d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="3.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="line-clamp-5 max-w-[36ch] text-[12.5px] italic leading-relaxed text-smoke/85">
          {label}
        </span>
      </div>
    </div>
  );
}
