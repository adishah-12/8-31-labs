import type { Skill } from "../App";

type SkillListProps = {
    skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
    return (
        <ul className="skill-list">
            {skills.map((skill, index) => (
                <li className='skill-row' key={`${skill.name}-${index}`}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">LEVEL {skill.level}</span>
                </li>
            ))}
        </ul>
    );
}