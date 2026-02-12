# Specification

## Summary
**Goal:** Add a new Terms of Service page and wire it into routing and navigation immediately after the Payment Method page.

**Planned changes:**
- Create a new Terms of Service page component under `frontend/src/pages` with clear English sections/headings and styling consistent with existing Minecraft-themed UI.
- Add a new route (e.g., `/tos`) that renders the Terms of Service page within the existing `SiteLayout`.
- Update the Payment Method page to include a prominent next-step button/link after existing content that navigates to the Terms of Service page using TanStack Router `<Link>`.
- Update `frontend/src/content/marketingContent.ts` to add a Terms of Service navigation entry placed immediately after the existing `/payment` entry, and include a Terms of Service link in the footer links where appropriate.

**User-visible outcome:** Users can navigate to a new Terms of Service page via a direct `/tos` route, a call-to-action at the bottom of the Payment Method page, and new header/footer navigation links.
