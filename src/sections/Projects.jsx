import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projectGroups } from "../data/projects";

/** Flat two-column grid of every project, with the total count beside the heading. */
function Projects() {
  const projects = projectGroups.flatMap((group) => group.projects);

  return (
    <SectionContainer id="projects" tone="deep">
      <div className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
        <SectionHeader label="Projects" title="Projects Developed" />
        <Reveal as="span" className="text-label text-muted uppercase">
          {projects.length} projects
        </Reveal>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
