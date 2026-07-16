import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";
import { journey } from "../data/journey";

function Journey() {
  return (
    <SectionContainer id="journey" tone="surface">
      <SectionHeader
        label="Journey"
        title="College Journey"
        intro="Academic progression from the first year to the fourth year, highlighting milestones rather than every event."
      />

      <ol className="relative flex flex-col gap-8 before:absolute before:top-0 before:bottom-0 before:left-2 before:w-px before:bg-line sm:before:left-3">
        {journey.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </ol>
    </SectionContainer>
  );
}

export default Journey;
