────────────────────────────────────────────────────────────────
IMAGE PLACEHOLDERS — HOW TO ADD REAL PHOTOS
────────────────────────────────────────────────────────────────

Replace the placeholder gradients in the code with real images
by placing files in this folder structure:

public/
└── images/
    ├── hero/
    │   └── acadia-hero.jpg          ← Full-screen hero background (1920x1080)
    ├── activities/
    │   ├── beehive.jpg
    │   ├── jordan-pond.jpg
    │   ├── carriage-roads.jpg
    │   ├── ocean-path.jpg
    │   ├── cadillac-sunrise.jpg
    │   ├── cabin-olympics.jpg
    │   ├── cabin-downtime.jpg
    │   ├── firepit.jpg
    │   ├── group-dinners.jpg
    │   └── bar-harbor.jpg
    ├── lodging/
    │   ├── hero.jpg                  ← Main property photo (landscape, ~1600x900)
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   └── gallery-4.jpg
    ├── leads/
    │   ├── amar.jpg                  ← Square headshots (~400x400)
    │   ├── marvin.jpg
    │   ├── shanthini.jpg
    │   ├── steph.jpg
    │   └── tristan.jpg
    └── og-image.jpg                  ← Social share card (1200x630)

AFTER ADDING IMAGES:
1. Open the relevant component file (e.g., Hero.tsx, ActivityCard.tsx)
2. Find the TODO comment mentioning the image path
3. Uncomment the Next.js <Image> component and remove the gradient placeholder
4. Run `npm run dev` to verify the images look correct

TIPS:
- Use Next.js Image component for automatic optimization
- Compress images before adding (TinyPNG, Squoosh, etc.)
- WebP format preferred for smaller file sizes
- For the hero background, use a CSS background-image (not Next/Image)
────────────────────────────────────────────────────────────────
