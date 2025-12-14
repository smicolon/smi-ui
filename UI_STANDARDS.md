# Smicolon UI Standards (Agency Design System)
These standards are the **source of truth** for implementation.  
Figma communicates intent; this document defines **how it is built**.

> Principle: **Consistency beats novelty.** Build from existing primitives and blocks.  
> AI may assemble; it must not invent new patterns unless explicitly requested.

---

## 1) Tokens & theming (non-negotiable)
### 1.1 Use semantic tokens, not raw values
- ✅ Use design tokens (CSS variables + Tailwind theme mapping)
- ❌ Avoid hard-coded hex colors (except in token definitions)
- ❌ Avoid arbitrary spacing (`mt-[13px]`) unless justified and documented

### 1.2 Token roles (examples)
- `--bg`, `--fg`, `--muted`, `--muted-foreground`
- `--primary`, `--primary-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--ring`

### 1.3 Density profiles
UI must support at least:
- `compact`
- `comfortable` (default)
- `spacious`

Density affects:
- vertical rhythm (padding, gaps)
- table row heights
- form spacing
- typography scale (minor adjustments only)

---

## 2) Composition rules (blocks first)
### 2.1 Prefer blocks over one-off page JSX
- ✅ Pages compose blocks from `src/components/blocks`
- ✅ Blocks compose primitives from `src/components/ui`
- ❌ Do not build “page-only” bespoke components unless the pattern is truly unique

### 2.2 Standard page anatomy
Most app pages should follow:
- AppShell
- PageHeader (title + breadcrumb + actions)
- Content sections (cards / panels / tables)
- Footer actions when applicable (sticky save bar)

---

## 3) Interaction & state completeness
Every user-facing surface must include:
- **Loading state** (skeleton preferred)
- **Empty state** (contextual, with primary action if relevant)
- **Error state** (inline banner + retry when possible)
- **Disabled state** (buttons/inputs)
- **Optimistic state** where appropriate (list updates, toggles)

---

## 4) Accessibility (baseline)
### 4.1 Keyboard support
- All interactive elements must be reachable by keyboard.
- Focus order must be logical.
- Focus styles must be visible (no `outline: none` without replacement).

### 4.2 ARIA and labeling
- Icon-only buttons require `aria-label`.
- Form inputs require associated labels.

### 4.3 Reduced motion
- Respect `prefers-reduced-motion`.
- Provide a non-animated fallback for Motion transitions.

---

## 5) Motion (tasteful and reusable)
### 5.1 Presets only
- ✅ Use motion presets from `src/lib/motion/presets.ts`
- ❌ Avoid ad-hoc durations/easing scattered throughout code

### 5.2 Motion usage guidelines
- Animate *entrance/exit* for overlays and section reveals.
- Avoid animating large layout shifts during normal interaction.
- Keep motion subtle in data-heavy screens.

---

## 6) Responsiveness
- Define mobile, tablet, desktop layouts explicitly.
- Avoid fixed widths that break at common breakpoints.
- Tables: provide horizontal scroll or responsive column strategies.

---

## 7) Review gates
A UI change is “done” only if:
- Typecheck passes
- Lint passes
- A11y checks pass for key flows
- Storybook story exists for new blocks (with states)
- Visual regression has been reviewed for changed screens (if enabled)
