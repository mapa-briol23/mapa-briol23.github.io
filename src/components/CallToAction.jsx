import AmbientVideo from "./AmbientVideo";
import Button from "./Button";
import Reveal from "./Reveal";

/* A dark tone carries its own scrim: the accent footage is near-black, so the blue
   wash the light sections use would leave ink type sitting on top of it unreadable.
   The scrim keeps white type clear across the whole loop, bright frames included. */
const tones = {
  light: {
    overlay: "rgba(37,99,235,0.05)",
    fallback: undefined,
    /* Semi-opaque like the sections either side, so the page-wide video reads through
       the pause without taking the ink type with it. */
    surface: "bg-white/80",
    heading: "text-ink",
    orb: "from-accent/30 via-secondary/10",
  },
  dark: {
    overlay: "linear-gradient(to bottom, rgba(15,23,42,0.62), rgba(23,37,84,0.68))",
    /* Stands in for the footage below 768px, so the scrim above lands on dark rather
       than on the bare page — which is what turns the band muddy instead of deep. */
    fallback: "linear-gradient(to bottom right, #0f172a, #172554 60%, #1e3a8a)",
    /* Opaque: this band runs its own footage, and the page-wide video must not show
       through behind it. Two loops at once is noise, not accent. */
    surface: "bg-ink",
    heading: "text-white",
    orb: "from-white/10 via-secondary/10",
  },
};

/**
 * A breath between sections: one line of invitation, one action, lit from behind.
 * Sits outside SectionContainer so it reads as a pause in the rhythm, not a section.
 *
 * Passing `videoSrc` turns the block into a full-width accent band; the orb stays as
 * the background for anyone the video does not load for, and the video plays over it.
 * `tone` is separate from `videoSrc` because footage can be light or dark on its own —
 * the footer's wave is light where this one's is not.
 */
function CallToAction({
  text,
  actionLabel,
  href,
  variant = "primary",
  download,
  external,
  icon,
  videoSrc,
  tone = "light",
}) {
  const { overlay, fallback, surface, heading, orb } = tones[tone];

  return (
    <section
      className={`relative z-1 overflow-hidden py-20 lg:py-28 ${surface} ${
        videoSrc ? "flex min-h-[22rem] items-center" : ""
      }`}
    >
      {videoSrc && <AmbientVideo src={videoSrc} overlay={overlay} fallback={fallback} />}

      {/* A single pool of light, sized to the type it sits behind. */}
      <div
        aria-hidden="true"
        className={`cta-orb pointer-events-none absolute top-1/2 left-1/2 -z-10 h-80 w-[40rem] -translate-1/2 rounded-full bg-radial to-transparent blur-3xl ${orb}`}
      />

      <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 text-center lg:px-8">
        <p
          className={`max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl ${heading}`}
        >
          {text}
        </p>

        <Button
          as="a"
          href={href}
          variant={variant}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {icon}
          {actionLabel}
        </Button>
      </Reveal>
    </section>
  );
}

export default CallToAction;
