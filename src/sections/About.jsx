import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { ConcentricCircles, LineAccent } from "../components/Decor";

/** Text left, an abstract composition of light right. */
function About() {
  return (
    <SectionContainer id="about" tone="mid">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10"
      />

      <div className="grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-24">
        <div>
          <SectionHeader label="About" title="About Me" />

          <div className="mt-10 max-w-xl space-y-6 text-body text-muted">
            <p>
              I am a BS in Information Technology student at Mapúa Malayan Colleges Laguna with a
              specialization in Cybersecurity. Throughout college, I have developed software
              projects ranging from mobile applications and web systems to security assessment
              tools, building a foundation in both front-end and back-end development.
            </p>
            <p>
              My interest in software development and cybersecurity has been shaped by hands-on
              coursework, collaborative projects, and industry seminars. I am currently completing
              my On-the-Job Training and preparing to transition into a career in IT, with a focus
              on building secure and user-centered systems.
            </p>
          </div>

          <LineAccent className="mt-12 max-w-xs" />
        </div>

        <Reveal delay={120} className="relative hidden aspect-square lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full bg-radial from-secondary/20 via-secondary/6 to-transparent blur-3xl"
          />
          {/* A second pool, offset and violet, so the composition blends blue into
              Gojo's purple instead of reading as one flat blue glow. */}
          <div
            aria-hidden="true"
            className="absolute inset-[22%] translate-x-6 translate-y-4 rounded-full bg-radial from-iris/18 via-iris/5 to-transparent blur-3xl"
          />
          <ConcentricCircles size={360} rings={4} className="top-1/2 left-1/2 -translate-1/2" />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-32 w-32 -translate-1/2 rounded-full border border-lilac/20 bg-secondary/3 backdrop-blur-md"
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

export default About;
