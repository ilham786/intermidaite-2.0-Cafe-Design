# AI Context Sheet

This document is compiled specifically for AI coding assistants (like Gemini, Claude, and Copilot) to provide immediate context, rules, and guidelines for maintaining Sōru Coffee.

---

## 🤖 High-Level Project Summary
- **App Name**: Sōru Coffee
- **Structure**: Static Single Page Application (SPA).
- **Core Technology**: Vanilla HTML5, Vanilla CSS3 (CSS variables), Vanilla JavaScript (ES6). No libraries, framework packages, or node compilers are used.

---

## 🏗️ Technical Architecture & Key Rules
- **Modular Assets**:
  - Main template: [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html)
  - Styling: [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css)
  - Logic/Data: [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js)
- **Data Store**: Menu items are hardcoded in the `menuItems` array in JavaScript, rendering client-side via JavaScript innerHTML updates.

---

## 🔒 Constraints (Always Respect)
1. **Zero Libraries**: Do NOT introduce node packages, compilers, build systems, or framework dependencies (e.g., React, Vue, Sass, Tailwind) unless explicitly requested.
2. **Branding Integrity**: Never change CSS variable colors (`--gold`, `--black`, `--dark`) or main typography families unless requested.
3. **No Overlapping Styles**: Write media queries inside the consolidated `@media` blocks at the bottom of [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css). Do not scatter media queries throughout the styling document.
4. **No Functional Regressions**: Keep IntersectionObserver bindings and scroll events optimized; do not break current animation reveals or loading simulations.
5. **No Layout Overflow**: Always verify that layout adjustments do not introduce horizontal scroll bars (`overflow-x: hidden` is on the body, but check that containers do not overflow).

---

## 🛠️ Safe Areas for Modification
- **Menu Data**: Safe to modify the JSON structure inside `menuItems` in [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js) to change names, prices, tags, or descriptions.
- **Visual styling additions**: Safe to add design overrides or custom variables inside the consolidated media queries block at the bottom of [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css).
- **Form actions**: The `submitReservation` function is currently simulated; updating this to handle real POST requests is safe.

---

## ⚡ Naming Conventions
- **Class naming**: Lowercase, hyphen-delimited (e.g. `.feature-tile`, `.menu-grid`).
- **JavaScript variable/function naming**: camelCase for functions (e.g. `renderMenu()`, `initTilt()`) and arrays. UpperCase for global configuration values.
