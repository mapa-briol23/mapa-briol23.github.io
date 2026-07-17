import { useEffect, useRef, useState } from "react";

/**
 * A looping video behind content, optionally tinted by an overlay so type stays readable.
 *
 * The video is decoration, so it only loads where it earns its bandwidth: never below
 * 768px. It plays only while on screen. If the file is missing or the codec is refused
 * it removes itself, leaving whatever gradient the section already paints underneath.
 *
 * `fallback` paints beneath the video, standing in for it wherever it does not load.
 * A section whose overlay assumes dark footage needs one — without it the overlay
 * composites over the bare page instead, and the band turns muddy.
 *
 * `overlay` is optional: the page-wide video carries no scrim of its own, because the
 * sections scrolling over it are each semi-opaque and do that work individually.
 *
 * `className` places the layer. It defaults to sitting behind one section; the page-wide
 * background passes `fixed inset-0 z-0` instead, so it holds still under the scroll.
 */
function AmbientVideo({
  src,
  overlay,
  fallback,
  preload = "none",
  className = "absolute inset-0 -z-10",
}) {
  const videoRef = useRef(null);
  const [isWanted, setIsWanted] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  // Deciding before render — rather than hiding with a class — is what keeps the file
  // from being requested at all on the screens that will never show it.
  useEffect(() => {
    const isWide = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsWanted(isWide.matches);

    sync();
    isWide.addEventListener("change", sync);
    return () => isWide.removeEventListener("change", sync);
  }, []);

  const isPlayable = isWanted && !hasFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Playback can still be refused (low power mode, for one). It is decoration —
          // the overlay alone is a complete background, so a refusal needs no handling.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isPlayable]);

  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      {fallback && <div className="absolute inset-0" style={{ background: fallback }} />}
      {isPlayable && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload={preload}
          onError={() => setHasFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {overlay && <div className="absolute inset-0" style={{ background: overlay }} />}
    </div>
  );
}

export default AmbientVideo;
