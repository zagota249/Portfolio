import { useSceneState } from '../store/useSceneStore'

export default function Skills() {
  const closePanel = useSceneState((s) => s.closePanel)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Three.js', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS/SASS', level: 92 },
        { name: 'Next.js', level: 88 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'GraphQL', level: 78 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'Linux', level: 82 },
      ]
    }
  ]

  return (
    <div className="panel-overlay">
      <div className="panel skills-panel">
        <button className="close-btn" onClick={closePanel}>✕</button>
        
        <div className="panel-header">
          <span className="panel-tag">&lt;skills&gt;</span>
          <h2>Technical Skills</h2>
          <p className="panel-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3>
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <span className="panel-tag closing">&lt;/skills&gt;</span>
      </div>
    </div>
  )
}
