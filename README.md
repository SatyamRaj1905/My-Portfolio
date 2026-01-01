# Retro Portfolio (React + Vite)

GameBoy-inspired pixel UI portfolio (React + Vite) with:
- Two-screen layout (Small Display + Big Display)
- Left tab buttons (Bio / Skills / Projects / Experience / Achievements / Contact)
- Small display dynamically updates by active tab and selected item
- Mobile stacked layout (tabs become horizontal scroll)

## See the website live 

You can see the live website -> https://satyam-raj-1905.onrender.com/ (Render link) and https://my-portfolio-3uueyobg2-satyamraj1905s-projects.vercel.app/ (Vercel link)

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in terminal.

## Build / Preview

```bash
npm run build
npm run preview
```

## Deploy (Vercel / Netlify)

This is a standard Vite app:
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output: `dist`

## Update your content
Edit `src/data.js`:
- Add your exact LinkedIn/GitHub/LeetCode/CSES URLs
- Add project links, work report link, portfolio link, etc.
- Replace placeholder images inside `/public`

---

## Deploy (one-time setup)

This is a **Vite + React** single-page app.

### Vercel
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci` (or `npm install`)
- SPA routing fallback is already included via `vercel.json`.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing fallback is included via `public/_redirects`.

### Local
```bash
npm install
npm run dev
```
