import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <SectionContainer id="certificates">
      <SectionHeader
        label="Certificates"
        title="Certificates"
        intro="Academic, technical, and professional certificates earned throughout college."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Certificates;
