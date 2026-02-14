# Specification

## Summary
**Goal:** Add a suggestions/feedback form that submits entries to the app backend and forwards each submission to a configured Discord channel via webhook.

**Planned changes:**
- Add a new frontend feedback form (required message, optional name/contact), with client-side validation, loading state, and clear success/error messaging in English.
- Implement a Motoko backend API to accept feedback submissions, store them in canister state as an append-only log, and attempt to forward each submission to a Discord webhook.
- Record per-submission delivery status (e.g., sent/failed/pending) and return clear errors when Discord delivery fails.
- Add an admin-only backend method to set/update the Discord webhook URL (not hardcoded in the frontend).
- Wire the frontend form submission to the backend using existing actor patterns and React Query, prevent duplicate rapid submissions while in-flight, and display backend validation/errors gracefully.

**User-visible outcome:** Visitors can submit suggestions/feedback through a form and see a clear success or error result; project owners can configure a Discord webhook so submissions are forwarded to a Discord channel.
