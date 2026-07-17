import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { journey } from "../data/journey";

/** Compact vertical timeline: one scannable row per academic year. */
function Journey() {
  return (
    <SectionContainer id="journey" tone="tinted">
      <SectionHeader
        label="Journey"
        title="College Journey"
        intro="Academic progression from the first year to the fourth year, highlighting milestones rather than every event."
        className="mb-16"
      />

      <ol className="flex flex-col">
        {journey.map((entry, index) => (
          <li key={entry.id}>
            <Reveal delay={index * 80} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                {index < journey.length - 1 && (
                  <span aria-hidden="true" className="w-px flex-1 bg-accent/25" />
                )}
              </div>

              <div className="pb-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{entry.year}</h3>
                  <span className="text-label text-muted uppercase">{entry.period}</span>
                </div>
                <p className="mt-2 max-w-2xl text-body text-muted">{entry.summary}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}

export default Journey;
