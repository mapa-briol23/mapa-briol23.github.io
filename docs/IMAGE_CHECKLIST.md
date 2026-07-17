# Image Checklist

Tracks every image/asset reference across `src/data/`, `src/sections/`, and `src/components/`.

Currently **all image slots render through `ImagePlaceholder`** — no real image is imported yet. Each entry below shows exactly where to save the file and how to wire it in.

Aspect ratios come from the component that renders the slot:
- Project cards: `aspect-video` (16:9) — `src/components/ProjectCard.jsx:11`
- Capstone screenshots: `aspect-4/3` (4:3) — `src/sections/Capstone.jsx:72`
- Certificates: `aspect-4/3` (4:3), rendered ~200px wide — `src/sections/Certificates.jsx:30`

Recommended dimensions are ~2x the rendered size for sharpness on retina displays.

**Accepted formats for every image below: PNG, JPG, or WEBP.**

---

## 1. Projects Developed (6 projects — 1 screenshot each)

Data file: `src/data/projects.js` (`export const projectGroups`)
Rendered by: `src/components/ProjectCard.jsx` via `project.screenshotLabel`

To wire a real image: add an `import`, then add an `image` field to the project and update the card to use it (card change is a separate step — see the wiring note at the end).

### [ ] 1.1 — R-EaseCite
- **What it is:** R-EaseCite mobile app main-screen screenshot
- **Where to save the file:** `src/assets/images/projects/r-easecite-main.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y1-p1` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import rEaseciteMain from "../assets/images/projects/r-easecite-main.png";
  // inside project y1-p1:
  image: rEaseciteMain,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 1.2 — Console-Based Cryptography Program
- **What it is:** Cryptography console program interface screenshot
- **Where to save the file:** `src/assets/images/projects/cryptography-program.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y1-p2` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import cryptographyProgram from "../assets/images/projects/cryptography-program.png";
  // inside project y1-p2:
  image: cryptographyProgram,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 1.3 — CareBy
- **What it is:** CareBy counseling appointment dashboard screenshot
- **Where to save the file:** `src/assets/images/projects/careby-dashboard.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y2-p1` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import carebyDashboard from "../assets/images/projects/careby-dashboard.png";
  // inside project y2-p1:
  image: carebyDashboard,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 1.4 — CCIS Event Enlistment App
- **What it is:** CCIS department event enlistment mobile app screenshot
- **Where to save the file:** `src/assets/images/projects/ccis-event-enlistment.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y2-p2` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import ccisEventEnlistment from "../assets/images/projects/ccis-event-enlistment.png";
  // inside project y2-p2:
  image: ccisEventEnlistment,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 1.5 — Kawayan Villas Website Prototype
- **What it is:** Kawayan Villas booking prototype screenshot
- **Where to save the file:** `src/assets/images/projects/kawayan-villas-prototype.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y3-p1` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import kawayanVillasPrototype from "../assets/images/projects/kawayan-villas-prototype.png";
  // inside project y3-p1:
  image: kawayanVillasPrototype,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 1.6 — Why-Pii (Capstone project card)
- **What it is:** Why-Pii dashboard screenshot (project-card thumbnail)
- **Where to save the file:** `src/assets/images/projects/why-pii-dashboard.png`
- **Where it's referenced:** `src/data/projects.js` → project id `y4-p1` → `screenshotLabel` field
- **How to connect it:**
  ```js
  import whyPiiDashboard from "../assets/images/projects/why-pii-dashboard.png";
  // inside project y4-p1:
  image: whyPiiDashboard,
  ```
- **Recommended dimensions:** 1280 x 720 px (16:9)
- **Accepted formats:** PNG, JPG, or WEBP
- **Note:** This is the small card thumbnail. The large capstone screenshots are section 2 below.

---

## 2. Capstone Project (4 screenshots)

Data file: `src/data/capstone.js` (`export const capstone` → `screenshots` array)
Rendered by: `src/sections/Capstone.jsx:72` via `screenshot.label`

### [ ] 2.1 — Dashboard
- **What it is:** Why-Pii capstone dashboard screenshot
- **Where to save the file:** `src/assets/images/capstone/why-pii-dashboard.png`
- **Where it's referenced:** `src/data/capstone.js` → `screenshots` id `cap-1` → `label` field
- **How to connect it:**
  ```js
  import capDashboard from "../assets/images/capstone/why-pii-dashboard.png";
  // inside screenshots cap-1:
  { id: "cap-1", label: "Dashboard", image: capDashboard },
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 2.2 — Findings & Recommendations
- **What it is:** Why-Pii findings & recommendations screenshot
- **Where to save the file:** `src/assets/images/capstone/why-pii-findings.png`
- **Where it's referenced:** `src/data/capstone.js` → `screenshots` id `cap-2` → `label` field
- **How to connect it:**
  ```js
  import capFindings from "../assets/images/capstone/why-pii-findings.png";
  // inside screenshots cap-2:
  { id: "cap-2", label: "Findings & Recommendations", image: capFindings },
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 2.3 — Captive Portal
- **What it is:** Why-Pii captive portal screenshot
- **Where to save the file:** `src/assets/images/capstone/why-pii-captive-portal.png`
- **Where it's referenced:** `src/data/capstone.js` → `screenshots` id `cap-3` → `label` field
- **How to connect it:**
  ```js
  import capCaptivePortal from "../assets/images/capstone/why-pii-captive-portal.png";
  // inside screenshots cap-3:
  { id: "cap-3", label: "Captive Portal", image: capCaptivePortal },
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 2.4 — Accounts Management
- **What it is:** Why-Pii accounts management screenshot
- **Where to save the file:** `src/assets/images/capstone/why-pii-accounts.png`
- **Where it's referenced:** `src/data/capstone.js` → `screenshots` id `cap-4` → `label` field
- **How to connect it:**
  ```js
  import capAccounts from "../assets/images/capstone/why-pii-accounts.png";
  // inside screenshots cap-4:
  { id: "cap-4", label: "Accounts Management", image: capAccounts },
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

---

## 3. Certificates (5 certificates)

Data file: `src/data/certificates.js` (`export const certificates`)
Rendered by: `src/sections/Certificates.jsx:30` via `certificate.imageLabel`

### [ ] 3.1 — Google Cloud Computing Foundations
- **What it is:** Google Cloud Computing Foundations certificate image
- **Where to save the file:** `src/assets/images/certificates/google-cloud-foundations.png`
- **Where it's referenced:** `src/data/certificates.js` → id `cert-1` → `imageLabel` field
- **How to connect it:**
  ```js
  import googleCloudFoundations from "../assets/images/certificates/google-cloud-foundations.png";
  // inside cert-1:
  image: googleCloudFoundations,
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 3.2 — CompTIA Tech+
- **What it is:** CompTIA Tech+ certification image
- **Where to save the file:** `src/assets/images/certificates/comptia-tech-plus.png`
- **Where it's referenced:** `src/data/certificates.js` → id `cert-2` → `imageLabel` field
- **How to connect it:**
  ```js
  import comptiaTechPlus from "../assets/images/certificates/comptia-tech-plus.png";
  // inside cert-2:
  image: comptiaTechPlus,
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 3.3 — Cisco Ethical Hacker
- **What it is:** Cisco Ethical Hacker certificate image
- **Where to save the file:** `src/assets/images/certificates/cisco-ethical-hacker.png`
- **Where it's referenced:** `src/data/certificates.js` → id `cert-3` → `imageLabel` field
- **How to connect it:**
  ```js
  import ciscoEthicalHacker from "../assets/images/certificates/cisco-ethical-hacker.png";
  // inside cert-3:
  image: ciscoEthicalHacker,
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 3.4 — TOEIC Score Report
- **What it is:** TOEIC score report image (935 / 990)
- **Where to save the file:** `src/assets/images/certificates/toeic-score-report.png`
- **Where it's referenced:** `src/data/certificates.js` → id `cert-4` → `imageLabel` field
- **How to connect it:**
  ```js
  import toeicScoreReport from "../assets/images/certificates/toeic-score-report.png";
  // inside cert-4:
  image: toeicScoreReport,
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

### [ ] 3.5 — Cisco CCNA: Introduction to Networks
- **What it is:** Cisco CCNA Introduction to Networks certificate image
- **Where to save the file:** `src/assets/images/certificates/cisco-ccna-intro.png`
- **Where it's referenced:** `src/data/certificates.js` → id `cert-5` → `imageLabel` field
- **How to connect it:**
  ```js
  import ciscoCcnaIntro from "../assets/images/certificates/cisco-ccna-intro.png";
  // inside cert-5:
  image: ciscoCcnaIntro,
  ```
- **Recommended dimensions:** 1200 x 900 px (4:3)
- **Accepted formats:** PNG, JPG, or WEBP

---

## 4. CV PDF (1 file)

Referenced by: `src/data/navigation.js:21` → `profile.cvPath`
Current value: `"/CV - Ma. Anne Phaula A. Briol.pdf"` — served from the **`public/` folder root** (not imported).

### [ ] 4.1 — Curriculum Vitae PDF
- **What it is:** Downloadable Curriculum Vitae
- **Where to save the file:** `public/CV - Ma. Anne Phaula A. Briol.pdf`
- **Where it's referenced:** `src/data/navigation.js` → `profile.cvPath` field
- **How to connect it:** No import needed — files in `public/` are served at the site root. Just save the PDF at the exact filename above so `cvPath` (`/CV - Ma. Anne Phaula A. Briol.pdf`) resolves. If you rename the file, update `cvPath` to match.
- **Recommended dimensions:** N/A (PDF document)
- **Accepted formats:** PDF

---

## How to add an image once you have it

1. **Save the image** to the specified path (e.g. `src/assets/images/projects/r-easecite-main.png`). Create the folder if it doesn't exist.
2. **Open the corresponding data file** (e.g. `src/data/projects.js`).
3. **Add the import statement at the top** of that data file, e.g.
   ```js
   import rEaseciteMain from "../assets/images/projects/r-easecite-main.png";
   ```
4. **Update the entry** to reference the import — add an `image:` field pointing at the imported variable.
5. **Run `npm run dev`** to verify the image loads in place of the placeholder.

> **One-time component step:** the components currently render `ImagePlaceholder` only. To actually show the imported images, each component must be updated to render `project.image` / `screenshot.image` / `certificate.image` when present and fall back to `ImagePlaceholder` when absent. Files: `src/components/ProjectCard.jsx`, `src/sections/Capstone.jsx`, `src/sections/Certificates.jsx`. (Not required to save the files — only to display them.)

---

## Naming convention guide

| Category | Folder | Filename pattern | Example |
|----------|--------|------------------|---------|
| Project screenshots | `src/assets/images/projects/` | `<project-slug>.png` | `r-easecite-main.png` |
| Capstone screenshots | `src/assets/images/capstone/` | `why-pii-<view>.png` | `why-pii-dashboard.png` |
| Certificates | `src/assets/images/certificates/` | `<org>-<cert-slug>.png` | `cisco-ccna-intro.png` |
| CV document | `public/` | `CV - <Full Name>.pdf` | `CV - Ma. Anne Phaula A. Briol.pdf` |

Rules: lowercase, hyphen-separated, descriptive (no `IMG1234`). Match the exact path used in the checklist entry so the import resolves.
