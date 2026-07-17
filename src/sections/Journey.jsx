import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import { journey } from "../data/journey";

/**
 * A numbered progression. The years are a real sequence, so the step numbers
 * carry information rather than decorate. Steps alternate across a central spine
 * on desktop; below lg they collapse to one column sitting right of a left spine.
 */
function Journey() {
  return (
    <SectionContainer id="journey" tone="tinted">
      <SectionHeader
        label="Journey"
        title="College Journey"
        intro="Academic progression from the first year to the fourth year."
        className="mb-20"
      />

      <ol className="relative flex flex-col gap-10 lg:gap-6">
        {/* The spine the nodes sit on: left-aligned on mobile, centred once steps alternate. */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-linear-to-b from-transparent via-accent/50 to-transparent lg:left-1/2"
        />

        {journey.map((entry, index) => {
          const stepNumber = String(index + 1).padStart(2, "0");
          const isRight = index % 2 === 0;

          return (
            <li key={entry.id} className="relative">
              {/* The node marks the step on the spine at both breakpoints. */}
              <span
                aria-hidden="true"
                className="absolute top-2 left-[5px] z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-haze lg:left-1/2"
              />

              <Reveal delay={index * 80} className="lg:grid lg:grid-cols-2 lg:items-start">
                {/* Holds the empty half of the row so the step lands on its own side. */}
                <div aria-hidden="true" className={`hidden lg:block ${isRight ? "" : "lg:order-2"}`} />

                <div
                  className={`flex items-start gap-5 pl-8 lg:pl-0 ${
                    isRight ? "lg:pl-14" : "lg:order-1 lg:flex-row-reverse lg:pr-14 lg:text-right"
                  }`}
                >
                  <span className="shrink-0 text-4xl font-extrabold tracking-tight text-accent/70 tabular-nums sm:text-5xl">
                    {stepNumber}
                  </span>

                  <Card className="flex-1">
                    <div
                      className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 ${
                        isRight ? "" : "lg:justify-end"
                      }`}
                    >
                      <h3 className="text-card text-ink">{entry.year}</h3>
                      <span className="text-label text-muted uppercase">{entry.period}</span>
                    </div>
                    <p className="mt-3 text-base text-muted">{entry.summary}</p>
                  </Card>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </SectionContainer>
  );
}

export default Journey;
