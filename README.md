# Etrolit — AI Engineering Agency

A polished, product-focused landing site and demo hub for Etrolit — an AI engineering agency. The site presents a modern, technical visual system with clear section hierarchy and conversion-focused copy designed to read well on GitHub and in the browser.

[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

Etrolit is a marketing site and demo hub for an AI engineering agency. The homepage includes navigation, a hero with clear positioning, feature storytelling, a product workflow, integrations and security messaging, developer-focused content, and a conversion CTA.

## Features

- Clear hero with product positioning and primary CTA
- Feature cards that surface core services and outcomes
- Demonstration `AIChatbot` component for GenAI workflows
- Infrastructure and privacy/security messaging
- Responsive layout optimized for desktop and mobile
- Static host-ready build in `hostinger/` for simple deployments

## Homepage Preview

![Etrolit homepage preview](public/readme-homepage.png)

Replace `public/readme-homepage.png` with your screenshot to update this preview.

## Tech Stack

- Vite (dev server + build)
- React 19 + TypeScript
- Tailwind CSS (PostCSS + Autoprefixer)
- Lucide React icons
- React Router (client routing)
- `@google/genai` (demo integrations)

## Getting Started

Install dependencies (using your preferred package manager):

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

- `index.html` - Vite entry
- `index.tsx` / `App.tsx` - application bootstrap and routing
- `pages/` - page-level views (Home, Services, Contact, etc.)
- `components/` - UI components and landing sections (`AIChatbot.tsx`, `Layout.tsx`, `Footer.tsx`)
- `public/` - static assets and images (place `readme-homepage.png` here)
- `hostinger/` - static host-ready build and styles

## Customization Guide

- Update metadata, fonts, and app shell in `index.html` and `index.tsx`.
- Edit page composition in `pages/HomePage.tsx` and other `pages/` files to change section order.
- Modify global styles in `public/index.css` or `hostinger/style.css`.
- Update the demo chatbot behavior in `components/AIChatbot.tsx` (ensure API keys are stored in environment variables).

## Notes

- The repository is set up for local development with Vite and client-side routing.
- Keep secrets (API keys) in environment variables — do not commit them.
- To show the README preview, add `public/readme-homepage.png` (a production screenshot).

## Suggested Improvements

- Add a deployment section (Vercel/Netlify) with one-click deploy settings.
- Provide brand tokens and a small style guide for color/typography.
- Add a short content-editing guide for non-technical editors.

## License

Add your preferred license before publishing.

## Deployment

Recommended quick deploy options:

- Vercel (recommended):
	1. Import the repository at https://vercel.com/new
	2. Set the build command to `pnpm build` and the output directory to `dist` (or leave defaults for Vite)
	3. Add environment variables (e.g. API keys) in the Vercel dashboard and deploy.

- Netlify:
	1. Create a new site and connect the repository.
	2. Set the build command to `pnpm build` and the publish directory to `dist`.
	3. Add environment variables in Netlify site settings and deploy.

Notes:

- If you use another host, ensure the build step runs `pnpm build` and serves the `dist` output.
- Keep secret keys out of the repo; use host environment variables.

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.
