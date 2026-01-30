import { useSceneState } from '../store/useSceneStore'

export default function Header() {
  const currentPage = useSceneState((state) => state.currentPage)
  const setCurrentPage = useSceneState((state) => state.setCurrentPage)

  const navItems = [
    { id: 'home', label: 'Home', icon: '⌂' },
    { id: 'about', label: 'About Us', icon: '◈' },
    { id: 'contact', label: 'Contact', icon: '✉' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">DEV</span>
          <span className="logo-dot">/</span>
          <span className="logo-bracket">&gt;</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-underline"></span>
            </button>
          ))}
        </nav>

      </div>
    </header>
  )
}
