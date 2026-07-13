# Sōru Coffee — Specialty Coffee & Artisan Experience

A premium, fully responsive, and highly interactive landing page for **Sōru Coffee**, built using pure vanilla web technologies. The project provides an immersive digital experience featuring glassmorphism, micro-animations, client-side dynamic content rendering, and custom 3D interactions.

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation & Quick Start](#-installation--quick-start)
- [Project Architecture](#-project-architecture)
- [Responsive Design & Performance](#-responsive-design--performance)
- [Coding Conventions](#-coding-conventions)
- [AI & Developer Documentation](#-ai--developer-documentation)
- [Changelog](#-changelog)
- [License](#-license)

---

## ☕ Project Overview
**Sōru Coffee** is a modern specialty cafe landing website. The site is designed to capture the brand's aesthetic—minimalist, premium, and warm—using rich visual aesthetics. It highlights the cafe's story, custom single-origin coffee menu, atmospheric imagery, distinct features, and an interactive table reservation system.

### Key Features:
- **Interactive Menu Tabs**: Dynamic client-side filtering and rendering of coffee, tea, and food categories.
- **3D Tilt Cards**: Mouse-movement-aware 3D card tilt and specular highlights for a premium card feel.
- **Hero Parallax & Particles**: Floating background coffee steam particles and mouse-parallax interaction on the main hero banner.
- **Intersection Observer Animations**: Elements smoothly reveal themselves on scroll.
- **Table Reservation System**: Interactive table booking form with client-side loading indicators and success responses.
- **Mobile First Responsiveness**: Adapts smoothly to all screens (320px up to 1440px+ Displays).

---

## 🛠️ Tech Stack
The project is built intentionally with zero dependencies, avoiding complex node build setups to ensure instant rendering and maximum speed:
- **Markup**: Semantic HTML5.
- **Styling**: Vanilla CSS3 using custom CSS variables (design tokens), flexbox, grid, and CSS animations.
- **Logic**: Vanilla ES6 JavaScript (DOM manipulation, event listeners, and Web APIs).

---

## 📂 Folder Structure
```
.
├── css/
│   └── styles.css          # Core stylesheet containing variables, typography, layouts, and media queries
├── js/
│   └── script.js           # Client-side logic, menu data, tilt effects, parallax, and form handlers
├── docs/                   # Developer and AI assistant documentation
│   ├── PROJECT_OVERVIEW.md  # Detailed overview of target audience and goals
│   ├── ARCHITECTURE.md     # In-depth architectural details and data flows
│   ├── COMPONENTS.md       # Breakdown of page sections and interactive components
│   ├── STYLING_GUIDE.md    # Styling rules, color palettes, and animation tokens
│   ├── DEVELOPMENT_GUIDE.md # Maintenance, features addition, and best practices
│   ├── AI_CONTEXT.md       # Context sheet explicitly for AI coding assistants
│   └── CHANGELOG.md        # SemVer release history and planned improvements
├── index.html              # Document entry point containing clean semantic HTML
└── README.md               # Project readme (this file)
```

---

## 🚀 Installation & Quick Start
Since the project uses vanilla web technologies, there are no build steps, compilers, or packages to install.

### Development Environment:
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd "intermidaite 2.0"
   ```
3. Open `index.html` directly in your web browser:
   - On Windows: Double-click `index.html` or open it with your browser.
   - Using VS Code: Right-click `index.html` and select **Open with Live Server** (recommended for live-reloading during development).

---

## 🏛️ Project Architecture
The application separates its concerns into three primary files:
- **Structure ([index.html](file:///Ilham/cafe/intermidaite%202.0/index.html))**: Pure markup defining sections (`#hero`, `#story`, `#menu`, `#gallery`, `#features`, `#reserve`, `#footer`). No inline CSS or JavaScript logic exists in this file.
- **Presentation ([css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css))**: Design tokens (variables), basic resets, component styling, layout setups, and device-specific media queries.
- **Behavior ([js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js))**: Static data storage (menu items array), tab event listeners, parallax handlers, canvas particle creation, 3D card tilt calculations, and dummy API form submission emulation.

For an in-depth look, see [docs/ARCHITECTURE.md](file:///Ilham/cafe/intermidaite%202.0/docs/ARCHITECTURE.md).

---

## 📱 Responsive Design & Performance
### Spacing and Layout
- Layouts are built using CSS Grid and Flexbox to remain flexible.
- Breakpoints target small mobile screens (320px–360px), standard phones (400px–768px), tablets/medium displays (768px–1024px), and desktop/large displays (1024px+).
- Prevented iOS Safari input auto-zoom on forms by keeping the font-size at `16px` on smaller screens.
- All media queries are consolidated at the bottom of [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css).

### Performance Metrics
- **Zero layout shifts (CLS)**: Hardcoded aspect ratios and flex-grids prevent shifts.
- **Fast loading times**: Using inline SVG graphics instead of heavy images and system-level linear-gradient backgrounds inside the atmospheric gallery.

---

## 📐 Coding Conventions
- **Class Naming**: Follows a lowercase, hyphen-separated pattern (e.g., `.nav-logo`, `.menu-card`).
- **CSS Variable Tokens**: Design details (fonts, colors, dims) should always use custom tokens (e.g., `var(--gold)`, `var(--ff-display)`).
- **DOM Queries**: Cached DOM references inside functions to minimize re-painting.
- **Javascript Naming**: camelCase variable names, UPPERCASE constants, and descriptive verbs for functions (e.g., `createParticles()`, `renderMenu()`).

---

## 📖 AI & Developer Documentation
For detailed guides on how to build, maintain, and understand Sōru Coffee, please check the following documents under `/docs/`:
1. [Project Overview](file:///Ilham/cafe/intermidaite%202.0/docs/PROJECT_OVERVIEW.md) - Learn about core features and targets.
2. [Architecture Details](file:///Ilham/cafe/intermidaite%202.0/docs/ARCHITECTURE.md) - Understand directory layouts and DOM mechanics.
3. [Component Dictionary](file:///Ilham/cafe/intermidaite%202.0/docs/COMPONENTS.md) - Break down sections and state configurations.
4. [Styling & Brand Guide](file:///Ilham/cafe/intermidaite%202.0/docs/STYLING_GUIDE.md) - Color palettes, typographic hierarchies, and animations.
5. [Development & Code Extension](file:///Ilham/cafe/intermidaite%202.0/docs/DEVELOPMENT_GUIDE.md) - Learn how to add sections or menu items safely.
6. [AI Assistant Context Sheet](file:///Ilham/cafe/intermidaite%202.0/docs/AI_CONTEXT.md) - Read this first if you are an AI assistant.

---

## 📜 License
This project is open-source and available under the MIT License.
