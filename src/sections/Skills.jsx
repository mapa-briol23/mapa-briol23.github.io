import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import SkillBadge from "../components/SkillBadge";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeader
        label="Skills"
        title="Technical Skills"
        intro="Tools and technologies applied across coursework, software projects, and the capstone project."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.id} className="flex flex-col gap-4">
            <h3 className="text-card text-ink">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Skills;
