import { ArrowDown, Download } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { Arc, ConcentricCircles, Orb } from "../components/Decor";
import { profile } from "../data/navigation";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Diffused light, scattered asymmetrically and never quite settling. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <Orb
          cycle={1}
          size={420}
          color="rgba(37, 99, 235, 0.08)"
          className="-top-24 right-[-6rem] lg:right-[4rem]"
        />
        <Orb
          cycle={2}
          size={360}
          color="rgba(96, 165, 250, 0.06)"
          className="bottom-[-8rem] left-[-6rem]"
        />
        <Orb
          cycle={3}
          size={300}
          color="rgba(147, 197, 253, 0.1)"
          className="top-1/3 right-[10%] hidden lg:block"
        />
        <Orb cycle={4} size={240} color="rgba(255, 255, 255, 0.3)" className="top-[15%] left-[30%]" />
      </div>

      {/* Quiet geometry, weighted away from the type. */}
      <ConcentricCircles size={520} className="top-8 -right-40 -z-10 hidden lg:block" />
      <Arc size={200} className="bottom-24 left-[-3rem] -z-10 hidden text-accent/50 lg:block" />

      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
{/*             <Reveal as="p" className="mb-6 flex items-center gap-3 text-label text-primary uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Academic Web Portfolio
            </Reveal> */}

            <Reveal delay={80}>
              <h1 className="text-5xl font-extrabold tracking-tight text-balance text-ink sm:text-6xl lg:text-hero">
                {profile.fullName}
              </h1>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <p className="text-xl font-semibold text-ink sm:text-2xl">{profile.degree}</p>
              <p className="mt-1.5 text-body text-muted">{profile.school}</p>
            </Reveal>

            <Reveal as="p" delay={240} className="mt-8 max-w-xl text-body text-muted">
              A fourth-year Information Technology student at Mapúa Malayan Colleges Laguna
              specializing in Cybersecurity. Experienced in software development, UI/UX design, and
              web technologies through academic projects and on-the-job training.
            </Reveal>

            <Reveal delay={320} className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={profile.cvPath} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
              <Button as="a" href="#projects" variant="secondary">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
                View Projects
              </Button>
            </Reveal>
          </div>

          {/* Composition of light and outline — the counterweight to the type. */}
          <Reveal delay={400} className="relative hidden aspect-square lg:block">
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-full bg-radial from-accent/30 via-secondary/10 to-transparent blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full border border-accent/50"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[30%] rounded-full border border-white/80 bg-white/40 backdrop-blur-sm"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
