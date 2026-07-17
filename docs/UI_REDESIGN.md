# UI Redesign Specification
# Academic Web Portfolio — Odoo Editorial Style with Gojo Satoru Aesthetic

**Document Purpose:** This file is a complete design specification for Claude Code CLI to redesign the Academic Web Portfolio UI. It should be placed at `docs/UI_REDESIGN.md` in the project repository.

**Usage:** In Claude Code, run:
```
Read docs/UI_REDESIGN.md and implement every specification in this document. Also reference docs/UI_GUIDELINES.md for the existing color palette and typography rules.
```

---

# 1. Design Philosophy

This portfolio must look and feel like a premium editorial design studio website — specifically inspired by the layout, rhythm, and visual storytelling of **design.odoo.com/services/web-design**.

The color palette and atmospheric effects draw subtle inspiration from **Gojo Satoru** — cool blues, ethereal light, and calm elegance. This inspiration must remain **understated**. No anime imagery, character art, or direct references. Visitors should see a professional portfolio first; the Gojo influence is felt only through atmosphere, not iconography.

The design must be **visually distinct** — not a generic portfolio template. It should feel like a one-of-a-kind editorial website that happens to showcase academic work.

---

# 2. Reference: Odoo Design Website Patterns

The following patterns from design.odoo.com must be adapted into this portfolio:

## 2.1 Layout Rhythm
- **Alternating section layouts:** Text-left/visual-right alternates with visual-left/text-right between sections. Never center everything.
- **Asymmetric grids:** Use 55/45 or 60/40 column splits, not 50/50 everywhere.
- **Massive vertical spacing:** Sections use 120–160px vertical padding. Content breathes.
- **Full-width bleeds:** Hero and accent sections extend edge-to-edge. Content sections use a max-width container (~1200px).

## 2.2 Typography (Odoo-Style)
- Hero name: 72–80px, bold, dominant — should fill a large portion of the viewport width.
- Section headings: 48–64px, bold, generous line-height.
- Section labels: Small (12–14px), uppercase, tracked-out (letter-spacing 0.15em), blue (#2563EB) — placed above section headings with a thin horizontal line accent to the left (like Odoo's section markers).
- Body text: 18–20px, line-height 1.7–1.8, secondary text color (#64748B).
- Card titles: 22–24px, semi-bold, primary text color (#0F172A).

## 2.3 Floating Decorative Labels (Odoo Signature Element)
Odoo uses small floating badges with curved SVG arrows pointing toward content. Adapt this pattern:
- Create 2–3 floating annotation badges throughout the portfolio.
- Each badge: small rounded pill (white background, subtle border, shadow), uppercase blue text, paired with a hand-drawn-style curved SVG arrow.
- Example placements:
  - Near the Hero section: a badge saying "BUILT WITH REACT" with an arrow pointing toward the tech description.
  - Near the Capstone section: "FINAL YEAR PROJECT" with an arrow pointing to the capstone card.
  - Near the Contact section: "LET'S CONNECT" with an arrow pointing down toward the contact cards.
- These must feel editorial and playful, not corporate. They are decorative accents, not functional UI.
- On mobile: hide them or reduce size to avoid clutter.

## 2.4 Looping Background Videos / Animated Backgrounds
Odoo uses looping 3D-rendered videos (jellyfish, fish, waves) as ambient section backgrounds. This portfolio does the same in three places, and uses CSS animation everywhere else.

### Background Videos
Three looping MP4s live in `public/videos/` and are mounted by the shared `AmbientVideo` component:

| Section | File | Overlay | Preload |
|---|---|---|---|
| Hero | `hero-bg.mp4` | `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(248,250,252,0.92))` | `auto` |
| CV call-to-action | `section-accent.mp4` | `linear-gradient(to bottom, rgba(15,23,42,0.62), rgba(23,37,84,0.68))` | `none` |
| Footer | `footer-wave.mp4` | `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(248,250,252,0.95))` | `none` |

Each video is `muted`, `loop`, `playsInline`, `object-fit: cover`, and sits at `z-index: -10` beneath its section's content, tinted by the overlay above so text stays readable.

**The overlay must match the footage, not the palette.** The accent clip is near-black, so it takes a dark scrim and white type (`CallToAction` `tone="dark"`) — the one band on the page that inverts. The hero and footer clips are light and take white washes with ink type. An overlay chosen for the palette rather than the footage is how type ends up invisible: the original `rgba(37,99,235,0.05)` wash left ink type sitting unreadable on the near-black accent clip. Swapping any of these three files means rechecking its overlay against the new footage.

`AmbientVideo` decides whether to mount the `<video>` at all, rather than hiding it with a class — a hidden video still downloads. It stays out of the DOM entirely below 768px and under `prefers-reduced-motion: reduce`. An Intersection Observer plays it on entering the viewport and pauses it on leaving. If a file is missing or the codec is refused, `onError` unmounts it and the section falls back to the CSS animation beneath.

**Testing note:** headless Chrome forces `prefers-reduced-motion: reduce`, so videos will correctly refuse to mount there. Emulate `no-preference` via CDP `Emulation.setEmulatedMedia` or headless checks report a false negative.

### CSS Animations
The effects below are **not** video. They carry the rest of the page, and also serve as the fallback layer beneath the three videos above:

### Hero Background — "Infinity Atmosphere"
- 3–4 large gradient orbs (300–500px diameter) that slowly drift and pulse.
- Colors: rgba(37,99,235,0.08), rgba(96,165,250,0.06), rgba(147,197,253,0.12), rgba(219,234,254,0.15).
- Each orb: `filter: blur(80px)`, unique @keyframes with different durations (20s, 28s, 35s) so they never sync.
- Movement: gentle translate(50–120px) drift in X and Y, layered with scale(1.0 to 1.2) pulse.
- `position: absolute`, scattered asymmetrically. One partially off-screen at top-right, one at bottom-left, one center-right.
- `animation-timing-function: ease-in-out`, `animation-iteration-count: infinite`.
- `pointer-events: none`, `z-index: 0`. All content sits above.

### Section Dividers — "Shimmer Lines"
- Between major sections, add a thin animated gradient line (2px height, full width).
- Linear gradient: transparent → rgba(37,99,235,0.25) → transparent.
- Animation: slides left-to-right over 4s, linear, infinite. Uses `background-size: 200%` and `background-position` shift.
- Not between every section — only 3–4 key transitions.

### Skills / Certificates Background — "Floating Particles"
- 6–8 tiny dots (4–6px diameter) that float slowly upward behind cards.
- Colors: rgba(96,165,250,0.12) to rgba(147,197,253,0.08).
- Each particle: unique @keyframes drifting upward 150px over 18–30s, slight horizontal sway.
- Opacity: 0 → 0.12 → 0 over cycle. Stagger `animation-delay`.
- `pointer-events: none`.

### Capstone Background — "Domain Aura"
- The capstone card gets a slow-rotating gradient glow on a `::before` pseudo-element.
- Conic gradient: #2563EB → #60A5FA → #93C5FD → #2563EB, rotating 360° over 10s.
- `filter: blur(25px)`, `opacity: 0.12`. Sits behind the card.
- The card itself stays sharp with its glassmorphism styling.

### Full-Page Aurora — "Ethereal Breath"
- A fixed-position div behind everything with a radial gradient that slowly shifts.
- Colors: #FFFFFF, #F0F4FF, #EBF4FF, #F8FAFF.
- @keyframes: background-position shifts over 35s, infinite.
- `opacity: 0.4` — almost imperceptible "breathing" across the whole page.

### Footer Background — "Wave Effect"
- The footer gets its own animated gradient that mimics Odoo's wave video.
- A horizontal gradient wave using multiple layered gradients with different animation speeds.
- Subtle blue tones only: #EBF4FF, #DBEAFE, #F0F4FF.

## 2.5 Process/Timeline (Odoo "Our Process" Style)
The College Journey section should follow Odoo's numbered process layout:
- Large step numbers (01, 02, 03, 04) — bold, oversized (48–56px), blue-tinted or light gray.
- Year label and summary beside each number.
- Vertical connecting line between steps (thin, blue, dashed or solid).
- Alternating left-right positioning: Step 01 card on the right, Step 02 card on the left, etc.
- On mobile: single column, all cards on the right.

## 2.6 Project Showcase (Odoo Project Cards Style)
- Screenshot fills the top of the card with rounded top corners, square bottom where it meets the content area.
- Below the image: project name (bold, 22px), category badge (small pill), description, features, and tech tags.
- Cards have soft shadows and subtle hover: lift -4px, shadow expands, slight border glow.
- 2-column grid on desktop, 1 column on mobile.

## 2.7 Comparison / Feature Grid (Odoo "Compare" Style)
Not directly applicable to this portfolio, but the clean grid structure with checkmark icons can be adapted for the Technical Skills section:
- Skills organized in a clean card grid with category headers.
- Each skill as a pill/chip with a subtle gradient fill (not flat bordered).

## 2.8 CTA Sections
- Between content sections, add 1–2 call-to-action blocks:
  - After Projects: "Want to see the code?" → links to GitHub profile.
  - After Capstone: "Download my CV" → links to CV download.
- These CTAs use a centered layout with large text, a button, and an animated background orb behind them (like Odoo's calculator CTA with the fish video).

---

# 3. Gojo Satoru Aesthetic — Color & Atmosphere

## 3.1 Color Palette (Unchanged from UI_GUIDELINES.md)

| Purpose | Color |
|---|---|
| Primary | #2563EB |
| Secondary | #60A5FA |
| Accent | #93C5FD |
| Light Accent | #DBEAFE |
| Faint Accent | #EFF6FF |
| Background | #FFFFFF |
| Surface | #F8FAFC |
| Border | #E5E7EB |
| Primary Text | #0F172A |
| Secondary Text | #64748B |

## 3.2 Atmospheric Effects (Gojo-Specific)
- **Soft radial gradients:** Large, diffused, asymmetrically placed — mimicking the ethereal glow of Infinity.
- **Glassmorphism cards:** `background: rgba(255,255,255,0.7)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.3)`, `border-radius: 16px`.
- **Geometric accents:** Thin concentric circle outlines (SVG or CSS borders), placed at section edges. 2–3 circles per occurrence, using rgba(37,99,235,0.08) stroke.
- **Soft glow:** Key elements (hero name, capstone card, CTA buttons) get a faint `box-shadow: 0 0 60px rgba(37,99,235,0.08)`.
- **Cool-toned section backgrounds:** Alternate between #FFFFFF, #F8FAFC, and subtle gradient blends of #EFF6FF → #FFFFFF.

## 3.3 What NOT to Do
- No anime character illustrations or silhouettes
- No Domain Expansion graphics or Jujutsu Kaisen imagery
- No Six Eyes or Infinity visual references that are recognizable as anime
- No purple accents (Gojo's blindfold is purple but it makes the palette inconsistent)
- No neon glow effects — everything is soft, diffused, atmospheric
- No dark mode in this version

---

# 4. Card Design System

## 4.1 Primary Cards (Projects, Capstone)
```css
background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(12px);
border: 1px solid rgba(229, 231, 235, 0.6);
border-radius: 16px;
padding: 0; /* image bleeds to edges, content has 24-32px internal padding */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
transition: all 0.3s ease;
```

Hover:
```css
transform: translateY(-4px);
box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06);
border-color: rgba(37, 99, 235, 0.15);
```

## 4.2 Secondary Cards (Certificates, Seminars, Skills, Contact)
```css
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(8px);
border: 1px solid rgba(229, 231, 235, 0.5);
border-radius: 16px;
padding: 24px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
transition: all 0.3s ease;
```

Hover:
```css
transform: translateY(-2px);
box-shadow: 0 2px 12px rgba(37, 99, 235, 0.06);
```

## 4.3 Skill Badges
```css
background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
color: #1E40AF;
border: 1px solid rgba(37, 99, 235, 0.1);
border-radius: 9999px;
padding: 6px 16px;
font-size: 14px;
font-weight: 500;
```

## 4.4 Category Badges (on Project Cards)
```css
background: rgba(37, 99, 235, 0.08);
color: #2563EB;
border-radius: 9999px;
padding: 4px 12px;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

## 4.5 Tech/Software Tags
```css
background: #F8FAFC;
color: #64748B;
border: 1px solid #E5E7EB;
border-radius: 8px;
padding: 4px 10px;
font-size: 13px;
```

---

# 5. Section-by-Section Specifications

## 5.1 Navbar
- Fixed top, white background with `backdrop-filter: blur(8px)` and slight transparency.
- Logo/name on left: "Phaula Briol" in semi-bold.
- Nav links centered or right-aligned.
- "Download CV" as primary blue button (rightmost).
- Active section highlighted in blue.
- Mobile: hamburger menu with slide-in overlay.
- Thin bottom border: 1px solid rgba(229,231,235,0.5).

## 5.2 Hero
- Full viewport height (100vh).
- Left 55%: Section label "ACADEMIC WEB PORTFOLIO" (with left line accent) → Name at 72–80px bold → Degree and school as secondary text → 2–3 sentence intro → Two buttons side by side: "Download CV" (primary) + "View Projects" (secondary/outlined).
- Right 45%: Decorative area — 2–3 concentric circle outlines (thin blue strokes), animated gradient orbs floating behind them.
- Background: Multi-layered animated gradient orbs (see 2.4).
- No profile picture.

## 5.3 About Me
- Two-column: text on left (60%), decorative geometric element on right (40%).
- The right side: a large soft gradient orb + 1–2 thin circle outlines. No photo.
- Background: Subtle blue-tinted (#F8FAFC or #EFF6FF blend).

## 5.4 Technical Skills
- Section label + heading.
- 3-column card grid (top row), 2-column (bottom row) — or responsive auto-fit.
- Each card: glassmorphism secondary card style. Category title bold at top, skills as gradient-filled pill badges below.
- Floating particles animation behind this section (see 2.4).

## 5.5 College Journey
- Odoo-style numbered process layout (see 2.5).
- 4 steps: 01 First Year, 02 Second Year, 03 Third Year, 04 Fourth Year.
- Each step: large number + year label + school year period + summary.
- Vertical connecting line. Alternating left-right.
- Compact — no milestones or achievements lists.

## 5.6 Projects Developed
- Section label + heading + total project count badge at top-right.
- No subtitle paragraph.
- Flat 2-column grid (no year group headings).
- Each card: category badge → image placeholder → title → description (2–3 lines max) → 3 features as bullet list → software used tags → hardware used tags (only if applicable).
- Cards follow primary card style (see 4.1).

## 5.7 Capstone Project
- Visually distinct — larger, more prominent than regular project cards.
- Asymmetric layout: left column (50%) has title, description, features checklist, software tags, hardware tags. Right column (50%) has a 2×2 screenshot grid.
- Entire section wrapped in a glassmorphism card with the rotating aura effect behind it (see 2.4).
- "FINAL YEAR PROJECT" floating badge with curved arrow (see 2.3).

## 5.8 Internship (On-the-Job Training)
- Single column layout: section label → heading → company name → description → duration → tools used tags.
- Clean and minimal. No phase cards.

## 5.9 Certificates
- 3-column card grid (2 on tablet, 1 on mobile).
- Each card: secondary card style. Image placeholder fills top, title + org + date below.
- Floating particles behind this section.

## 5.10 Seminars
- 3-column card grid (2 on tablet, 1 on mobile).
- Text-only secondary cards. Title bold → organizer + date in secondary text → 1–2 sentence description.

## 5.11 Contact
- Centered layout. Section label with line accent → "Get in Touch" heading (no subtitle).
- Three contact cards in a row: Email, GitHub, LinkedIn. Each with icon + label + value.
- Secondary card style with glassmorphism.
- Background: single large gradient orb behind the cards.

## 5.12 Footer
- Clean and spacious. Thin top border.
- Left: name + degree + school.
- Right: nav links in 3-column grid.
- Bottom row: copyright left, social icons right.
- Animated gradient wave background (see 2.4).

## 5.13 CTA Blocks (New — Odoo-Inspired)
Add 1–2 inline CTA blocks between sections:

**CTA 1 — After Projects section:**
- Centered text: "Curious about the source code?"
- Secondary button: "View GitHub" → links to GitHub profile.
- Small animated gradient orb behind the text.

**CTA 2 — After Capstone section:**
- Centered text: "Interested in working together?"
- Primary button: "Download CV" → links to CV.
- Small animated gradient orb behind the text.

---

# 6. Scroll Animations

Use Intersection Observer (no external libraries). Every section and card fades in and slides up as it enters the viewport.

- Trigger: element is 15% visible.
- Animation: `opacity: 0 → 1`, `transform: translateY(24px) → translateY(0)`.
- Duration: 600ms, ease-out.
- Cards within a grid: stagger by 80ms each (using `transition-delay` set by index).
- Run once — do not re-animate on scroll back up.
- `prefers-reduced-motion: reduce` → disable all animations.

---

# 7. Performance Rules

- All animations use `transform` and `opacity` only (GPU-accelerated).
- `will-change: transform` on animated elements.
- No more than 15 total animated elements across the page.
- No JavaScript animation libraries — pure CSS + Intersection Observer.
- No canvas elements, no WebGL.
- Background video is confined to the three sections in 2.4, and only via `AmbientVideo`, which keeps it off mobile and out of reduced-motion. Everywhere else, use CSS.
- Lighthouse performance score target: 90+ on mobile, where no video loads. Desktop carries the video payload by design and will score lower; judge desktop on whether the hero still paints and stays interactive while the video buffers, not on the raw number.
- All images lazy-loaded (`loading="lazy"`).

---

# 8. Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column. Hide floating badges. Stack all grids. |
| Tablet | 640–1024px | 2-column grids. Reduce hero text to 48–56px. |
| Desktop | > 1024px | Full layout as specified. 3-column grids where noted. |

---

# 9. Constraints

- Do not modify any data files in `src/data/` — only modify components, sections, and layouts.
- Keep all existing section IDs so navigation continues working.
- Keep Inter font, Lucide React icons, and Tailwind CSS.
- Do not add any new npm dependencies.
- No emojis anywhere in the UI.
- No anime imagery or obvious character references.
- `npm run build` must succeed with no errors.
- Test at 375px mobile width — no horizontal scrolling.

---

# 10. Differentiation Notes

This portfolio must not look like a standard template. The following elements make it unique:

1. **Animated gradient orb backgrounds** — no other student portfolio will have these.
2. **Floating editorial badges with curved SVG arrows** — directly adapted from Odoo's signature style.
3. **Glassmorphism card system** — frosted glass effect throughout, not flat cards.
4. **Shimmer divider lines** between sections — subtle animated gradients.
5. **Rotating aura glow** behind the Capstone card.
6. **Odoo-style numbered timeline** for College Journey.
7. **CTA blocks between sections** — breaks the monotony of section-after-section.
8. **Cool blue atmospheric palette** — cohesive Gojo-inspired color story throughout.

These 8 elements combined create a portfolio that is recognizably editorial and atmospheric, not template-derived.

---

# End of Document
