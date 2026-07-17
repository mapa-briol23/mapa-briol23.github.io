import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import SkillBadge from "../components/SkillBadge";
import { Particles } from "../components/Decor";
import { skillCategories } from "../data/skills";

const particles = [
  { left: "12%", top: "70%", size: 5, color: "rgba(96, 165, 250, 0.15)", delay: "0s" },
  { left: "82%", top: "85%", size: 4, color: "rgba(147, 197, 253, 0.1)", delay: "6s" },
];

function SkillsGrid({ categories, columns, startIndex }) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 ${columns}`}>
      {categories.map((category, index) => (
        <Reveal key={category.id} delay={(startIndex + index) * 100}>
          <Card className="flex h-full flex-col gap-5">
            <h3 className="text-card text-ink">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

/** Three cards across, then the remainder on a wider two-column row. */
function Skills() {
  const topRow = skillCategories.slice(0, 3);
  const bottomRow = skillCategories.slice(3);

  return (
    <SectionContainer id="skills" tone="clear">
      <Particles positions={particles} />

      <SectionHeader
        label="Skills"
        title="Technical Skills"
        intro="Tools and technologies applied across coursework, software projects, and the capstone project."
        className="mb-16"
      />

      <div className="flex flex-col gap-6">
        <SkillsGrid categories={topRow} columns="lg:grid-cols-3" startIndex={0} />
        {bottomRow.length > 0 && (
          <SkillsGrid categories={bottomRow} columns="lg:grid-cols-2" startIndex={topRow.length} />
        )}
      </div>
    </SectionContainer>
  );
}

export default Skills;
