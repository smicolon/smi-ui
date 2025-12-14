# Block Map — Account Settings (example)

## Screen
- Name: Account Settings
- Route: /settings/account

## Blocks (composition)
- AppShell
- PageHeader
- EditFormPage
  - FormSection: Profile
  - FormSection: Preferences
- StickyActionBar

## States (required)
- Loading: SkeletonPage (form skeleton)
- Error: InlineErrorBanner + retry
- Success: toast + optimistic field update

## Actions
- Primary: Save changes
- Secondary: Cancel
- Destructive: Delete account (confirm destructive dialog)

## Motion (presets only)
- Section entry: `stagger`
- Dialog: `modalScale`
