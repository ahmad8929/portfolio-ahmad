# Mohd Ahmad — Portfolio

Personal portfolio built with **Next.js 16 · TypeScript · Tailwind CSS v4**. All animations are hand-written CSS
(scroll reveals, scroll-driven progress bar & timeline, morphing blobs, marquees, tilt/glow cards, custom cursor).

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Everything shown on the site lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — profile, skills,
experience, projects, education and achievements.

- Profile photo: replace `public/profile.jpg`
- Resume: replace `public/Mohd-Ahmad-Resume.pdf`
- Project screenshots: `public/projects/*.jpg` (1440×900 works best)

## Contact form

Copy `.env.example` to `.env.local` and add a free [Web3Forms](https://web3forms.com) key so messages land in your
inbox. Without a key the form falls back to opening the visitor's email app.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no config needed. Add
`NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project's environment variables.
