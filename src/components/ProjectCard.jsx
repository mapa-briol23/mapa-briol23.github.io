import Card from "./Card";
import ImagePlaceholder from "./ImagePlaceholder";
import TagList from "./TagList";

function ProjectCard({ project }) {
  return (
    <Card as="article" className="flex flex-col gap-5">
      <ImagePlaceholder label={project.screenshotLabel} className="aspect-video w-full" />

      <div className="flex flex-col gap-3">
        <h4 className="text-card text-ink">{project.name}</h4>
        <p className="text-base text-muted">{project.description}</p>

        <ul className="flex list-disc flex-col gap-1 pl-5 text-base text-muted marker:text-accent">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <TagList label="Software Used" items={project.software} />
      </div>
    </Card>
  );
}

export default ProjectCard;
