# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- glp2-telehealth is a public Next.js 14 + TypeScript + Tailwind + Framer Motion demo site ('VitalPath', a GLP-2 weight-management telehealth brand) with marketing pages, four legal pages, a 6-step assessment, and patient and admin portals running on mock data.
- State: unchanged since the initial commit in February 2026. No backend, database or auth provider.
- Re-reviewed October 2026: README, file tree and commit history re-read; documentation and version metadata only, no code changes. The only external README link is a placeholder clone URL (github.com/yourusername/...), which is not one of our resources and was left as is.
- Known gaps: demo credentials are published in the README and the portals are mock-only, so this is not a deployable product; compliance wording (HIPAA, LegitScript, state licensing) is demo copy and was not verified; no LICENSE (README says all rights reserved); no tests or CI.

## [2026.09] - 2026-09-16

- Maintenance review of glp2-telehealth — "VitalPath", a Next.js 14 + TypeScript + Tailwind + Framer Motion demo site for a GLP-2 weight-management telehealth brand.
- Status: public, single commit from 2026-02-18 (initial commit), untouched since. Covers marketing pages, four legal pages (privacy, terms, telehealth consent, HIPAA notice), a 6-step assessment wizard, a patient portal and an admin portal, all running on mock data in `lib/mock-data.ts` and `lib/admin-data.ts`. No backend, no database, no auth provider.
- Reviewed September 2026: docs refreshed, `## Status` line added to README, changelog started, versioned as v2026.09 with the package version bumped. No application code was changed.
- Known gaps: demo credentials are published in plain text in the README and the portals are mock-only, so this repo should not be treated as a deployable product; no LICENSE file (README says "demo project, all rights reserved"); no tests, no CI, and no CHANGELOG before this release; README shows a "Demo Live" badge but states no live URL.
- Compliance wording (HIPAA badges, LegitScript placeholders, state licensing disclaimers) is demo copy only and was not reviewed or verified against any regulation in this pass.
