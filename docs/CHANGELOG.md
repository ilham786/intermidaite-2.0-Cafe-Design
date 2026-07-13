# Changelog

All notable changes to the Sōru Coffee project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] - 2026-07-11

### Added
- Created a separate JavaScript logic file [js/script.js](file:///Ilham/cafe/intermidaite%202.0/js/script.js) containing dynamic rendering, particles, parallax, and 3D card tilt features, moving it out of [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html).
- Added comprehensive developer and AI assistant documentation directory `/docs/` containing detailed markdown guides.
- Created root [README.md](file:///Ilham/cafe/intermidaite%202.0/README.md) file describing project setup and overview.

### Changed
- Refactored [index.html](file:///Ilham/cafe/intermidaite%202.0/index.html) to link external stylesheet and script assets rather than using inline code.

### Fixed
- Fixed iOS input and textarea auto-zoom behavior on focus on screens under `768px` by forcing font-size to `16px`.
- Optimized the features-grid borders to remain consistent across tablet layouts (`768px` to `1024px`).
- Adjusted container padding on small screen dimensions (`<400px` and `<360px`) to prevent cramped text margins.
- Resolved mobile menu overflow bugs on landscape devices by adding vertical auto-scroll behaviors.

---

## [2.0.0] - 2026-07-10

### Added
- Implemented premium responsive design theme featuring Playfair Display typography and custom copper-gold color palette.
- Created V60, Espresso, and Matcha cards with client-side 3D tilt and specular lighting adjustments.
- Designed custom CSS parallax and keyframe morph transitions.
- Coded simulated online table booking reservation interface.
- Created initial desktop landing layout structure.
