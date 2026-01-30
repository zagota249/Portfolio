import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing')

  const loadingMessages = [
    'Initializing...',
    'Loading 3D Assets...',
    'Preparing Scene...',
    'Almost Ready...',
    'Welcome!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / 25),
      loadingMessages.length - 1
    )
    setLoadingText(loadingMessages[messageIndex])
  }, [progress])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo Animation */}
        <div className="loading-logo">
          <div className="logo-cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="loading-title">
          <span className="bracket">&lt;</span>
          Portfolio
          <span className="bracket">/&gt;</span>
        </h2>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-info">
            <span className="progress-text">{loadingText}</span>
            <span className="progress-percent">{progress}%</span>
          </div>
        </div>

        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="matrix-column"
              style={{ 
                animationDelay: `${Math.random() * 2}s`,
                left: `${i * 5}%`
              }}
            >
              {[...Array(10)].map((_, j) => (
                <span key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                  {String.fromCharCode(33 + Math.random() * 93)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
