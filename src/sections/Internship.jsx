import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import TagList from "../components/TagList";
import { internship } from "../data/internship";
import apmcImg from "../assets/images/internship/apmc.jpg";

function Internship() {
  return (
    <SectionContainer id="internship" tone="deep">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader label="Internship" title="On-the-Job Training" className="mb-8" />

      <Reveal delay={80}>
        {/* The one animated gradient frame on the page: a blue-to-violet hairline
            panning around the card edge, turning a plain text block into the
            section's signature. */}
        <article className="iris-frame glass relative rounded-2xl p-7 sm:p-9">
          {/* Hero banner: APMC image with dark gradient overlay for readability
              against the deep theme, capped by a blue-violet hairline. */}
          <div className="relative mb-7 overflow-hidden rounded-2xl">
            <img
              src={apmcImg}
              alt={internship.company}
              className="h-[200px] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(rgba(2,6,23,0.3), rgba(2,6,23,0.5))",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              }}
            />
          </div>

          <h3 className="text-card text-ink">{internship.company}</h3>
          <p className="mt-4 text-label text-secondary uppercase">
            {internship.startDate} – {internship.endDate}
          </p>
          <p className="mt-4 max-w-2xl text-body text-muted">{internship.description}</p>

          <div className="mt-8">
            <TagList label="Tools Used" items={internship.tools} />
          </div>
        </article>
      </Reveal>
    </SectionContainer>
  );
}

export default Internship;
