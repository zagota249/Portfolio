import { useSceneState } from '../store/useSceneStore'

export default function About() {
  const setCurrentPage = useSceneState((state) => state.setCurrentPage)

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Dedication' },
  ]

  return (
    <div className="panel-overlay">
      <div className="panel about-panel">
        <button className="close-btn" onClick={() => setCurrentPage('home')}>✕</button>
        
        <div className="panel-header">
          <span className="panel-tag">&lt;about&gt;</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="profile-image">
              <div className="profile-placeholder">
                <span>👨‍💻</span>
              </div>
              <div className="profile-ring"></div>
            </div>
            
            <div className="about-text">
              <h3>Hello, I'm <span className="highlight">Your Name</span></h3>
              <p className="tagline">A passionate Full Stack Developer</p>
              <p className="description">
                I specialize in creating immersive web experiences using modern technologies. 
                With expertise in React, Three.js, and Node.js, I bring ideas to life through 
                clean code and creative design.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="timeline">
            <h4>My Journey</h4>
            <div className="timeline-items">
              <div className="timeline-item">
                <span className="year">2024</span>
                <span className="event">Senior Developer at Tech Corp</span>
              </div>
              <div className="timeline-item">
                <span className="year">2022</span>
                <span className="event">Started Freelancing</span>
              </div>
              <div className="timeline-item">
                <span className="year">2020</span>
                <span className="event">First Developer Job</span>
              </div>
            </div>
          </div>
        </div>

        <span className="panel-tag closing">&lt;/about&gt;</span>
      </div>
    </div>
  )
}
