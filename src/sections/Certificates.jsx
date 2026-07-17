import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import CertificateCard from "../components/CertificateCard";
import Reveal from "../components/Reveal";
import { Particles } from "../components/Decor";
import { certificates } from "../data/certificates";

const particles = [
  { left: "8%", top: "60%", size: 6, color: "rgba(96, 165, 250, 0.15)", delay: "3s" },
  { left: "88%", top: "80%", size: 4, color: "rgba(147, 197, 253, 0.1)", delay: "11s" },
];

function Certificates() {
  return (
    <SectionContainer id="certificates" tone="clear">
      <Particles positions={particles} />

      <SectionHeader
        label="Certificates"
        title="Certificates"
        intro="Academic, technical, and professional certificates earned throughout college."
        className="mb-16"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.id} delay={(index % 3) * 100}>
            <CertificateCard certificate={certificate} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Certificates;
