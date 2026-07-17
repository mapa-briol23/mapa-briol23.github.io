import Card from "./Card";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Certificate scan filling the top of the card, metadata beneath.
 */
function CertificateCard({ certificate }) {
  return (
    <Card as="article" padded={false} className="group flex h-full flex-col overflow-hidden">
      <ImagePlaceholder
        label={certificate.imageLabel}
        className="aspect-4/3 w-full border-x-0 border-t-0 border-b border-white/60"
      />

      <div className="flex flex-1 flex-col gap-1.5 p-6 sm:p-7">
        <h3 className="text-card text-ink transition duration-300 group-hover:text-primary">
          {certificate.title}
        </h3>
        <p className="text-base text-muted">{certificate.organization}</p>
        <p className="mt-auto pt-2 text-sm text-muted/80">{certificate.date}</p>
      </div>
    </Card>
  );
}

export default CertificateCard;
