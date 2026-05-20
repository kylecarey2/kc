---
title: 'KC'
description: "My personal portfolio website, what you're looking at now!"
url: 'https://kylecarey.com'
repo: 'https://github.com/kylecarey2/kc'
tags: ['astro', 'react', 'typescript', 'tailwind']
featured: false
date: 2026-06-01
---

# About

KC is my personal portfolio website built with [Astro](https://astro.build/) and React. I created the site because I wanted a central place to showcase projects and write about things I care about.

When deciding on the stack for the site, I wanted something that was fast, SEO-friendly, and easy to expand on over time without touching application code. Astro ended up being a perfect fit for my needs.

# Process

One of the main goals for KC was maintainability. I did not want to hassle with writing code whenever adding projects, writing posts, or updating content. I wanted to process to take no more than a few minutes per update. After all, this portfolio is always evolving with new projects.

To accomplish this, I built the site heavily around Astro content collections using Markdown and MDX. Most content is written in Markdown, while MDX is used for project pages that require interactive React components (such as image carousels).

Astro's file-based routing, server-side rendering support, and content collections made it easy to keep the site organized while still maintaining excellent performance. Since Astro ships minimal JavaScript by default, pages remain extremely lightweight and fast to load.

## Frontend

The frontend is built using Astro, React, TypeScript, and TailwindCSS. Astro handles the majority of rendering while React components are selectively hydrated where interactivity is needed.

This approach keeps the website responsive and dynamic without sacrificing performance or bloating the client bundle unnecessarily.

# Result

In the end, KC works as a lightweight, content-driven portfolio focused on performance, maintainability, and flexibility. It was a pleasure to get to work with Astro, as it was something that I stumbled upon in an X (Twitter) thread, and thought "that's cool, I'd like to get to try that one day".

Astro handles the static-first rendering while React powers interactive UI components throughout the site. Content collections and MDX allow projects and posts to remain easy to manage while still supporting dynamic functionality when needed.

The result is a fast, SEO-friendly website that is simple to extend and enjoyable to maintain.
