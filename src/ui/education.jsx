import { useSceneState } from '../store/useSceneStore'

export default function Education() {
  const closePanel = useSceneState((s) => s.closePanel)

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Your University Name",
      year: "2020 - 2024",
      grade: "3.8 GPA",
      icon: "🎓"
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Your College Name",
      year: "2018 - 2020",
      grade: "A+ Grade",
      icon: "📚"
    },
    {
      degree: "Matriculation (Science)",
      institution: "Your School Name",
      year: "2016 - 2018",
      grade: "A+ Grade",
      icon: "🏫"
    }
  ]

  const certifications = [
    { name: "React Developer Certification", issuer: "Meta", year: "2024" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2023" },
    { name: "Full Stack Development", issuer: "Coursera", year: "2023" },
    { name: "Three.js Journey", issuer: "Bruno Simon", year: "2024" },
  ]

  return (
    <div className="panel-overlay">
      <div className="panel education-panel">
        <button className="close-btn" onClick={closePanel}>✕</button>
        
        <div className="panel-header">
          <span className="panel-tag">&lt;education&gt;</span>
          <h2>Education & Certifications</h2>
          <p className="panel-subtitle">My academic journey</p>
        </div>

        <div className="education-content">
          {/* Education Timeline */}
          <div className="education-timeline">
            <h3>📖 Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="edu-card">
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-details">
                  <h4>{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-meta">
                    <span className="edu-year">{edu.year}</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
                <div className="edu-line"></div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certifications">
            <h3>🏆 Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-badge">✓</div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer} • {cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="panel-tag closing">&lt;/education&gt;</span>
      </div>
    </div>
  )
}
