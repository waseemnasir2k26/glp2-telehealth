# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of glp2-telehealth — "VitalPath", a Next.js 14 + TypeScript + Tailwind + Framer Motion demo site for a GLP-2 weight-management telehealth brand.
- Status: public, single commit from 2026-02-18 (initial commit), untouched since. Covers marketing pages, four legal pages (privacy, terms, telehealth consent, HIPAA notice), a 6-step assessment wizard, a patient portal and an admin portal, all running on mock data in `lib/mock-data.ts` and `lib/admin-data.ts`. No backend, no database, no auth provider.
- Reviewed September 2026: docs refreshed, `## Status` line added to README, changelog started, versioned as v2026.09 with the package version bumped. No application code was changed.
- Known gaps: demo credentials are published in plain text in the README and the portals are mock-only, so this repo should not be treated as a deployable product; no LICENSE file (README says "demo project, all rights reserved"); no tests, no CI, and no CHANGELOG before this release; README shows a "Demo Live" badge but states no live URL.
- Compliance wording (HIPAA badges, LegitScript placeholders, state licensing disclaimers) is demo copy only and was not reviewed or verified against any regulation in this pass.
