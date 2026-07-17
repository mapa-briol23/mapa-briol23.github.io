import ImagePlaceholder from "./ImagePlaceholder";
import TagList from "./TagList";

/**
 * Screenshot bleeding to the card edge on top, content below. No border — just a
 * soft drop shadow; on hover the whole card lifts and a blue edge lights up its left.
 */
function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-l-[3px] border-l-transparent bg-pane/50 shadow-[0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:border-l-secondary hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.45)]">
      <ImagePlaceholder
        label={project.screenshotLabel}
        className="aspect-video w-full border-x-0 border-t-0 border-b border-solid border-secondary/8"
      />

      <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
        <div className="flex flex-col items-start gap-3">
          {project.category && (
            <span className="rounded-full bg-secondary/12 px-3 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
              {project.category}
            </span>
          )}

          <h4 className="text-card text-ink transition duration-300 group-hover:text-secondary">
            {project.name}
          </h4>
        </div>

        <p className="text-base leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-col gap-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-base text-muted">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary ring-3 ring-secondary/20"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4 pt-2">
          <TagList label="Software Used" items={project.software} />

          {project.hardware?.length > 0 && (
            <TagList label="Hardware Used" items={project.hardware} />
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
