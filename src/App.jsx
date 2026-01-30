import { useEffect } from 'react'
import Scene from './canvas/scene'
import Header from './ui/Header'
import Footer from './ui/Footer'
import SkillsPanel from './ui/Skills'
import EducationPanel from './ui/education'
import AboutPanel from './ui/About'
import ContactPanel from './ui/Contact'
import LoadingScreen from './ui/LoadingScreen'
import ProjectsPanel from './ui/Projects'
import { useSceneState } from './store/useSceneStore'
import './App.css'

function App() {
  const panel = useSceneState((state) => state.panel)
  const currentPage = useSceneState((state) => state.currentPage)
  const isLoading = useSceneState((state) => state.isLoading)
  const setLoading = useSceneState((state) => state.setLoading)
  const openPanel = useSceneState((state) => state.openPanel)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [setLoading])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Scene />

        {/* Hero Overlay - Only on home */}
        {currentPage === 'home' && (
          <div className="hero-overlay hero-top">
            <div className="hero-content">
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => openPanel('Projects')}>View My Work</button>
                <a href="/CV.pdf" className="btn-secondary" download>Download CV</a>
              </div>
            </div>
          </div>
        )}

        {/* Panels */}
        {panel === 'Skills' && <SkillsPanel />}
        {panel === 'Education' && <EducationPanel />}
        {panel === 'Projects' && <ProjectsPanel />}
        {currentPage === 'about' && <AboutPanel />}
        {currentPage === 'contact' && <ContactPanel />}
      </main>

      <Footer />
    </div>
  )
}

export default App
