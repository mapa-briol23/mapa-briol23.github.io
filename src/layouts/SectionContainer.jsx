const tones = {
  white: "bg-white",
  surface: "bg-surface",
};

function SectionContainer({ id, tone = "white", className = "", children }) {
  return (
    <section id={id} className={`${tones[tone]} scroll-mt-20 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default SectionContainer;
