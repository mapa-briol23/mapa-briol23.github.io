function SectionHeader({ label, title, intro, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`mb-12 flex flex-col ${alignment}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">{label}</p>
      )}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl lg:text-section">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{intro}</p>}
    </header>
  );
}

export default SectionHeader;
