import Card from "./Card";
import ImagePlaceholder from "./ImagePlaceholder";

function CertificateCard({ certificate }) {
  return (
    <Card as="article" className="flex flex-col gap-4">
      <ImagePlaceholder label={certificate.imageLabel} className="aspect-4/3 w-full" />

      <div className="flex flex-col gap-1">
        <h3 className="text-card text-ink">{certificate.title}</h3>
        <p className="text-base text-muted">{certificate.organization}</p>
        <p className="text-sm text-muted">{certificate.date}</p>
      </div>
    </Card>
  );
}

export default CertificateCard;
