# Changelog

All notable changes to this project will be documented here.

## [1.0.0] - 2026-04-13
### Added
- Demo videos for Sydny and Cerebra (looping MP4 playback in project panel)
- Favicon using avatar image
- Phone number link in social icons

### Changed
- VideoPlayer: fixed playback continuity on hover/click with IntersectionObserver visibility tracking, src change effect, and key prop
- TwoPanel: fixed unnecessary scroll trigger when already on projects section
- SocialIcons: replaced resume link with phone, hardcoded email, removed env var dependency
- SEO metadata description updated to reflect actual content
- README rewritten from boilerplate to actual project documentation
- AboutMeLeft: new description — LLM tools, dev utilities, mobile apps
- AboutMeRight: updated internship line and "haven't looked back" copy
- Sydny: updated shortDesc, intro, and all three key highlights (removed wake word references)
- Cerebra: updated shortDesc, intro, and all three key highlights (removed inaccurate positioning claim)
- Blog summaries updated for Sydny and Cerebra

### Removed
- Fly project from projects and dev blog
- Resume icon from social icons
- `.env.local` (email hardcoded directly)

### Fixed
- Non-null assertion on `activeId` in DevBlogRight
- `target="_blank"` and `rel` on placeholder `#` link in SocialIcons
- Mobile: wrong right panel shown when switching sections (e.g. About → Dev Blog)
- Mobile: scroll position not restored after pressing Back from right panel
- Mobile: nav scroll interrupted by layout shift when going from About to Dev Blog
- Mobile: oversized padding, text, avatar, video height, and stats grid on small screens
- DevBlogRight: full post title missing mobile-responsive text size
- SkillsModal: padding and card sizes not responsive on mobile

### Refactored
- Extracted `FADE_TOP`/`FADE_BOTTOM` gradient constants to `utils/gradients.ts`
- Extracted `NAME` and `AVATAR` constants in `ProfileCard`
- Deduplicated blog post metadata header in `DevBlogRight`
- Replaced repeated inline style objects with named constants in `ProjectsRight`
- Removed nested `portfolio-website/.gitignore`, merged rules into root
- Added comments to non-obvious logic across `TwoPanel`, `VideoPlayer`, `TechStackFooter`, and `globals.css`

## [0.2.0] - 2026-04-09
### Added
- Dev blog section wired into layout

### Changed
- UI overhaul with security hardening and performance improvements
- Dark mode color overhaul with deep slate theme
- Scroll-based navigation with auto right panel sync
- Restructured folder layout and removed unnecessary comments

## [0.1.0] - 2025-12-21
### Added
- Initial project setup with Next.js, React, TypeScript, Tailwind CSS
- Navigation and layout
- Profile card and social icons
- Tech footer
- Page transitions and glass effects
- About section
- Interactive experience timeline and detail panel
- Skills modal with grouped display
- Project cards with selection and detail panel
