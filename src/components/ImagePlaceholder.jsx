import { ImageIcon } from "lucide-react";

/**
 * Stands in for a screenshot or scan until the real asset is dropped in.
 * See docs/CONTENT_CHECKLIST.md for the paths and the wiring steps.
 */
function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex flex-col items-center justify-center gap-2.5 border border-white/60 bg-linear-to-br from-haze via-mist to-white text-muted ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-accent" aria-hidden="true" />
      <span className="px-4 text-center text-xs font-medium tracking-wide">{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
