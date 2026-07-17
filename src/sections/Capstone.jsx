import { Check } from "lucide-react";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";
import TagList from "../components/TagList";
import { capstone } from "../data/capstone";

/** The centrepiece: one wide glass card lit from behind by a slowly turning aura. */
function Capstone() {
  return (
    <SectionContainer id="capstone" tone="tinted">
      <SectionHeader
        label="Capstone"
        title="Capstone Project"
        intro="The primary academic achievement of the program."
        className="mb-16"
      />

      <Reveal className="relative">
        {/* The turning light sits behind the card, not on it. The sweep is a disc that
            always overfills this halo, so rotating it never changes the lit silhouette. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-5 -z-10 overflow-hidden rounded-[2.5rem]"
        >
          <div className="aura absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-1/2 rounded-full" />
        </div>

        <article className="glass rounded-3xl p-7 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-7">
              <div>
                <p className="mb-3 text-label text-primary uppercase">{capstone.year}</p>
                <h3 className="text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
                  {capstone.title}
                </h3>
              </div>

              <p className="text-body text-muted">{capstone.overview}</p>

              <div>
                <h4 className="mb-4 text-label text-primary uppercase">Key Features</h4>
                <ul className="flex flex-col gap-3">
                  {capstone.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-primary"
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto grid gap-6 sm:grid-cols-2">
                <TagList label="Software Used" items={capstone.software} />
                <TagList label="Hardware Used" items={capstone.hardware} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capstone.screenshots.map((screenshot) => (
                <ImagePlaceholder
                  key={screenshot.id}
                  label={screenshot.label}
                  className="aspect-4/3 w-full rounded-xl"
                />
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </SectionContainer>
  );
}

export default Capstone;
