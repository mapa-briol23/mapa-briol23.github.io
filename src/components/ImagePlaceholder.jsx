import { ImageIcon } from "lucide-react";

function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-line bg-surface text-muted ${className}`}
    >
      <ImageIcon className="h-6 w-6" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
