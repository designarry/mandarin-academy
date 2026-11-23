# Mandarin Academy Semarang

React + TypeScript + Vite + Tailwind CSS v4, built on the Omni Design System v1.1
(duplicated from the Profile Page project).

## What carries over

- `src/index.css` — colour tokens (light/dark), fluid typography utilities (`text-display-*`,
  `text-heading-*`, `text-body-*`, `text-label-*`) and Material Symbols icons (`icon`)
- `design tokens/` — typography token exports used for the fluid type scale
- `src/components/page-layout.tsx` — page shell: 12-column background grid, control panel,
  centred 1184px content column
- `src/components/control-panel.tsx` — light/dark theme and grid toggle
- `src/components/button-icon.tsx` — Omni Button Icon
- `src/components/rich-text.tsx` — renders Markdown-like strings (bold, lists, quotes, tables)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build
- `npm run lint` — run oxlint
