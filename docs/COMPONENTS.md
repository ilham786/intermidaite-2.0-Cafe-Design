# Component Dictionary

This document details the functional specification of the page sections and interactive UI components of Sōru Coffee.

---

## 🧭 Navigation & Mobile Menu
- **HTML Container**: `nav#mainNav` and `div.mobile-menu`
- **Purpose**: Brand identification, primary site routing, and sticky desktop call-to-actions.
- **Interactions**:
  - Toggling hamburger icon `.hamburger` changes icon to "X" and slides `.mobile-menu` into view on small screens.
  - Scrolling past `80px` adds `.scrolled` to `nav`, reducing height/padding and adding a translucent background border.
- **Dependencies**: Uses Javascript handlers `closeMobile()` and scroll event listeners.

---

## 🎇 Particles & Parallax Hero
- **HTML Container**: `section#hero`
- **Purpose**: Creates an atmospheric, premium introductory display.
- **Interactions**:
  - **Parallax**: Moving the mouse over the hero moves `#heroHeading` and `#heroBlob` at differing speeds (depth effect).
  - **Particles**: Generates 18 absolute-positioned dots `.particle` of random sizes and animation speeds floating up from the bottom of the banner.
- **Dependencies**: JavaScript functions `createParticles()`, `mousemove` listener, and CSS keyframe floats.

---

## 🍽️ Dynamic Menu Grid & Tilt Cards
- **HTML Container**: `section#menu`
- **Purpose**: Dynamically renders and displays categorized coffee/food items.
- **Properties**:
  - Tab items: `<button class="tab" data-cat="espresso">`
  - Menu cards: `.menu-card` containing tags, item names, descriptions, prices, and gradients.
- **Interactions**:
  - Clicking tabs replaces the visible menu items.
  - **3D Card Tilt**: Moving the cursor over `.menu-card` tilts the card's perspective on the X and Y axes, while moving a custom specular glow gradient `.card-specular` to match the pointer coordinates.
- **Dependencies**: JSON array `menuItems`, JavaScript function `renderMenu()`, `initTilt()`, and `IntersectionObserver`.

---

## 🏔️ Atmosphere Masonry
- **HTML Container**: `div.masonry`
- **Purpose**: Implements a balanced gallery structure representing the shop's feel.
- **Properties**:
  - Layout: CSS Grid masonry utilizing `grid-row` spans to establish unequal, organic grid positioning.
  - Hover states: Hovering on items enlarges backgrounds and reveals description captions.

---

## 📝 Reservation Form
- **HTML Container**: `form#reserveForm`
- **Purpose**: Allows users to book tables.
- **Properties**:
  - Input items: Full Name, Date/Time, Party Size, Email, Special Requests.
- **Interactions**:
  - Submitting checks inputs, puts `.loading` classes on buttons, swaps text to "Confirming...", and returns confirmation checkmarks after `1.8s`.
- **Dependencies**: JavaScript function `submitReservation(e)`.
