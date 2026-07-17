import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import SeminarCard from "../components/SeminarCard";
import Reveal from "../components/Reveal";
import { ConcentricCircles } from "../components/Decor";
import { seminars } from "../data/seminars";

function Seminars() {
  return (
    <SectionContainer id="seminars" tone="deep">
      <ConcentricCircles size={440} className="-top-32 -left-48 -z-10 hidden lg:block" />

      <SectionHeader
        label="Seminars"
        title="Seminars Attended"
        intro="Industry and academic seminars attended during college."
        className="mb-16"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {seminars.map((seminar, index) => (
          <Reveal key={seminar.id} delay={(index % 3) * 100}>
            <SeminarCard seminar={seminar} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Seminars;
