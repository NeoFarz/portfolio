# Farzad Fatollahi-Fard Portfolio

A modern portfolio website built with Astro and DaisyUI.

## Features

- **Astro** - Static site generation with excellent performance
- **DaisyUI + Tailwind CSS** - Beautiful, customizable components
- **Markdown Projects** - Easy content management for project pages
- **Dark/Light Theme** - Automatic theme switching with manual toggle
- **Responsive Design** - Mobile-first approach
- **GitHub Pages Deployment** - Automated CI/CD workflow

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── ProjectCard.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── projects/
│   │       ├── opensoc-fabric.md
│   │       ├── architecture-simulation.md
│   │       └── fpga-accelerators.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Adding Projects

Create a new `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Title"
summary: "Brief description for the projects listing page."
tags: ["Tag1", "Tag2", "Tag3"]
featured: true
order: 100
github: "https://github.com/username/repo"
demo: "https://demo.example.com"
date: "2024"
---

Full markdown content for the project page...
```

### Frontmatter Options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✓ | Project title |
| `summary` | string | ✓ | Short description for cards |
| `tags` | string[] | | Technology/topic tags |
| `featured` | boolean | | Highlight on homepage |
| `order` | number | | Sort priority (higher = first) |
| `github` | string | | GitHub repository URL |
| `demo` | string | | Live demo URL |
| `date` | string | | Project date/timeframe |

## Customization

### Themes

The site includes two DaisyUI themes:
- `circuit` (dark) - Primary theme with green/cyan accents
- `daylight` (light) - Clean light theme with blue accents

Modify themes in `tailwind.config.mjs`.

### Fonts

- **Display/Headings**: JetBrains Mono
- **Body**: Source Sans 3

Update in `src/styles/global.css` and `tailwind.config.mjs`.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to repository **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch to trigger deployment

### Custom Domain

1. Add your domain in repository **Settings** > **Pages**
2. Create a `CNAME` file in `public/` with your domain
3. Update `site` in `astro.config.mjs`

## License

MIT
