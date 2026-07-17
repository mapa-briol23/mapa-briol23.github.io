import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";
import { Particles } from "../components/Decor";
import { certificates } from "../data/certificates";

const particles = [
  { left: "8%", top: "60%", size: 6, color: "rgba(96, 165, 250, 0.15)", delay: "3s" },
  { left: "88%", top: "80%", size: 4, color: "rgba(147, 197, 253, 0.1)", delay: "11s" },
];

/** Full-width rows instead of a grid: the scan on one side, the metadata on the
    other, the side alternating down the list. A hairline separates each. */
function Certificates() {
  return (
    <SectionContainer id="certificates" tone="mid">
      <Particles positions={particles} />

      <SectionHeader label="Certificates" title="Certificates" className="mb-16" />

      <ul className="flex flex-col divide-y divide-secondary/8">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.id} as="li" delay={(index % 3) * 100}>
            <div
              className={`group flex flex-col gap-6 py-10 first:pt-0 sm:flex-row sm:items-center sm:gap-10 ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <ImagePlaceholder
                label={certificate.imageLabel}
                className="aspect-4/3 w-full shrink-0 rounded-xl sm:w-[200px]"
              />

              <div className={index % 2 === 1 ? "sm:text-right" : ""}>
                <h3 className="text-card text-ink transition duration-300 group-hover:text-secondary">
                  {certificate.title}
                </h3>
                <p className="mt-1.5 text-base text-muted">{certificate.organization}</p>
                <p className="mt-1 text-sm text-dim">{certificate.date}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default Certificates;
