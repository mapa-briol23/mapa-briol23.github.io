import { Check } from "lucide-react";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import TagList from "../components/TagList";
import { capstone } from "../data/capstone";

function Capstone() {
  return (
    <SectionContainer id="capstone" tone="surface">
      <SectionHeader
        label="Capstone"
        title="Capstone Project"
        intro="The primary academic achievement of the program."
      />

      <article className="relative isolate overflow-hidden rounded-3xl border border-accent/50 bg-white p-6 shadow-lg sm:p-10">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
                {capstone.year}
              </p>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">{capstone.title}</h3>
            </div>

            <p className="text-base text-muted sm:text-lg">{capstone.overview}</p>

            <div>
              <h4 className="mb-3 text-card text-ink">Key Features</h4>
              <ul className="flex flex-col gap-2">
                {capstone.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <TagList label="Software Used" items={capstone.software} />
              <TagList label="Hardware Used" items={capstone.hardware} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capstone.screenshots.map((screenshot) => (
              <ImagePlaceholder
                key={screenshot.id}
                label={screenshot.label}
                className="aspect-4/3 w-full"
              />
            ))}
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}

export default Capstone;
