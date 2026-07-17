import Reveal from "./Reveal";

/* Alignment drives three things at once: the flex axis, the text, and the
   direction the header animates in from — a right-set header resolves toward
   its own edge, a centred one simply lifts. */
const alignments = {
  left: { box: "items-start text-left", from: "left" },
  right: { box: "items-end text-right", from: "right" },
  center: { box: "items-center text-center", from: "up" },
};

/**
 * Small tracked label above an oversized title — the opening of every section.
 */
function SectionHeader({ label, title, align = "left", className = "" }) {
  const { box, from } = alignments[align] ?? alignments.left;

  return (
    <Reveal as="header" from={from} className={`flex flex-col ${box} ${className}`}>
      {label && (
        <p className="mb-5 flex items-center gap-3 text-label text-secondary uppercase">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-linear-to-r from-secondary to-lilac"
          />
          {label}
        </p>
      )}

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-section">
        {title}
      </h2>
    </Reveal>
  );
}

export default SectionHeader;
