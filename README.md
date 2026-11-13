# devins-demo

Devin Workshops: a mobile-first single-page site for Devin workshop tutorials and downloadable slide decks.

Built with Vite, React and TypeScript. Colors and type follow devin.ai (light and dark mode follow the visitor's system setting).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run lint
```

## Add a workshop or a deck

All content lives in `src/content/workshops.ts`.

1. Put the deck file in `public/decks/` (PDF works best on phones).
2. Add or edit an entry in `workshops`:

```ts
{
  slug: 'my-workshop',            // used in the share link: /?w=my-workshop
  title: 'My workshop',
  summary: 'One or two sentences.',
  level: 'Beginner',              // 'Beginner' | 'Intermediate' | 'Advanced'
  duration: '45 min',
  topics: ['Setup'],
  downloads: [{ label: 'Slide deck', href: '/decks/my-workshop.pdf', format: 'PDF' }],
  steps: [{ title: 'Step one', body: 'What to do.', snippet: 'optional prompt or command' }],
}
```

Leave `downloads` empty to show "Deck coming soon".

`public/decks/getting-started-with-devin.pdf` is a sample deck; replace it with your own.

## Deploy

Static site: import the repo into Vercel (framework preset: Vite) or any static host. Build command `npm run build`, output directory `dist`.

## Brand assets

`src/assets/brand/` holds the Devin and Cognition logos and the Devin avatar.
