# Content Checklist

Every placeholder in `src/data/` and `src/sections/` that must be replaced with real content.

> **Important — no image fields exist yet.** The data files currently store only *labels* (`screenshotLabel`, `imageLabel`, `screenshots[].label`). The `ImagePlaceholder` component draws a grey box from that label; it never loads a file. When you add real images you must also add an `image` field to the data file and update the card component to render `<img>` instead of `ImagePlaceholder`. This checklist tells you the field name to add and the exact path to save to.

---

## 1. Hero

**Source:** `src/sections/Hero.jsx`, `src/data/navigation.js`

### Placeholder texts
- [ ] `src/sections/Hero.jsx:35-36` — professional introduction paragraph: *"Placeholder professional introduction. Two to three sentences summarizing academic focus, software development interests, and career direction as an aspiring software developer."* (hardcoded JSX, not in a data file)
- [ ] `src/data/navigation.js` → `profile.linkedin` — currently `"https://www.linkedin.com/"` (generic homepage, not your profile)
- [ ] `src/data/navigation.js` → `profile.cvPath` — `"/curriculum-vitae.pdf"`; file does not exist in `public/` yet

### Verified-real (no change needed)
- `profile.fullName` = "Ma. Anne Phaula A. Briol"
- `profile.degree`, `profile.school`, `profile.email`, `profile.github`

### Placeholder images
- [ ] None currently. **Optional addition:** a profile photo — 800 x 800 px, JPG, save to `src/assets/images/profile/profile-photo.jpg`, reference via a new `profile.photo` field in `src/data/navigation.js`.

### Placeholder data entries
- [ ] 1 intro paragraph. Prepare: 2–3 sentences on academic focus, development interests, career direction.

---

## 2. About

**Source:** `src/sections/About.jsx` (no data file — text is hardcoded in JSX)

### Placeholder texts
- [ ] `src/sections/About.jsx:11-13` — paragraph 1: *"Placeholder introduction describing academic background at Mapúa Malayan Colleges Laguna and the areas of information technology that hold the most interest."*
- [ ] `src/sections/About.jsx:15-17` — paragraph 2: *"Placeholder statement about software development experience gained through coursework and projects, followed by career aspirations after graduation."*

### Placeholder images
- [ ] None.

### Placeholder data entries
- [ ] 2 paragraphs. Prepare: ~3–4 sentences each.

---

## 3. Skills

**Source:** `src/sections/Skills.jsx`, `src/data/skills.js`

### Placeholder texts
All in `src/data/skills.js`, inside `skillCategories[].skills`:

- [ ] `languages` → `"Placeholder Language 1"`
- [ ] `languages` → `"Placeholder Language 2"`
- [ ] `languages` → `"Placeholder Language 3"`
- [ ] `languages` → `"Placeholder Language 4"`
- [ ] `frameworks` → `"Placeholder Framework 1"`
- [ ] `frameworks` → `"Placeholder Framework 2"`
- [ ] `frameworks` → `"Placeholder Library 1"`
- [ ] `frameworks` → `"Placeholder Library 2"`
- [ ] `tools` → `"Placeholder Tool 1"`
- [ ] `tools` → `"Placeholder Tool 2"`
- [ ] `tools` → `"Placeholder Tool 3"`
- [ ] `databases` → `"Placeholder Database 1"`
- [ ] `databases` → `"Placeholder Database 2"`
- [ ] `databases` → `"Placeholder Database 3"`
- [ ] `version-control` → `"Placeholder VCS 1"`
- [ ] `version-control` → `"Placeholder VCS 2"`

Category `title` values ("Programming Languages", "Frameworks & Libraries", "Development Tools", "Database Technologies", "Version Control") are real — keep unless you want to rename.

### Placeholder images
- [ ] None. Skills render as text badges (`SkillBadge`).

### Placeholder data entries
- [ ] 16 placeholder skills across 5 categories. Prepare: real skill names only (plain strings). You may add or remove entries freely — the grid adapts.

---

## 4. Journey (College Journey)

**Source:** `src/sections/Journey.jsx`, `src/data/journey.js`, rendered by `src/components/TimelineItem.jsx`

### Placeholder texts
Per entry in `src/data/journey.js`:

**`first-year`**
- [ ] `period` — "Placeholder School Year"
- [ ] `summary` — "Placeholder summary of the foundation year and the core computing subjects taken."
- [ ] `milestones[0]` — "Placeholder major subject completed"
- [ ] `milestones[1]` — "Placeholder introductory programming project"
- [ ] `milestones[2]` — "Placeholder skill gained"
- [ ] `achievements[0]` — "Placeholder achievement or recognition"

**`second-year`**
- [ ] `period` — "Placeholder School Year"
- [ ] `summary` — "Placeholder summary of the year focused on data structures and application development."
- [ ] `milestones[0]` — "Placeholder major subject completed"
- [ ] `milestones[1]` — "Placeholder software project delivered"
- [ ] `milestones[2]` — "Placeholder skill gained"
- [ ] `achievements[0]` — "Placeholder achievement or recognition"

**`third-year`**
- [ ] `period` — "Placeholder School Year"
- [ ] `summary` — "Placeholder summary of the year focused on systems, databases, and team-based development."
- [ ] `milestones[0]` — "Placeholder major subject completed"
- [ ] `milestones[1]` — "Placeholder team project delivered"
- [ ] `milestones[2]` — "Placeholder skill gained"
- [ ] `achievements[0]` — "Placeholder achievement or recognition"

**`fourth-year`**
- [ ] `period` — "Placeholder School Year"
- [ ] `summary` — "Placeholder summary of the capstone year and on-the-job training."
- [ ] `milestones[0]` — "Placeholder major subject completed"
- [ ] `milestones[1]` — "Placeholder capstone milestone"
- [ ] `milestones[2]` — "Placeholder skill gained"
- [ ] `achievements[0]` — "Placeholder achievement or recognition"

`year` values ("First Year"…"Fourth Year") are real.

### Placeholder images
- [ ] None. Timeline is text-only.

### Placeholder data entries
- [ ] 4 year entries × (1 period + 1 summary + 3 milestones + 1 achievement) = 24 strings. Prepare per year: school year range (e.g. "2022–2023"), a 1–2 sentence summary, 3 milestones, at least 1 achievement.

> **Note:** `milestones` and `achievements` use the string itself as the React `key`. Duplicate strings within the same list will warn — keep each entry unique.

---

## 5. Software Developed (Projects)

**Source:** `src/sections/Projects.jsx`, `src/data/projects.js`, rendered by `src/components/ProjectCard.jsx`

### Placeholder texts
All in `src/data/projects.js`. Every one of the 8 projects has the same 4 placeholder groups:

**First Year — `y1-p1`**
- [ ] `name` — "Placeholder Project One"
- [ ] `description` — "Placeholder description of the project purpose and the problem it solves."
- [ ] `features[0..2]` — 3 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**First Year — `y1-p2`**
- [ ] `name` — "Placeholder Project Two"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..1]` — 2 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Second Year — `y2-p1`**
- [ ] `name` — "Placeholder Project Three"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..2]` — 3 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Second Year — `y2-p2`**
- [ ] `name` — "Placeholder Project Four"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..1]` — 2 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Third Year — `y3-p1`**
- [ ] `name` — "Placeholder Project Five"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..2]` — 3 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Third Year — `y3-p2`**
- [ ] `name` — "Placeholder Project Six"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..1]` — 2 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Fourth Year — `y4-p1`**
- [ ] `name` — "Placeholder Project Seven"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..2]` — 3 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

**Fourth Year — `y4-p2`**
- [ ] `name` — "Placeholder Project Eight"
- [ ] `description` — "Placeholder description…"
- [ ] `features[0..1]` — 2 × "Placeholder feature"
- [ ] `software[0..1]` — 2 × "Placeholder Software"

> **Note:** `features` and `software` also key on the string. The current duplicates ("Placeholder feature" twice in the same array) already trigger React key warnings — real unique values fix this.

### Placeholder images
8 project screenshot boxes, one per project. Card slot is `aspect-video` (16:9), max rendered width ~560 px on desktop — export at 2× for sharpness.

| # | What the image should be | Dimensions | Format | Save path | Field to add |
|---|---|---|---|---|---|
| 1 | GUI screenshot of 1st Year Project 1 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/1st-year/project-1-main.png` | `y1-p1.image` (replaces use of `screenshotLabel`) |
| 2 | GUI screenshot of 1st Year Project 2 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/1st-year/project-2-main.png` | `y1-p2.image` |
| 3 | GUI screenshot of 2nd Year Project 1 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/2nd-year/project-1-main.png` | `y2-p1.image` |
| 4 | GUI screenshot of 2nd Year Project 2 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/2nd-year/project-2-main.png` | `y2-p2.image` |
| 5 | GUI screenshot of 3rd Year Project 1 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/3rd-year/project-1-main.png` | `y3-p1.image` |
| 6 | GUI screenshot of 3rd Year Project 2 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/3rd-year/project-2-main.png` | `y3-p2.image` |
| 7 | GUI screenshot of 4th Year Project 1 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/4th-year/project-1-main.png` | `y4-p1.image` |
| 8 | GUI screenshot of 4th Year Project 2 (main window) | 1280 × 720 | PNG | `src/assets/images/projects/4th-year/project-2-main.png` | `y4-p2.image` |

- [ ] Project 1 screenshot
- [ ] Project 2 screenshot
- [ ] Project 3 screenshot
- [ ] Project 4 screenshot
- [ ] Project 5 screenshot
- [ ] Project 6 screenshot
- [ ] Project 7 screenshot
- [ ] Project 8 screenshot

Also update `screenshotLabel` on each project — it becomes the `alt` text once real images render (currently all say "Project Screenshot"; use e.g. "Inventory System dashboard").

### Placeholder data entries
- [ ] **2 placeholder projects per year × 4 years = 8 projects minimum.** Prepare per project: project name, 1–2 sentence description, features list (2–3 bullets), software used (2+ items), and 1 GUI screenshot (the card shows exactly one; if you want 2–3 views per project, add an `images` array and update `ProjectCard.jsx` to render a gallery).

---

## 6. Capstone

**Source:** `src/sections/Capstone.jsx`, `src/data/capstone.js`

### Placeholder texts
All in `src/data/capstone.js`:
- [ ] `title` — "Placeholder Capstone Project Title"
- [ ] `overview` — "Placeholder overview of the capstone project. Describe the problem addressed, the intended users, and the outcome in two to four sentences."
- [ ] `features[0..3]` — 4 × "Placeholder key feature"
- [ ] `software[0..2]` — 3 × "Placeholder Software"
- [ ] `hardware[0..2]` — 3 × "Placeholder Hardware"
- [ ] `screenshots[0].label` — "Dashboard Screenshot"
- [ ] `screenshots[1].label` — "Module Screenshot"
- [ ] `screenshots[2].label` — "Reports Screenshot"
- [ ] `screenshots[3].label` — "Settings Screenshot"

`year` = "Fourth Year" is real. Section intro *"The primary academic achievement of the program."* (`src/sections/Capstone.jsx:14`) is real copy — edit only if you want.

### Placeholder images
4 boxes, `aspect-4/3`, rendered ~2-per-row in a half-width column (~260 px each) — export at 2×.

| # | What the image should be | Dimensions | Format | Save path | Field to add |
|---|---|---|---|---|---|
| 1 | Capstone dashboard / landing screen | 1024 × 768 | PNG | `src/assets/images/capstone/capstone-dashboard.png` | `capstone.screenshots[0].image` (`id: "cap-1"`) |
| 2 | Capstone core module screen | 1024 × 768 | PNG | `src/assets/images/capstone/capstone-module.png` | `capstone.screenshots[1].image` (`id: "cap-2"`) |
| 3 | Capstone reports / analytics screen | 1024 × 768 | PNG | `src/assets/images/capstone/capstone-reports.png` | `capstone.screenshots[2].image` (`id: "cap-3"`) |
| 4 | Capstone settings / admin screen | 1024 × 768 | PNG | `src/assets/images/capstone/capstone-settings.png` | `capstone.screenshots[3].image` (`id: "cap-4"`) |

- [ ] Dashboard screenshot
- [ ] Module screenshot
- [ ] Reports screenshot
- [ ] Settings screenshot

If your capstone has hardware, also consider a photo: 1600 × 1200, JPG, `src/assets/images/capstone/capstone-hardware.jpg`.

### Placeholder data entries
- [ ] 1 capstone project. Prepare: title, 2–4 sentence overview (problem, users, outcome), 4 key features, 3+ software items, 3+ hardware items, 4 screenshots. The screenshots grid takes any count — add or remove entries as needed.

---

## 7. Certificates

**Source:** `src/sections/Certificates.jsx`, `src/data/certificates.js`, rendered by `src/components/CertificateCard.jsx`

### Placeholder texts
All in `src/data/certificates.js` — 6 entries, each with 4 placeholder fields:

- [ ] `cert-1` — `title` "Placeholder Certificate Title One", `organization` "Placeholder Issuing Organization", `date` "Placeholder Date", `imageLabel` "Certificate Image"
- [ ] `cert-2` — `title` "Placeholder Certificate Title Two", `organization`, `date`, `imageLabel`
- [ ] `cert-3` — `title` "Placeholder Certificate Title Three", `organization`, `date`, `imageLabel`
- [ ] `cert-4` — `title` "Placeholder Certificate Title Four", `organization`, `date`, `imageLabel`
- [ ] `cert-5` — `title` "Placeholder Certificate Title Five", `organization`, `date`, `imageLabel`
- [ ] `cert-6` — `title` "Placeholder Certificate Title Six", `organization`, `date`, `imageLabel`

### Placeholder images
6 boxes, `aspect-4/3`, ~370 px wide on desktop. Scans of certificates — JPG keeps file size down for photographed/scanned documents.

| # | What the image should be | Dimensions | Format | Save path | Field to add |
|---|---|---|---|---|---|
| 1 | Scan/photo of certificate 1 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-1.jpg` | `cert-1.image` |
| 2 | Scan/photo of certificate 2 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-2.jpg` | `cert-2.image` |
| 3 | Scan/photo of certificate 3 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-3.jpg` | `cert-3.image` |
| 4 | Scan/photo of certificate 4 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-4.jpg` | `cert-4.image` |
| 5 | Scan/photo of certificate 5 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-5.jpg` | `cert-5.image` |
| 6 | Scan/photo of certificate 6 | 1200 × 900 | JPG | `src/assets/images/certificates/certificate-6.jpg` | `cert-6.image` |

- [ ] Certificate 1 image
- [ ] Certificate 2 image
- [ ] Certificate 3 image
- [ ] Certificate 4 image
- [ ] Certificate 5 image
- [ ] Certificate 6 image

Prefer descriptive filenames over numbers once you know the certificates, e.g. `cisco-networking-essentials.jpg`.

### Placeholder data entries
- [ ] 6 placeholder certificates. Prepare per certificate: title, issuing organization, date awarded, 1 scan/photo. Grid is `sm:2 / lg:3` columns — multiples of 6 look tidiest, but any count works.

---

## 8. Seminars

**Source:** `src/sections/Seminars.jsx`, `src/data/seminars.js`, rendered by `src/components/SeminarCard.jsx`

### Placeholder texts
All in `src/data/seminars.js` — 6 entries, each with 4 placeholder fields:

- [ ] `sem-1` — `title` "Placeholder Seminar Title One", `organizer` "Placeholder Organizer", `date` "Placeholder Date", `description` "Placeholder short description of the seminar topic and key takeaway."
- [ ] `sem-2` — `title` "Placeholder Seminar Title Two", `organizer`, `date`, `description`
- [ ] `sem-3` — `title` "Placeholder Seminar Title Three", `organizer`, `date`, `description`
- [ ] `sem-4` — `title` "Placeholder Seminar Title Four", `organizer`, `date`, `description`
- [ ] `sem-5` — `title` "Placeholder Seminar Title Five", `organizer`, `date`, `description`
- [ ] `sem-6` — `title` "Placeholder Seminar Title Six", `organizer`, `date`, `description`

### Placeholder images
- [ ] None. `SeminarCard` is text-only (no `ImagePlaceholder`). **Optional:** if you want seminar photos or certificates of attendance, add an `image` field and an `<img>` to `SeminarCard.jsx` — 1200 × 900, JPG, `src/assets/images/seminars/[seminar-name].jpg`.

### Placeholder data entries
- [ ] 6 placeholder seminars. Prepare per seminar: title, organizer, date attended, 1–2 sentence description with the key takeaway.

---

## 9. Contact

**Source:** `src/sections/Contact.jsx`, `src/data/navigation.js`

### Placeholder texts
- [ ] `src/sections/Contact.jsx:28` — `contactMethods` LinkedIn entry, `value: "Placeholder LinkedIn Profile"` → replace with your handle, e.g. `"linkedin.com/in/your-handle"`
- [ ] `src/data/navigation.js` → `profile.linkedin` — `"https://www.linkedin.com/"` → your actual profile URL (same field as Hero/Footer; fix once, applies everywhere)

### Verified-real (no change needed)
- Email value/link pulls from `profile.email` = `ma.phaula.briol@gmail.com`
- GitHub value `"github.com/mapa-briol23"` (hardcoded, `src/sections/Contact.jsx:20`) and `profile.github`
- Section intro *"Open to internship and entry-level software development opportunities."* (`src/sections/Contact.jsx:41`)

### Placeholder images
- [ ] None. Icons are Lucide/inline SVG.

### Placeholder data entries
- [ ] 3 contact methods (email, GitHub, LinkedIn) — only LinkedIn needs real data.

---

## 10. Footer

**Source:** `src/layouts/Footer.jsx`, `src/data/navigation.js`

### Placeholder texts
- [ ] `src/layouts/Footer.jsx:8` — LinkedIn social link uses `profile.linkedin` (same placeholder URL as above)
- [ ] `src/layouts/Footer.jsx:40` — copyright year is hardcoded `"© 2026 Ma. Anne Phaula A. Briol"`. Name is real; confirm the year, and consider `new Date().getFullYear()` so it doesn't go stale.

### Verified-real (no change needed)
- `profile.fullName`, `profile.degree`, `profile.school`
- Nav links from `navItems` in `src/data/navigation.js`

### Placeholder images
- [ ] None.
- [ ] `public/favicon.svg` exists (Vite default) — replace with your own mark if desired.

### Placeholder data entries
- [ ] None beyond the shared `profile.linkedin` fix.

---

## Documents Checklist

- [ ] **Curriculum Vitae PDF**
  - **Save to:** `public/curriculum-vitae.pdf`
  - **Referenced by:** `src/data/navigation.js` → `profile.cvPath` (`"/curriculum-vitae.pdf"`), consumed in `src/sections/Hero.jsx:40` by the "Download CV" `Button`
  - **Why `public/` and not `src/assets/documents/`:** `cvPath` is an absolute URL path (`/curriculum-vitae.pdf`), which Vite resolves against `public/` only. `CLAUDE.md` §9 suggests `assets/documents/` — to follow that instead, you must `import cvUrl from "../assets/documents/curriculum-vitae.pdf"` and pass the imported URL rather than a string path. **Simpler option: use `public/`.**
  - **Status:** file does not exist yet; the button currently 404s.
  - **Note:** `src/assets/documents/`, `src/assets/icons/`, and `src/assets/images/` all exist but are empty.

---

## Image Naming Convention

Pattern: all lowercase, hyphen-separated, descriptive, no spaces or ID numbers from your camera.

| Category | Pattern | Example |
|---|---|---|
| Projects | `src/assets/images/projects/[n]-year/[project-name]-[view].png` | `src/assets/images/projects/1st-year/inventory-system-dashboard.png` |
| Capstone | `src/assets/images/capstone/capstone-[view].png` | `src/assets/images/capstone/capstone-dashboard.png` |
| Certificates | `src/assets/images/certificates/[organization]-[certificate-name].jpg` | `src/assets/images/certificates/cisco-networking-essentials.jpg` |
| Seminars (optional) | `src/assets/images/seminars/[seminar-name].jpg` | `src/assets/images/seminars/ai-in-software-engineering.jpg` |
| Profile (optional) | `src/assets/images/profile/profile-photo.jpg` | `src/assets/images/profile/profile-photo.jpg` |

Year folders: `1st-year`, `2nd-year`, `3rd-year`, `4th-year`.
`[view]` values: `main`, `dashboard`, `login`, `reports`, `settings`.

Format rule: **PNG** for GUI screenshots (crisp text, flat colors). **JPG** for scans and photographs (smaller files, no visible loss).

---

## Data File Quick Reference

### `src/data/navigation.js`

`navItems` — array of nav links (structural; do not edit unless adding a section).

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Must match a section's `id` prop for scroll-spy to work |
| `label` | string | Required | Text shown in the navbar |

`profile` — single object, used by Hero, Contact, and Footer.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `fullName` | string | Required | Your full name as it should appear in the hero and footer |
| `degree` | string | Required | Degree program name |
| `school` | string | Required | School name |
| `email` | string | Required | Contact email; becomes a `mailto:` link |
| `github` | string (URL) | Required | Full GitHub profile URL |
| `linkedin` | string (URL) | Required | Full LinkedIn profile URL — **currently placeholder** |
| `cvPath` | string (path) | Required | Public path to the CV PDF |
| `photo` | imported image | Optional | Profile photo, if you add one |

### `src/data/skills.js`

`skillCategories` — array of category objects.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug, used as the React key |
| `title` | string | Required | Category heading on the card |
| `skills` | string[] | Required | Skill names; each string is also its own React key, so keep them unique |

### `src/data/journey.js`

`journey` — array of academic-year objects.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug (`first-year`…) |
| `year` | string | Required | Year label shown as the card heading |
| `period` | string | Required | School year range, e.g. "2022–2023" |
| `summary` | string | Required | 1–2 sentences on that year's focus |
| `milestones` | string[] | Required | Bulleted milestones; unique strings (used as keys) |
| `achievements` | string[] | Required | Awards/recognitions; unique strings. Renders an empty "Achievements" heading if the array is empty — use at least one entry or remove the block |

### `src/data/projects.js`

`projectGroups` — array of year groups, each holding `projects`.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Group slug (`first-year`…) |
| `year` | string | Required | Year heading above the project grid |
| `projects` | object[] | Required | Project entries (below) |

`projectGroups[].projects[]`:

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug (`y1-p1`…), React key |
| `name` | string | Required | Project title |
| `description` | string | Required | 1–2 sentences: purpose and problem solved |
| `features` | string[] | Required | Feature bullets; unique strings (used as keys) |
| `software` | string[] | Required | Tech/tools used; rendered as tags |
| `screenshotLabel` | string | Required | Placeholder box caption today; becomes `alt` text once a real image is wired |
| `image` | imported image | **To add** | The GUI screenshot; requires editing `ProjectCard.jsx` |

### `src/data/capstone.js`

`capstone` — single object.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `title` | string | Required | Capstone project title |
| `year` | string | Required | Academic year label ("Fourth Year") |
| `overview` | string | Required | 2–4 sentences: problem, users, outcome |
| `features` | string[] | Required | Key features; unique strings (used as keys) |
| `software` | string[] | Required | Software stack, rendered as tags |
| `hardware` | string[] | Required | Hardware used, rendered as tags. Remove the `TagList` in `Capstone.jsx:48` if your capstone has no hardware |
| `screenshots` | object[] | Required | Screenshot entries (below) |

`capstone.screenshots[]`:

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug (`cap-1`…), React key |
| `label` | string | Required | Box caption today; becomes `alt` text once wired |
| `image` | imported image | **To add** | The screenshot; requires editing `Capstone.jsx` |

### `src/data/certificates.js`

`certificates` — flat array.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug, React key |
| `title` | string | Required | Certificate name |
| `organization` | string | Required | Issuing organization |
| `date` | string | Required | Date awarded, e.g. "March 2024" |
| `imageLabel` | string | Required | Box caption today; becomes `alt` text once wired |
| `image` | imported image | **To add** | Scan/photo; requires editing `CertificateCard.jsx` |

### `src/data/seminars.js`

`seminars` — flat array.

| Field | Type | Req. | What to put |
|---|---|---|---|
| `id` | string | Required | Unique slug, React key |
| `title` | string | Required | Seminar title |
| `organizer` | string | Required | Hosting organization |
| `date` | string | Required | Date attended |
| `description` | string | Required | 1–2 sentences: topic and key takeaway |
| `image` | imported image | Optional | Only if you add photos to `SeminarCard.jsx` |

---

## Replacement Instructions

### A. Replacing a text placeholder in a data file
1. Open the data file listed in the section above (e.g. `src/data/skills.js`).
2. Find the field named in the checklist and replace the string. Keep the quotes and trailing comma.
3. Leave `id` fields alone — they are React keys and, for `navItems`, must match section IDs.
4. Ensure strings inside `features`, `milestones`, `software`, and `skills` arrays are **unique within their array** — React keys on those lists are the strings themselves.
5. Run `npm run dev` and check the section in the browser.

### B. Replacing a text placeholder hardcoded in JSX
Applies to About (both paragraphs), the Hero intro, and the Contact LinkedIn `value`.
1. Open the `.jsx` file at the line number given in the checklist.
2. Replace the text between the tags. Keep the surrounding JSX and `className` intact.
3. If the text contains an apostrophe or a brace, it still works inside a JSX text node — no escaping needed for `'`. Braces `{}` must be written as `{"{"}`.
4. Run `npm run dev` and verify.

### C. Replacing a placeholder image (full procedure)
Images need a code change too, because no `image` fields exist yet.

1. **Save the file** to the exact path in the section's image table, at the listed dimensions and format. Create the folder if it does not exist (e.g. `src/assets/images/projects/1st-year/`).
2. **Compress it** before committing (TinyPNG, Squoosh, or similar). Aim for under 300 KB per screenshot. `CLAUDE.md` §11 requires optimized images.
3. **Import it in the data file** at the top, and add the `image` field to the entry:
   ```js
   import project1Main from "../assets/images/projects/1st-year/project-1-main.png";

   // …inside the project object:
   {
     id: "y1-p1",
     name: "Inventory System",
     screenshotLabel: "Inventory System dashboard", // becomes alt text
     image: project1Main,
     // …
   }
   ```
   Import the image — do not write the path as a string. Vite only hashes and bundles imported assets; a raw string path under `src/` breaks in the production build.
4. **Update the card component** to render the image when present and fall back to the placeholder when it is not. In `src/components/ProjectCard.jsx`, replace line 8:
   ```jsx
   {project.image ? (
     <img
       src={project.image}
       alt={project.screenshotLabel}
       loading="lazy"
       className="aspect-video w-full rounded-xl border border-line object-cover"
     />
   ) : (
     <ImagePlaceholder label={project.screenshotLabel} className="aspect-video w-full" />
   )}
   ```
   The same pattern applies to `CertificateCard.jsx` (line 7, `aspect-4/3`) and `Capstone.jsx` (lines 53–59, `aspect-4/3`). The conditional keeps unfinished sections rendering cleanly while you work through the list.
5. **Verify:** `npm run dev`, then check the image loads, is not stretched, and the layout still holds at mobile width.
6. Once every image in a category is wired, you can drop the `ImagePlaceholder` fallback and, if nothing else uses it, delete `src/components/ImagePlaceholder.jsx` (`CLAUDE.md` §15: no unnecessary code remains).

### D. Adding the CV
1. Save your PDF as `public/curriculum-vitae.pdf` (exact filename — `profile.cvPath` points at `/curriculum-vitae.pdf`).
2. No code change needed if the filename matches.
3. Run `npm run dev`, click "Download CV" in the hero, confirm the PDF downloads.

### E. Final check before deploying
1. `npm run build` — must succeed with no missing-import errors.
2. `npm run preview` — click through every section.
3. Search the whole project for leftovers: `grep -ri "placeholder" src/` should return only `ImagePlaceholder` component references, nothing else.
4. Check the browser console for React duplicate-key warnings, which mean two identical strings in the same array.
5. Test at mobile width (375 px) — no horizontal scrolling (`CLAUDE.md` §10).
