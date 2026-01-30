export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: '⬡', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: '◼', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: '◆', url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: '◉', url: 'https://instagram.com/yourusername' },
    { name: 'Email', icon: '✉', url: 'mailto:your@email.com' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.name}
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-name">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-info">
          <p className="copyright">
            <span className="code-tag">&lt;</span>
            Built with 💚 using React & Three.js
            <span className="code-tag">/&gt;</span>
          </p>
          <p className="year">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
