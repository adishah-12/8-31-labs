import './App.css'
import { useState } from 'react'
import SkillForm from './components/skillForm'
import SkillList from './components/skillList'

export interface Skill {
  name: string;
  level: number;
}

const initialSkills: Skill[] = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
]

function App() {

  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  function handleAddSkill(skill: Skill) {
    setSkills((currentSkills) => [...currentSkills, skill]);
  }

  return (
    <main className="app-shell">
      <section className="app" aria-labelledby="page-title">
        <header className="app-header">
          <h1 id="page-title">React Dev Skills</h1>
        </header>

        <SkillList skills={skills} />
        <SkillForm onAddSkill={handleAddSkill} />
      </section>
    </main>
  );
}

export default App;
