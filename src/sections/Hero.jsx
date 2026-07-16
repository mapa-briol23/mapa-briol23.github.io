import { ArrowDown, Download } from "lucide-react";
import Button from "../components/Button";
import { profile } from "../data/navigation";

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-24 right-0 -z-10 h-72 w-72 rounded-full border border-accent/40"
      />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-widest text-primary uppercase">
            Academic Web Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-hero">
            {profile.fullName}
          </h1>

          <p className="mt-6 text-lg font-semibold text-ink sm:text-xl">{profile.degree}</p>
          <p className="mt-1 text-base text-muted sm:text-lg">{profile.school}</p>

          <p className="mt-8 max-w-2xl text-base text-muted sm:text-lg">
            Placeholder professional introduction. Two to three sentences summarizing academic focus,
            software development interests, and career direction as an aspiring software developer.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={profile.cvPath} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
            <Button as="a" href="#projects" variant="secondary">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
