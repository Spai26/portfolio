# Design Decisions

## Color System

- **Dark theme (default):** Vapordrive palette — deep navy background (`#0D1117`) with warm off-white text (`#F2EDE4`).
- **Accent:** Teal (`#3FA89B`) used for interactive elements, borders, and focus states.
- **Light theme:** Inverted to warm off-white background with dark text, triggered via `data-theme` attribute.

## Typography

- **Sans:** Inter (400–700)
- **Mono:** JetBrains Mono (400–700)
- **Scale:** 1.25 ratio, base 16px

## Spacing

- 8-step spacing scale based on 0.25rem increments.
- Content max-width: 680px for prose, 1100px for layout.
- Gutters: fluid `clamp(1rem, 5vw, 2rem)`.

## Accessibility

- Skip link present and functional.
- Focus-visible outline: 2px accent with 2px offset.
- Reduced motion respected (transitions stripped).
- WCAG AA contrast targets met for text and accent-on-text combinations.

## Components

- **Buttons:** 3 sizes (sm/md/lg) × 3 variants (primary/secondary/ghost).
- **Cards:** ProjectCard and post items use consistent hover lift + shadow.
- **StackTable:** Shared component for tech stack display.
