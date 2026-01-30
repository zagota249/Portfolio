import { useSceneState } from '../store/useSceneStore'

export default function ProjectsPanel() {
  const closePanel = useSceneState((state) => state.closePanel)

  const projects = [
    {
      name: 'Elder Care Platform',
      description: 'A comprehensive platform for elderly care management with modern features',
      link: 'https://github.com/zagota249/Elder-Care-Plateform.git',
      tech: ['React', 'Node.js', 'MongoDB']
    },
  ]

  return (
    <div className="panel-overlay" onClick={closePanel}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closePanel}>×</button>

        <div className="panel-header">
          <span className="panel-tag">&lt;projects&gt;</span>
          <h2>My Projects</h2>
          <p className="panel-subtitle">Click to view on GitHub</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <span className="project-link">View Repository →</span>
            </a>
          ))}
        </div>

        <span className="panel-tag closing">&lt;/projects&gt;</span>
      </div>
    </div>
  )
}
