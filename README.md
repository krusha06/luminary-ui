# Luminary UI

A dark-first component library for modern interfaces. 15 production-ready components. Zero dependencies.

![Luminary UI](https://img.shields.io/badge/version-1.0.0-7c6aff?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-6af0c8?style=flat-square)
![Components](https://img.shields.io/badge/components-15-ff6a9b?style=flat-square)

## Overview

Luminary UI is a hand-crafted component library built entirely with HTML, CSS, and vanilla JavaScript. No frameworks. No build tools required. Every component is animated, accessible, and designed for dark environments by default.

**Typography:** Space Grotesk (headings) · Manrope (body)

## Components

| # | Component | Tags |
|---|-----------|------|
| 1 | Buttons | interactive, animated |
| 2 | Cards | layout, data |
| 3 | Badges | status, inline |
| 4 | Toggle Switch | interactive, form |
| 5 | Inputs | form, validation |
| 6 | Modal | overlay, animated |
| 7 | Progress & Loaders | feedback, animated |
| 8 | Tooltip | overlay, UX |
| 9 | Toast Notifications | feedback, animated |
| 10 | Avatar Group | data, team |
| 11 | Select | form, input |
| 12 | Metric Cards | data, dashboard |
| 13 | Range Slider | form, interactive |
| 14 | Tabs | navigation, layout |
| 15 | Skeleton Loader | loading, UX |

## Features

- ⚡ **Zero dependencies** — Pure CSS animations and vanilla JS
- ♿ **Accessible** — WCAG 2.1 AA, ARIA roles, keyboard navigation
- 🎨 **Themeable** — Token-based via CSS custom properties
- 📦 **Framework agnostic** — Works with React, Vue, Svelte, or plain HTML
- 🌙 **Dark by default** — Light mode via a single class swap
- ✨ **Motion design** — Spring-physics animations throughout

## File Structure

```
luminary-ui/
├── index.html          # Entry point
├── css/
│   ├── tokens.css      # Design tokens (CSS variables)
│   ├── base.css        # Reset, typography, nav, hero, layout
│   ├── components.css  # All 15 component styles
│   └── layout.css      # Grid, card wrappers, responsive breakpoints
├── js/
│   └── main.js         # Scroll reveal, tabs, toast interactions
└── assets/
    └── fonts/          # Reserved for self-hosted fonts (optional)
```

## Quick Start

Clone and open — no build step needed:

```bash
git clone https://github.com/krusha06/luminary-ui.git
cd luminary-ui
open index.html
```

Or use any static server:

```bash
npx serve .
# → http://localhost:3000
```

## Theming

All design tokens live in `css/tokens.css`. Override any variable to retheme the entire library:

```css
:root {
  --accent:  #your-brand-color;
  --bg:      #your-background;
  --text:    #your-text-color;
}
```

## Font Stack

Luminary uses Google Fonts loaded via `<link>` in `index.html`:

| Role | Font | Weights |
|------|------|---------|
| Headings | Space Grotesk | 400, 500, 600, 700 |
| Body | Manrope | 300, 400, 500, 600 |

To self-host, download the font files into `assets/fonts/` and update the `@font-face` declarations accordingly.

## License

MIT — use freely in personal and commercial projects.

---

Made with ♥ by Krusha(https://github.com/krusha06)
