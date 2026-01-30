import { useState } from 'react'
import { useSceneState } from '../store/useSceneStore'

export default function Contact() {
  const setCurrentPage = useSceneState((state) => state.setCurrentPage)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'zaim08121@email.com' },
    { icon: '📱', label: 'Phone', value: '+92 3484831600' },
    { icon: '📍', label: 'Location', value: 'Pakistan' },
  ]

  return (
    <div className="panel-overlay">
      <div className="panel contact-panel">
        <button className="close-btn" onClick={() => setCurrentPage('home')}>✕</button>
        
        <div className="panel-header">
          <span className="panel-tag">&lt;contact&gt;</span>
          <h2>Get In Touch</h2>
          <p className="panel-subtitle">Let's build something amazing together</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="4"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>

        <span className="panel-tag closing">&lt;/contact&gt;</span>
      </div>
    </div>
  )
}
