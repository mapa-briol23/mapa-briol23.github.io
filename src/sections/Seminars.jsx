import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import SeminarCard from "../components/SeminarCard";
import { seminars } from "../data/seminars";

function Seminars() {
  return (
    <SectionContainer id="seminars" tone="surface">
      <SectionHeader
        label="Seminars"
        title="Seminars Attended"
        intro="Industry and academic seminars attended during college."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {seminars.map((seminar) => (
          <SeminarCard key={seminar.id} seminar={seminar} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Seminars;
