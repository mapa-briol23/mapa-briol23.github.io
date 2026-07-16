import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";

function About() {
  return (
    <SectionContainer id="about" tone="surface">
      <SectionHeader label="About" title="About Me" />

      <div className="max-w-3xl space-y-4 text-base text-muted sm:text-lg">
        <p>
          Placeholder introduction describing academic background at Mapúa Malayan Colleges Laguna and
          the areas of information technology that hold the most interest.
        </p>
        <p>
          Placeholder statement about software development experience gained through coursework and
          projects, followed by career aspirations after graduation.
        </p>
      </div>
    </SectionContainer>
  );
}

export default About;
