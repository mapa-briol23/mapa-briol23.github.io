import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import TagList from "../components/TagList";
import { internship } from "../data/internship";

function Internship() {
  return (
    <SectionContainer id="internship" tone="deep">
      <SectionHeader label="Internship" title="On-the-Job Training" className="mb-8" />

      <Reveal delay={80}>
        <h3 className="text-card text-ink">{internship.company}</h3>
        <p className="mt-4 text-label text-secondary uppercase">
          {internship.startDate} – {internship.endDate}
        </p>
        <p className="mt-4 max-w-2xl text-body text-muted">{internship.description}</p>

        <div className="mt-8">
          <TagList label="Tools Used" items={internship.tools} />
        </div>
      </Reveal>
    </SectionContainer>
  );
}

export default Internship;
