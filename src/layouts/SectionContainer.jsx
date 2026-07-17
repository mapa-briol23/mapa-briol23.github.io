/* Every tone is semi-opaque: the page-wide video runs behind the whole document, and
   these are what hold it back. The footage is near-black, so these scrims are load
   bearing for contrast, not decoration — none may be fully transparent, and 0.8 is
   the floor at which body copy still clears WCAG AA over the footage's darkest
   frames. Lowering it makes the page unreadable, not just moody. */
const tones = {
  /* The plain band. Lets the video through, and little else. */
  clear: "bg-white/80",
  /* A cool tinted mesh over the same scrim, for sections that need to separate from
     their neighbours. The mesh fades out; the scrim beneath it is what does not. */
  tinted: "bg-surface/80 bg-linear-to-b from-haze/70 via-mist/50 to-transparent",
  /* The heaviest plate, for sections that must stay high-contrast. */
  solid: "bg-white/90",
};

/**
 * The vertical rhythm of the page: every section is full-width, with its content
 * held to 1200px. Sections alternate tone so the page reads as bands of light.
 *
 * `z-1` lifts every section above the page-wide video, which sits at `z-0`.
 */
function SectionContainer({ id, tone = "clear", className = "", children }) {
  return (
    <section
      id={id}
      className={`relative z-1 scroll-mt-20 overflow-hidden py-30 lg:py-40 ${tones[tone]} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default SectionContainer;
