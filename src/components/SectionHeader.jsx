import Reveal from "./Reveal";

/**
 * Small tracked label, oversized title, optional intro — the opening of every section.
 */
function SectionHeader({ label, title, intro, align = "left", className = "" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal as="header" className={`flex flex-col ${alignment} ${className}`}>
      {label && (
        <p className="mb-5 flex items-center gap-3 text-label text-primary uppercase">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {label}
        </p>
      )}

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-section">
        {title}
      </h2>

      {intro && (
        <p className={`mt-6 max-w-2xl text-body text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeader;
