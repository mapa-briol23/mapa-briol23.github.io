import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import SkillBadge from "../components/SkillBadge";
import { Particles } from "../components/Decor";
import { skillCategories } from "../data/skills";

const particles = [
  { left: "12%", top: "70%", size: 5, color: "rgba(96, 165, 250, 0.15)", delay: "0s" },
  { left: "82%", top: "85%", size: 4, color: "rgba(139, 92, 246, 0.14)", delay: "6s" },
];

/** No cards: each category is a bold label with its skills as inline pills beneath,
    separated by open space rather than borders. */
function Skills() {
  return (
    <SectionContainer id="skills" tone="deep">
      <Particles positions={particles} />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader label="Skills" title="Technical Skills" align="right" className="mb-16" />

      <div className="flex flex-col gap-12">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={(index % 3) * 100}>
            <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Skills;
