# Styling & Brand Identity Guide

This document describes the design tokens, layout strategies, variables, animations, and color system used to style Sōru Coffee.

---

## 🎨 Design Tokens (Variables)
All branding variables are declared globally in the `:root` pseudo-class inside [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css):

### Color Tokens
- `--black` (`#050806`): Primary background black.
- `--dark` (`#080c09`): Rich, warm dark secondary color.
- `--dark2` (`#0a0f0b`): Atmospheric layout dark color.
- `--parchment` (`#e6ebe8`): Soft slate white for readable body text.
- `--cream` (`#f4f7f5`): Bright beige for headings and callouts.
- `--gold` (`#c5a880`): Warm copper-gold for brand accents and buttons.
- `--terra` (`#8f6d54`): Terracotta brown for specific subtext tags.
- `--muted` (`rgba(230,235,232,0.55)`): Semi-transparent color for description lines.

### Typography
- `--ff-display` (`'Playfair Display', serif`): Elegant display serif for headers and titles.
- `--ff-body` (`'DM Sans', sans-serif`): Low-contrast sans-serif optimized for readable paragraph layout.
- `--ff-accent` (`'Cormorant Garamond', serif`): Premium italic font for quotes and callouts.

---

## 📱 Responsive Strategy
Sōru Coffee uses a custom grid and flexbox layout.
- **Breakpoints**:
  - `320px–360px`: Ultra-compact mobile screens. Section/nav padding is reduced to optimize readability.
  - `400px–768px`: Mobile phones. Elements stack vertically, reservation columns collapse to `1fr`.
  - `768px–1024px`: Tablets and medium viewports. Menus and feature lists scale to `2x2` grids.
  - `1024px+`: Full-screen desktop viewports. Headers and content grids align to maximum widths of `1200px`.
- **Text Scaling**: Core headings use `clamp(min, preferred, max)` formulas to ensure fonts adapt to screen sizes without media query overlaps.

---

## 🎭 Animations & Visual FX
- **Blob Morphing (`@keyframes blobMorph`)**: Morphs border-radius shapes on hero and reservation background shapes over 12-20 second loop cycles.
- **Floating Particles (`@keyframes floatUp`)**: Floats tiny tea steam circles from absolute bottom nodes up to screen limits while fading opacity.
- **Bouncing Indicators (`@keyframes bounce`)**: Loops subtle vertical arrow offsets to indicate scroll directions.
- **Intersection Reveals**: Elements with `.reveal`, `.reveal-left`, or `.reveal-right` are styled hidden by default (`opacity: 0`). When they cross screen thresholds, JavaScript adds `.visible`, triggering transitions that slide and fade them into view.
