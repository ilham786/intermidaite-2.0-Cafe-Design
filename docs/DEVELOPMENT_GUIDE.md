# Development Guide

This guide provides instructions for developers and maintainers on how to safely update, optimize, and extend the Sōru Coffee project.

---

## 🛠️ Adding New Sections
To add a new section to the page:
1. **HTML**: Create a semantic `<section>` element in [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html) with a unique ID (e.g. `<section id="story">`).
2. **Reveal Classes**: If the elements in the section should animate on scroll, wrap them in classes:
   - `.reveal` (Fades and slides up)
   - `.reveal-left` (Fades and slides in from the left)
   - `.reveal-right` (Fades and slides in from the right)
3. **Styles**: Add the styling rules to [css/styles.css](file:///Ilham/cafe/intermidaite%202.0/css/styles.css) using design variables.

---

## 🍽️ Modifying the Menu
The menu items are stored inside the `menuItems` array in [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js).
To add or update a menu item, edit the object list:
```javascript
const menuItems = [
  ...
  {
    name: "Golden Cardamom Latte",
    desc: "Single-origin espresso, steamed cardamom milk, touch of organic honey",
    price: "₹310",
    cat: "espresso",  // Options: espresso, pour-over, cold-brew, matcha, food
    tag: "Espresso"
  }
];
```
### Adding a Category Tab
To add a new category (e.g., `tea`):
1. In [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html), add a tab button inside `.tab-row`:
   ```html
   <button class="tab" data-cat="tea">Tea</button>
   ```
2. Update the `menuItems` array in [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js) with items matching `cat: "tea"`.

---

## ⚠️ Guidelines & Best Practices
- **No inline styles/scripts**: Keep styles in `.css` and logic in `.js` to maintain clean separation.
- **CSS variable compliance**: Always declare new color/font properties as tokens in the `:root` block rather than using hardcoded hex values.
- **Aspect Ratio & CLS**: Ensure cards and images have fixed heights or responsive wrappers to prevent Cumulative Layout Shift.
- **Intersection Observer updates**: The script automatically re-runs observation when items render dynamically. If you add dynamic sections elsewhere, call `observeReveal()` to bind scroll-reveal classes.
