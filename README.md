# KC - Personal Portfolio

A fast, content-driven personal portfolio built with [Astro](https://astro.build/), TailwindCSS, MDX, and a small amount of React. This site is where I showcase my projects, experience, thoughts, and the things I am currently interested in building.

I built this portfolio to have a clean, simple, and performant home for my work without needing a heavy frontend framework for every page. Astro keeps the site mostly static, while still letting me use React where it actually makes sense.

# Demo

You can view the live site at: [kylecarey.com](https://kylecarey.com)

# Features

- Static pages built with Astro
- Project showcase pages
- Experience timeline
- MDX support for richer project writeups
- React-powered image carousels

# How it Works

The site is built around Astro pages and content collections. Projects, experiences, and blogs live in `src/content`, where each Markdown or MDX file provides frontmatter metadata and page content.

Astro uses that content to generate static routes for project and blog detail pages. Shared UI like project cards, tags, layouts, the navbar, and footer live in `src/components`. Most of the site is rendered as static HTML, with React only used for interactive components like the carousel.

The base layout handles global structure, metadata, navigation, footer, and view transitions. Styling is handled with TailwindCSS and a custom theme defined in `src/styles/global.css`.

# Tech Stack

- Framework: Astro
  - `@astrojs/mdx`
  - `@astrojs/react`
  - `@astrojs/sitemap`
- Frontend: TypeScript + React
- Styling: TailwindCSS
  - `@tailwindcss/typography`
- Content: Astro content collections with Markdown / MDX

# Content Management

Content lives in it's respective `src/content` directory. The content files can either be Markdown or MDX, depending on if there needs to be interactivity or not on the page. Each section of content must follow the metadata that was described for it in `src/content.config.ts`. This utilizes Astro's powerful collection feature to display and render the content statically in HTML.

# Why I Built This

I wanted a portfolio that felt personal, fast, and easy to update.

The goal was not to over-engineer it, but to build something clean that makes it easy to show the projects I care about. Astro was a good fit because most of the site is content-focused, but I can still add interactivity where it improves the experience.

# License

MIT License
