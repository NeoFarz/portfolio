# Farzad Fatollahi-Fard Portfolio

A modern portfolio website built with Astro and DaisyUI.

## Features

- **Astro** - Static site generation with excellent performance
- **DaisyUI + Tailwind CSS** - Beautiful, customizable components
- **Markdown Projects** - Easy content management for project pages
- **Dark/Light Theme** - Automatic theme switching with manual toggle
- **Responsive Design** - Mobile-first approach
- **GitHub Pages Deployment** - Automated CI/CD workflow
- **LaTeX CV Integration** - Optional automatic PDF generation from LaTeX source
- **Site Configuration** - Centralized config for collaboration status and site settings

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
│   │   └── projects/
│   │       ├── opensoc-fabric.md
│   │       ├── architecture-simulation.md
│   │       └── fpga-accelerators.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── cv.astro
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   ├── config.ts
│   └── content.config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Configuration

### Site Settings

Edit `src/config.ts` to configure site-wide settings:

```typescript
export const siteConfig = {
  // Set to true when open for collaboration, false when not
  openForCollaboration: true,
  
  // Message shown when open
  collaborationMessage: "Available for collaboration",
  
  // Message when unavailable (set to null to hide badge entirely)
  unavailableMessage: null,
};
```

**Behavior:**
- `openForCollaboration: true` → Green pulsing dot + "Available for collaboration"
- `openForCollaboration: false` + `unavailableMessage: "Currently unavailable"` → Gray dot + message
- `openForCollaboration: false` + `unavailableMessage: null` → Badge hidden entirely

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

### LaTeX CV Integration (Optional)

The GitHub Actions workflow can automatically compile a LaTeX CV and include the PDF in the build. This is disabled by default.

#### Enabling CV Build

Edit `.github/workflows/deploy.yml` and set `BUILD_CV` to `'true'`:

```yaml
env:
  # Set to 'true' to enable LaTeX CV compilation
  BUILD_CV: 'true'
  
  # Path to main .tex file in the CV repo
  CV_TEX_FILE: "cv.tex"
  
  # Output filename
  CV_OUTPUT: "cv.pdf"
```

#### CV Source Options

The CV source files can come from several locations:

**Option 1: GitHub Repository (Default)**

Clone from a GitHub repository:

```yaml
env:
  CV_REPO: "yourusername/cv"

# In the steps section:
- name: Checkout CV repository
  if: env.BUILD_CV == 'true'
  uses: actions/checkout@v4
  with:
    repository: ${{ env.CV_REPO }}
    path: cv-source
```

For private GitHub repos, create a Personal Access Token with `repo` scope, add it as a repository secret named `CV_REPO_TOKEN`, and uncomment the token line:

```yaml
    token: ${{ secrets.CV_REPO_TOKEN }}
```

**Option 2: GitLab, Bitbucket, or Other Git Hosts**

Replace the checkout step with a git clone command:

```yaml
- name: Clone CV repository
  if: env.BUILD_CV == 'true'
  run: |
    git clone https://gitlab.com/yourusername/cv.git cv-source
```

For private repos, use token authentication:

```yaml
- name: Clone CV repository
  if: env.BUILD_CV == 'true'
  run: |
    git clone https://oauth2:${{ secrets.CV_REPO_TOKEN }}@gitlab.com/yourusername/cv.git cv-source
```

**Option 3: Same Repository**

Place your LaTeX CV files in a subdirectory (e.g., `cv-source/`) of the portfolio repo. Remove or skip the CV checkout step entirely—the files will already be available after the main checkout.

**Option 4: Self-Hosted Git Server**

Use SSH or HTTPS with token authentication:

```yaml
- name: Clone CV repository
  if: env.BUILD_CV == 'true'
  run: |
    git clone https://${{ secrets.CV_REPO_TOKEN }}@git.yourdomain.com/cv.git cv-source
```

#### LaTeX Engine Options

The workflow uses `xu-cheng/latex-action` with `latexmk` and defaults to `pdflatex`. To use a different engine, modify the compile step:

```yaml
- name: Compile LaTeX CV
  if: env.BUILD_CV == 'true'
  uses: xu-cheng/latex-action@v3
  with:
    working_directory: cv-source
    root_file: ${{ env.CV_TEX_FILE }}
    latexmk_use_lualatex: true   # For LuaLaTeX
    # latexmk_use_xelatex: true  # For XeLaTeX
```

## License

See [LICENSE](LICENSE.md)
