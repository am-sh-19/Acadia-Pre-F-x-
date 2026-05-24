# Acadia Labor Day Weekend Trip — Website

A polished, mobile-first trip website for the **Sloan Pre-fx Acadia National Park** Labor Day weekend trip (September 4–7, 2026). Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## How to Edit Trip Content

All content lives in the `data/` folder. You never need to touch component code to update trip information.

### File Map

| File | What it controls |
|------|-----------------|
| `data/trip.ts` | Title, dates, location, overview highlights |
| `data/itinerary.ts` | Day-by-day schedule, activity blocks, times |
| `data/activities.ts` | Activity cards — descriptions, intensity, highlights |
| `data/lodging.ts` | Property details, amenities, Airbnb link |
| `data/leads.ts` | Trip lead profiles and bios |
| `data/packing.ts` | Packing list categories and items |
| `data/faqs.ts` | FAQ questions and answers |
| `data/updates.ts` | "Coming soon" placeholder cards |

### Editing the Itinerary

Open `data/itinerary.ts`. Each day is an `ItineraryDay` object with an `activities` array. To update a time:

```ts
{
  time: "3:00 PM",   // ← change this
  title: "Drive Up from Campus",
  ...
}
```

To add a new activity block, add another object to the `activities` array.

### Updating the Airbnb Link

Open `data/lodging.ts` and change the `airbnbUrl` field:

```ts
airbnbUrl: "https://www.airbnb.com/rooms/YOUR_LISTING_ID",
```

### Adding / Removing FAQs

Open `data/faqs.ts` and add or remove objects from the `faqs` array.

### Revealing "Coming Soon" Updates

Open `data/updates.ts`. Change an item's `status` from `"coming-soon"` to `"available"`, and add a `link` and `linkLabel`:

```ts
{
  id: "rooming-form",
  status: "available",    // ← changed from "coming-soon"
  link: "https://forms.gle/yourformlink",
  linkLabel: "Fill out form",
  ...
}
```

---

## How to Add Images

All image slots have `// TODO` comments pointing to the exact location. See `public/images/IMAGES_README.txt` for the full folder structure.

### Hero Background

In `components/Hero.tsx`, find:
```ts
// TODO: Replace this gradient placeholder with your actual hero image:
// backgroundImage: "url('/images/hero/acadia-hero.jpg')",
```

Replace the gradient with your image path and uncomment the line.

### Activity Cards

In `components/ActivityCard.tsx`, find the `// TODO: Replace the gradient placeholder` comment. Use Next.js `<Image>` component:

```tsx
import Image from 'next/image';
<Image src={activity.image} alt={activity.title} fill className="object-cover" />
```

Update image paths in `data/activities.ts` → `activity.image` field.

### Lead Headshots

In `components/LeadCard.tsx`, find the image slot comment. Place headshots at `public/images/leads/{lead.id}.jpg`.

### Property Gallery

In `components/ImageGallery.tsx`, replace gradient placeholders with `<Image>` components. Update image paths in `data/lodging.ts` → `lodging.images` array.

---

## Deploy to Vercel

1. Push this repository to GitHub (or use the Vercel CLI)
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

Your site will be live at a `.vercel.app` URL. Add a custom domain in the Vercel dashboard.

### Environment Variables

No environment variables are required — this is a fully static frontend site.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Deployment**: Vercel

---

## Project Structure

```
/
├── app/
│   ├── globals.css        ← Global styles, Tailwind base, font imports
│   ├── layout.tsx         ← Root layout, metadata, fonts
│   └── page.tsx           ← Main page — section assembly
├── components/
│   ├── Navbar.tsx         ← Sticky nav with mobile menu
│   ├── MobileMenu.tsx     ← Slide-in mobile drawer
│   ├── Hero.tsx           ← Full-screen cinematic hero
│   ├── SectionWrapper.tsx ← Reusable animated section container
│   ├── TripOverview.tsx   ← Trip summary and highlight cards
│   ├── Itinerary.tsx      ← Day-by-day timeline
│   ├── ItineraryDay.tsx   ← Individual day component
│   ├── ActivityCard.tsx   ← Activity card with image and tags
│   ├── Activities.tsx     ← Activity card grid
│   ├── HouseStay.tsx      ← Property info, gallery, amenities
│   ├── ImageGallery.tsx   ← Airbnb-style image grid
│   ├── CostSection.tsx    ← Pricing and what's included
│   ├── TripLeads.tsx      ← Lead profile grid
│   ├── LeadCard.tsx       ← Individual lead card
│   ├── PackingList.tsx    ← Categorized packing list
│   ├── FAQSection.tsx     ← FAQ wrapper
│   ├── FAQAccordion.tsx   ← Animated accordion
│   ├── UpdatesSection.tsx ← Coming soon placeholder section
│   ├── UpdateCard.tsx     ← Individual update card
│   ├── InfoCallout.tsx    ← Inline alert/note component
│   └── Footer.tsx         ← Site footer
├── data/
│   ├── trip.ts            ← Top-level trip metadata
│   ├── itinerary.ts       ← Day-by-day schedule
│   ├── activities.ts      ← Activity definitions
│   ├── lodging.ts         ← Property details
│   ├── leads.ts           ← Trip lead profiles
│   ├── packing.ts         ← Packing list categories
│   ├── faqs.ts            ← FAQ content
│   └── updates.ts         ← Coming soon cards
├── lib/
│   └── utils.ts           ← cn() utility, difficulty/intensity configs
├── public/
│   └── images/            ← Place all images here
│       └── IMAGES_README.txt
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Common Organizer Tasks

| Task | Where to go |
|------|-------------|
| Update departure time | `data/itinerary.ts` → Friday activities → `time` field |
| Add Airbnb link | `data/lodging.ts` → `airbnbUrl` |
| Reveal rooming form | `data/updates.ts` → `"rooming-form"` → change status to `"available"`, add link |
| Add trip lead | `data/leads.ts` → add to `leads` array |
| Change cost | `components/CostSection.tsx` → `PRICE_PER_PERSON` constant |
| Add FAQ | `data/faqs.ts` → add to `faqs` array |
| Mark update as available | `data/updates.ts` → change `status` + add `link` |
| Add activity | `data/activities.ts` → add to `activities` array |
