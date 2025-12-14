# Smicolon UI System Rollout Plan (practical)

## Phase 0 (1–2 days): Align
- Adopt `UI_STANDARDS.md` as mandatory for new UI work.
- Choose one density default and one motion default.

## Phase 1 (1 week): Foundation blocks
Ship these blocks first:
- AppShell
- PageHeader
- SectionCard
- EditFormPage (with FormSection + StickyActionBar)
- DataTablePage (with FilterBar + pagination)

## Phase 2 (1–2 weeks): Quality gates
- Storybook stories required for new blocks.
- Add a11y checks (axe) for key screens.
- Add visual regression (Chromatic or Playwright screenshots) for top flows.

## Phase 3 (ongoing): Expand by demand
- Only add blocks when they are reused in 2+ projects.
- Keep primitives thin; focus investment on blocks.

## Definition of Done (UI)
- Typecheck + lint pass
- States implemented (loading/empty/error/success)
- A11y pass for key interactions
- Story exists for block + states
