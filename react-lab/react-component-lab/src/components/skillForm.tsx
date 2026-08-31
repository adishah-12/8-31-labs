import { useState, type SubmitEventHandler } from 'react';
import type { Skill } from '../App';

type SkillFormProps = {
  onAddSkill: (skill: Skill) => void;
};

function SkillForm({ onAddSkill }: SkillFormProps) {
  const [skillName, setSkillName] = useState('');
  const [level, setLevel] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const name = skillName.trim();

    if (!name) {
      setError('Enter a skill name.');
      return;
    }

    onAddSkill({ name, level });
    setSkillName('');
    setLevel(1);
    setError('');
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="skill-name">Skill</label>
        <input
          id="skill-name"
          type="text"
          value={skillName}
          onChange={(event) => {
            setSkillName(event.target.value);
            setError('');
          }}
        />
      </div>

      <div className="form-field">
        <label htmlFor="skill-level">Level</label>
        <select
          id="skill-level"
          value={level}
          onChange={(event) => setLevel(Number(event.target.value))}
        >
          {[1, 2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="form-error" id="skill-error">
          {error}
        </p>
      )}

      <button type="submit">ADD SKILL</button>
    </form>
  );
}

export default SkillForm;
