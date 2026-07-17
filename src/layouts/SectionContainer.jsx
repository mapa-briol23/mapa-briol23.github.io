const tones = {
  /* Lets the page-wide aurora show through. */
  clear: "bg-transparent",
  /* A cool tinted mesh, for sections that need to separate from their neighbours. */
  tinted: "bg-linear-to-b from-haze/70 via-mist/50 to-transparent",
  /* An opaque plate, for sections that must stay high-contrast. */
  solid: "bg-white/60",
};

/**
 * The vertical rhythm of the page: every section is full-width, with its content
 * held to 1200px. Sections alternate tone so the page reads as bands of light.
 */
function SectionContainer({ id, tone = "clear", className = "", children }) {
  return (
    <section
      id={id}
      className={`relative isolate scroll-mt-20 overflow-hidden py-30 lg:py-40 ${tones[tone]} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default SectionContainer;
