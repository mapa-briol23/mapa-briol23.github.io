import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projectGroups } from "../data/projects";

function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeader
        label="Projects"
        title="Software Developed"
        intro="Software projects completed throughout college, grouped by academic year."
      />

      <div className="flex flex-col gap-16">
        {projectGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-6 border-b border-line pb-3 text-xl font-semibold text-ink">
              {group.year}
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              {group.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
