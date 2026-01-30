# 🚀 3D Developer Portfolio

A stunning, interactive 3D portfolio website built with React, Three.js, and React Three Fiber. Features a realistic 3D character, animated workspace, and modern UI design.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=for-the-badge&logo=vite)

## ✨ Features

- **3D Interactive Scene** - Fully animated 3D workspace with desk, chair, and realistic human character
- **Smooth Animations** - Character typing animation, head movement, and breathing effects
- **Modern UI** - Clean black & green theme with glassmorphism effects
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Interactive Panels** - Skills, Education, and Projects sections with smooth transitions
- **Particle Effects** - Dynamic floating particles in the background

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **3D Graphics:** Three.js + React Three Fiber
- **3D Helpers:** React Three Drei
- **Build Tool:** Vite
- **State Management:** Zustand
- **Styling:** CSS3 with custom animations

## 📁 Project Structure

```
my-3d-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── canvas/
│   │   ├── cameraRig.jsx    # Camera controls
│   │   ├── Chair.jsx        # 3D Chair model
│   │   ├── Character.jsx    # 3D Human character
│   │   ├── drawer.jsx       # 3D Drawer model
│   │   ├── Lights.jsx       # Scene lighting
│   │   ├── ParticleField.jsx # Background particles
│   │   ├── room.jsx         # Room environment
│   │   ├── scene.jsx        # Main 3D scene
│   │   └── table.jsx        # 3D Desk model
│   ├── components/
│   │   ├── Shapes.jsx       # 3D shape components
│   │   └── Text.jsx         # 3D text components
│   ├── pages/
│   │   └── Home.jsx
│   ├── store/
│   │   └── useSceneStore.js # Zustand state management
│   ├── ui/
│   │   ├── About.jsx        # About panel
│   │   ├── Contact.jsx      # Contact panel
│   │   ├── education.jsx    # Education panel
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Header.jsx       # Navigation header
│   │   ├── LoadingScreen.jsx # Loading animation
│   │   ├── Projects.jsx     # Projects panel
│   │   └── Skills.jsx       # Skills panel
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zagota249/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

## 🎨 Customization

### Change Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary: #00ff88;
  --primary-dark: #00cc6a;
  --bg-dark: #000000;
}
```

### Add Projects
Edit the projects array in `src/ui/Projects.jsx`:
```jsx
const projects = [
  {
    name: 'Your Project Name',
    description: 'Project description',
    link: 'https://github.com/your-repo',
    tech: ['React', 'Node.js']
  },
]
```

### Modify Character
Customize the 3D character in `src/canvas/Character.jsx` by changing colors:
```jsx
const skinColor = '#e0b090'
const hairColor = '#1a1209'
const shirtColor = '#1e3a5f'
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop:** Full 3D experience with all animations
- **Tablet:** Optimized layout with touch support
- **Mobile:** Simplified view with essential features

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Developer Portfolio**
- GitHub: [@zagota249](https://github.com/zagota249)

---

⭐ **Star this repo if you found it helpful!**

Built with ❤️ using React & Three.js
