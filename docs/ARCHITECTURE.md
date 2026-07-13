# Architecture & Technical Design

This document details the architecture, file relations, data flow, and runtime mechanics of the Sōru Coffee application.

---

## 🏛️ Overall Architecture
Sōru Coffee is built as a single-page application (SPA) using a static, front-end architecture. It does not compile, transpile, or require build-step dependencies.

```
                    ┌────────────────────────┐
                    │       index.html       │
                    └───────────┬────────────┘
                                │ (Links)
              ┌─────────────────┴─────────────────┐
              ▼                                   ▼
      ┌───────────────┐                   ┌───────────────┐
      │  styles.css   │                   │   script.js   │
      └───────────────┘                   └───────────────┘
```

---

## 📁 Component and Section Hierarchy
The [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html) file is split into logical blocks:
1. **Header / Navigation (`nav#mainNav`)**: Stays sticky at the top, collapses on scroll, and hides links to reveal a responsive hamburger button on mobile screens.
2. **Mobile Menu Drawer (`.mobile-menu`)**: Slides out when the hamburger is toggled on touch devices.
3. **Hero Banner (`#hero`)**: Holds floating particles, background parallax shapes, headings, and CTA buttons.
4. **Story Block (`#story`)**: Displays founder quotes and the brand philosophy.
5. **Menu Block (`#menu`)**: Displays dynamic menu items filtered by category tabs.
6. **Gallery Grid (`#gallery`)**: Employs masonry layout showing color-gradient placeholders representing shop atmospheres.
7. **Features Block (`#features`)**: A 4-column statistical overview grid.
8. **Reservation Section (`#reserve`)**: Contains the table booking form.
9. **Footer (`#footer`)**: Location address, business hours table, social links, and an embed link placeholder.

---

## 🔄 State & Data Flow
The application state is lightweight and client-side only:
- **Menu Data**: Stored in a JSON array constant (`menuItems`) inside [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js).
- **Active Tab Category**: Managed via custom `data-cat` attributes. Clicking tab buttons reads their category, filters `menuItems`, and dynamically updates the DOM.
- **Scroll State**: Monitored by a scroll event listener that applies or removes `.scrolled` and `.visible` helper classes.

### Menu Tab Click Lifecycle
```
[User Click Tab]
       │
       ▼
[Tab Click Event Handler] ──► Reads dataset.cat
       │
       ▼
[renderMenu(category)]
       │
       ├─► Filters menuItems array
       ├─► Maps array to HTML strings
       ├─► Updates `#menuGrid` InnerHTML
       │
       ▼
[observeReveal()] ─────────► Re-observes new cards for reveal animations
[initTilt()] --------------► Re-binds mouse listeners for card 3D tilt effects
```

---

## 🏗️ Build & Hosting Process
- **Build Step**: None. There is no packaging tool (Webpack/Vite) or CSS processor (Sass/Tailwind).
- **Hosting**: Can be deployed to any host capable of serving static assets (GitHub Pages, Netlify, Vercel, S3, Apache, Nginx).
- **Resource Loading**: System fonts and Google Web Fonts are linked directly via CDNs, minimizing server payload size.
