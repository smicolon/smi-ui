# Claude Code Prompt Pack (Smicolon UI Workflow)

## Global instruction (paste once per project)
You are implementing UI in a Smicolon project. Follow these rules:
- Follow `UI_STANDARDS.md` strictly.
- Prefer `src/components/blocks/*` compositions over page-only bespoke components.
- Build blocks from shadcn/ui primitives in `src/components/ui/*`.
- Use Tailwind tokens only; do not introduce raw hex colors or arbitrary spacing unless necessary.
- Motion must use presets from `src/lib/motion/presets.ts` and respect reduced motion.
- Every surface must include loading, empty, and error states.

---

## Prompt 1 — Structure pass (fast, correct)
**Input:** Figma intent + Block Map (from `docs/BLOCK_MAP_TEMPLATE.md`)

**Prompt:**
Implement the screen described by this Block Map.  
Goals:
1) Correct layout, semantics, and component composition (blocks first).
2) Implement all states: loading, empty, error, success.
3) Ensure accessibility: labels, focus order, keyboard navigation.
Constraints:
- Use existing blocks and primitives; if missing, add a new block in `src/components/blocks/`.
- Do not add bespoke styles; rely on tokens and existing variants.
Output:
- Files changed
- Brief explanation of where each state is handled

---

## Prompt 2 — Polish pass (controlled enhancement)
**Prompt:**
Polish the screen implementation:
- Apply motion presets only (no ad-hoc timings), include reduced-motion fallbacks.
- Improve responsive layout for mobile/tablet/desktop.
- Ensure consistent spacing/typography per tokens and density.
- Add skeleton layouts where needed.
Output:
- Files changed
- List of improvements by category (motion, responsive, a11y)

---

## Prompt 3 — New block request (rare)
**Prompt:**
Create a new block named `<BlockName>`:
- Compose from shadcn/ui primitives.
- Provide variants if needed (density or layout variants).
- Add Storybook story with states (default, loading, empty, error, reduced motion).
- Ensure accessibility and token-only styling.
Output:
- Block files
- Storybook story
- Usage example
