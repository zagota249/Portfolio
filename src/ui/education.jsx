import { useSceneState } from '../store/useSceneStore'

export default function Education() {
  const closePanel = useSceneState((s) => s.closePanel)

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Your University Name",
      year: "2024-currently",
      icon: "🎓"
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Punjab group of Colleges(campus#8)",
      year: "2022-24",
      grade: "A+ Grade",
      icon: "📚"
    },
    {
      degree: "Matriculation (Science)",
      institution: "Government High School",
      year: "2020-22",
      grade: "A+ Grade",
      icon: "🏫"
    }
  ]

  const certifications = [
    { name: "Advance React", issuer: "Coursera", year: "2024",link:"https://www.coursera.org/account/accomplishments/verify/K0EA0S8QZSKF?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" },
    { name: "Version Control", issuer: "Coursera", year: "2024",link:"https://www.coursera.org/account/accomplishments/verify/0ZMXYP8DMXUS?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" },
    { name: "Front End Capstone", issuer: "Coursera", year: "2024",link:"https://www.coursera.org/account/accomplishments/verify/1A5EHV3MZYM6?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" },
    { name: "UI/UX", issuer: "Coursera", year: "2024",link:"https://www.coursera.org/account/accomplishments/verify/IGLTAFGMKMTP?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse" },
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
                <a 
                  key={index} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="cert-badge">✓</div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer} • {cert.year}</span>
                  </div>
                  <div className="cert-link-icon">🔗</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <span className="panel-tag closing">&lt;/education&gt;</span>
      </div>
    </div>
  )
}
