# Copilot Instructions for ModernWalk

## Project Overview
- **Framework:** Next.js (App Router, TypeScript)
- **Structure:**
  - `app/`: Top-level routes, global layout, and pages (e.g., `catalog/` for product listing)
  - `components/`: Reusable UI components (e.g., `product-card.tsx`, `category-pills.tsx`)
  - `lib/`: Shared logic (API calls, data types, utilities)
  - `public/`: Static assets (SVGs, icons)

## Key Patterns & Conventions
- **Component Design:**
  - All UI elements are in `components/`, using functional React components and TypeScript.
  - Props are strongly typed; see `lib/types.ts` for shared types.
- **Routing:**
  - Uses Next.js App Router (`app/` structure). Each folder under `app/` is a route; `page.tsx` is the entry point.
  - Loading states are handled via `loading.tsx` in route folders.
- **Styling:**
  - Global styles in `app/globals.css`.
  - Component-level styles use CSS modules or inline styles.
- **Data Flow:**
  - API logic is centralized in `lib/api.ts`.
  - Category and product logic in `lib/categories.ts` and related files.

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Build for Production:**
  - `npm run build`
- **No explicit test or lint scripts found; add if needed.**

## Integration Points
- **Fonts:** Uses `next/font` for optimized font loading (Geist).
- **Deployment:** Designed for Vercel, but standard Next.js deployment applies.

## Examples
- **Add a new page:** Create a folder in `app/`, add `page.tsx`.
- **Add a new component:** Place in `components/`, export as default, type props via `lib/types.ts`.
- **API usage:** Import from `lib/api.ts` for data fetching.

## Tips for AI Agents
- Follow Next.js App Router conventions for routing and loading states.
- Use TypeScript types from `lib/types.ts` for props and API data.
- Keep UI logic in `components/`, data logic in `lib/`.
- Reference `README.md` for basic setup and deployment.

---
_If any conventions or workflows are unclear or missing, please ask for clarification or provide examples to improve these instructions._
