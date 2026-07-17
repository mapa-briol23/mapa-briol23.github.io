/* Every tone is a dark scrim over the page-wide video, which runs behind the whole
   document. The type above is light, so a scrim's job is the reverse of what it was
   on a light page: it holds the footage's *bright* frames back off the type. The
   three depths let neighbouring sections separate — the video reads through all of
   them. Going much below 0.6 lets bokeh drift through the body copy. */
const tones = {
  /* The plain band, and the deepest — for sections dense with body copy. */
  deep: "bg-abyss/70",
  mid: "bg-abyss/65",
  /* The thinnest scrim, where the section is mostly headings and the footage can
     carry more of the band. */
  light: "bg-abyss/60",
};

/**
 * The vertical rhythm of the page: every section is full-width, with its content
 * held to 1200px. Sections alternate tone so the page reads as bands of light.
 *
 * `z-1` lifts every section above the page-wide video, which sits at `z-0`.
 */
function SectionContainer({ id, tone = "deep", className = "", children }) {
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
