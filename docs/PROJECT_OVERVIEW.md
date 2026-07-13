# Project Overview - Sōru Coffee

This document defines the high-level scope, design principles, functionality, and user experience objectives of the Sōru Coffee landing page.

---

## ☕ Introduction
**Sōru Coffee** is a premium, single-page landing site designed for an artisan specialty coffee shop. It acts as a digital storefront that introduces the cafe's core values, showcases a rotating menu, displays a visual atmosphere gallery, outlines key business statistics/features, and lets users submit online table reservations.

---

## 🎯 Primary Goals
1. **Brand Storytelling**: Communicate the dedication to craft, traced coffee bean origins, and barista training.
2. **Interactive Engagement**: Provide smooth, high-fidelity micro-interactions (mouse-parallax, dynamic card tilt, floating particles) that make the website feel premium.
3. **Table Bookings**: Drive customer reservations via an elegant reservation form.
4. **Performance & Speed**: Load instantly and run animations smoothly using pure vanilla web technologies with zero dependencies.

---

## 👥 Target Users
- **Coffee Enthusiasts**: Customers searching for single-origin filter coffees (V60, AeroPress) and specialty cafe experiences.
- **Local Diners**: Users looking to reserve tables for afternoon coffee sessions, business meetups, or weekend breakfasts.
- **Casual Visitors**: Users searching for location, phone contact details, social links, and working hours.

---

## ⚙️ Core Functionality
- **Dynamic Menu Explorer**: The core menu data is hosted in JS and rendered dynamically. Clicking tabs (`All`, `Espresso`, `Pour Over`, etc.) swaps active categories without reloading the page.
- **Interactive Card Tilt & Specular Highlights**: Coffee menu cards tilt slightly in 3D relative to mouse coordinates, with a custom overlay radial gradient creating a moving shine (specular reflections).
- **Parallax Background**: The landing page's hero background blob and heading react to mouse movements, moving at slightly different rates to create depth.
- **Atmospheric Grid**: A CSS masonry layout displaying abstract gradients that represent atmospheric snapshots of the shop.
- **Interactive Form Handler**: Validates and emulates API calls when confirming table reservations. Integrates loading spinners, visual confirmations, and automatically resets the button state after completion.

---

## 🎨 Design Philosophy
- **Dark Mode Warmth**: The background uses dark, earthy shades (`--black`, `--dark`) mixed with rich cream (`--cream`) and warm gold (`--gold`, `--terra`) to reflect coffee tones and high-end restaurant branding.
- **Glassmorphism & Speckle**: Employs semi-transparent backdrops (`rgba`), subtle glowing shadows, and micro-particles to replicate the steam, warmth, and texture of coffee roasting.
- **Clean Typography**: Uses *Playfair Display* for high-end serif titles, *DM Sans* for crisp, modern sans-serif body text, and *Cormorant Garamond* for artistic italic callouts.
