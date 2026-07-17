/**
 * Non-interactive background ornaments: diffused light, thin geometry, drifting dust.
 * Everything here is decorative and hidden from assistive technology.
 */

/** A large blurred sphere of light. Drives the hero atmosphere. */
export function Orb({ className = "", color, size = 320, cycle = 1 }) {
  return (
    <div
      aria-hidden="true"
      className={`orb orb-${cycle} ${className}`}
      style={{ width: size, height: size, background: color }}
    />
  );
}

/** Thin concentric outlines — quiet geometry at a section edge. */
export function ConcentricCircles({ className = "", rings = 3, size = 420 }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size, height: size }}
    >
      {Array.from({ length: rings }, (_, index) => {
        const scale = 1 - index * 0.22;
        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 rounded-full border border-accent/40"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}

/** A single arc, drawn as a quarter of a ring. */
export function Arc({ className = "", size = 240 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <path
        d="M 5 50 A 45 45 0 0 1 50 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A hairline rule that fades out at both ends. */
export function LineAccent({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none h-px bg-linear-to-r from-transparent via-accent/50 to-transparent ${className}`}
    />
  );
}

/**
 * Two motes of dust drifting upward behind a section's content.
 * Kept to two per section to stay inside the page-wide animation budget.
 */
export function Particles({ positions }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {positions.map((particle, index) => (
        <span
          key={index}
          className={`particle ${index % 2 === 0 ? "particle-slow" : "particle-fast"}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/** The shimmering hairline that separates major movements of the page. */
export function ShimmerDivider() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
      <div className="shimmer" />
    </div>
  );
}
