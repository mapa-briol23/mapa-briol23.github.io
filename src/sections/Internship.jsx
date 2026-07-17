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
        <article className="iris-frame glass relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl p-8">
          {/* The APMC image is the card: a full-bleed background with a dark
              gradient overlay so the text stays readable at the bottom. */}
          <img
            src={apmcImg}
            alt={internship.company}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to top, rgba(2,6,23,0.9) 40%, rgba(2,6,23,0.5) 70%, rgba(2,6,23,0.3) 100%)",
            }}
          />

          <div className="relative z-[1]">
            <h3 className="text-card text-ink">{internship.company}</h3>
            <p className="mt-4 text-label text-secondary uppercase">
              {internship.startDate} – {internship.endDate}
            </p>
            <p className="mt-4 text-body text-muted">{internship.description}</p>

            <div className="mt-8">
              <TagList label="Tools Used" items={internship.tools} />
            </div>
          </div>
        </article>
      </Reveal>
    </SectionContainer>
  );
}

export default Internship;
