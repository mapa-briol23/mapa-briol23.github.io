const arrowPaths = {
  "down-right": "M 4 4 C 4 26, 14 38, 40 42",
  "down-left": "M 44 4 C 44 26, 34 38, 8 42",
  "up-right": "M 4 44 C 4 22, 14 10, 40 6",
};

const arrowTips = {
  "down-right": "M 32 36 L 41 42 L 33 47",
  "down-left": "M 16 36 L 7 42 L 15 47",
  "up-right": "M 32 12 L 41 6 L 33 1",
};

/**
 * A small annotation that points at nearby content — an editorial aside, not a sticker.
 * Hidden below `lg`, where the layout is too narrow for it to land anywhere sensible.
 */
function FloatingNote({ text, direction = "down-right", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden select-none lg:flex lg:flex-col ${
        direction === "down-left" ? "items-end" : "items-start"
      } ${className}`}
    >
      <span className="rounded-full border border-accent/50 bg-white/70 px-3.5 py-1.5 text-label text-primary uppercase backdrop-blur-sm">
        {text}
      </span>
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={arrowPaths[direction] ?? arrowPaths["down-right"]} />
        <path d={arrowTips[direction] ?? arrowTips["down-right"]} />
      </svg>
    </div>
  );
}

export default FloatingNote;
