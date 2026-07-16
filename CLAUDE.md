# CLAUDE.md
# Academic Web Portfolio

This document provides implementation guidelines for AI coding assistants working on the Academic Web Portfolio project.

It should be used together with:

- PRD.md
- UI_GUIDELINES.md

The PRD defines the project requirements, while the UI Guidelines define the visual design. This document focuses on implementation and development practices.

---

# 1. Project Overview

The Academic Web Portfolio is a frontend-only React application developed as part of the On-the-Job Training (OJT) requirements for the Bachelor of Science in Information Technology program at Mapúa Malayan Colleges Laguna.

The website showcases the portfolio owner's academic journey, technical skills, software projects, certificates, seminars, and capstone project.

The portfolio is intended to serve both as an academic requirement and as a professional portfolio for future career opportunities.

---

# 2. Technology Stack

Use the following technologies throughout the project.

| Category | Technology |
|-----------|------------|
| Frontend | React |
| Build Tool | Vite |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Routing | React Router (if needed) |
| Version Control | Git |
| Repository | GitHub |
| Deployment | Vercel |

Do not introduce additional frameworks or libraries unless they provide significant value to the project.

---

# 3. Development Principles

The implementation should follow these principles.

- Keep the project simple.
- Build reusable components.
- Write readable code.
- Keep components focused on a single responsibility.
- Avoid unnecessary dependencies.
- Prefer composition over duplication.
- Maintain consistent file organization.
- Prioritize performance and maintainability.

When multiple implementation approaches are possible, prefer the simpler solution.

---

# 4. Project Structure

Organize the project using a clear and scalable folder structure.

Example:

src/

- assets/
- components/
- layouts/
- pages/
- sections/
- data/
- hooks/
- utils/
- styles/

Each folder should have a single responsibility.

Avoid placing unrelated files in the same directory.

---

# 5. Component Guidelines

The website should be built using reusable React components whenever possible.

Components should have a single responsibility and should remain small and maintainable.

Recommended component categories include:

### Layout Components

- Navbar
- Footer
- Section Container

### Page Sections

- Hero
- About
- Technical Skills
- College Journey
- Software Developed
- Capstone Project
- Certificates
- Seminars
- Contact

### Reusable UI Components

- Button
- Card
- Section Header
- Skill Badge
- Project Card
- Certificate Card
- Seminar Card

Avoid creating large components that handle multiple unrelated responsibilities.

---

# 6. Styling Guidelines

Use Tailwind CSS for all styling.

The project should follow the visual guidelines defined in **UI_GUIDELINES.md**.

General styling principles:

- Keep layouts clean and spacious.
- Maintain consistent spacing.
- Use reusable utility classes.
- Prefer Flexbox and CSS Grid for layouts.
- Keep responsive behavior simple and predictable.

Avoid:

- Inline styles unless necessary.
- Hardcoded spacing values throughout the project.
- Inconsistent border radius or shadows.

---

# 7. State Management

The project is relatively small.

Use React's built-in features whenever possible.

Recommended:

- useState
- useEffect
- Props

Avoid introducing state management libraries such as Redux, MobX, or Zustand unless the project requirements significantly change.

---

# 8. Data Organization

Project information should be separated from the UI whenever practical.

Examples include:

- Technical Skills
- Software Projects
- Certificates
- Seminars

Store reusable content inside dedicated data files to improve maintainability.

Avoid hardcoding repeated content directly inside components.

---

# 9. Asset Management

Organize assets into logical folders.

Example:

assets/

- images/
- icons/
- documents/

Store the downloadable Curriculum Vitae inside the documents folder.

Optimize images before adding them to the project.

Use descriptive file names.

Example:

software-project-1.png

instead of

IMG12345.png

---

# 10. Responsive Development

Develop using a mobile-first approach.

Layouts should adapt smoothly across:

- Mobile
- Tablet
- Desktop

Test responsiveness regularly during development instead of waiting until the project is complete.

Avoid layouts that require horizontal scrolling.

---

# 11. Performance

The website should remain lightweight and fast.

Recommendations:

- Optimize images.
- Minimize unnecessary re-renders.
- Avoid unused dependencies.
- Keep animations lightweight.
- Load only the assets that are needed.

Performance improvements should not reduce readability or maintainability.

# 12. Coding Standards

Follow consistent coding practices throughout the project.

## General Guidelines

- Write clean and readable code.
- Use meaningful variable and function names.
- Keep functions focused on a single responsibility.
- Remove unused imports, variables, and components.
- Avoid duplicate code whenever possible.
- Prefer reusable components over repeated implementations.

---

## React Guidelines

- Use functional components.
- Use React Hooks when necessary.
- Keep component files concise.
- Break large components into smaller reusable components.
- Pass data through props whenever appropriate.

---

## Naming Conventions

Use consistent naming throughout the project.

Examples:

Components

- Hero.jsx
- ProjectCard.jsx
- CertificateCard.jsx

Data Files

- projects.js
- skills.js
- certificates.js
- seminars.js

Assets

- capstone-dashboard.png
- machine-problem-1.png
- curriculum-vitae.pdf

---

# 13. Development Workflow

Develop the website incrementally.

Recommended workflow:

1. Create the project structure.
2. Build the shared layout components.
3. Implement each portfolio section one at a time.
4. Add responsive behavior.
5. Populate the website with actual content.
6. Optimize styling and spacing.
7. Test responsiveness.
8. Deploy the website.

Avoid implementing every feature simultaneously.

Complete one section before moving to the next.

---

# 14. AI Assistant Guidelines

When generating code, the AI assistant should:

- Follow the project requirements defined in **PRD.md**.
- Follow the visual guidelines defined in **UI_GUIDELINES.md**.
- Prioritize simplicity and maintainability.
- Generate reusable React components.
- Keep code modular and well-organized.
- Avoid unnecessary complexity.
- Preserve consistency across the project.

If implementation decisions are unclear, choose the simplest solution that satisfies the project requirements.

---

# 15. Definition of Done

A task is considered complete when:

- The implementation satisfies the requirements in **PRD.md**.
- The design aligns with **UI_GUIDELINES.md**.
- The code is clean and readable.
- The component is responsive.
- The implementation has been reviewed for consistency.
- No unnecessary code or dependencies remain.

---

# 16. References

This document should always be used together with:

- PRD.md
- UI_GUIDELINES.md

Responsibilities of each document:

**PRD.md**
Defines the functional and non-functional requirements of the project.

**UI_GUIDELINES.md**
Defines the visual design, layout, and user experience guidelines.

**CLAUDE.md**
Defines the implementation approach, coding practices, and development workflow for AI coding assistants.

---

# End of Document
