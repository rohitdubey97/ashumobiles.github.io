# 📱 Ashu Mobile — Website

A premium, modern single-page website for **Ashu Mobile** — Gwalior's most trusted mobile shop.

Fully static. No frameworks. Ready for GitHub Pages.

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it: `ashu-mobile` (or any name you like)
3. Keep it **Public**
4. Click **Create Repository**

### Step 2 — Upload Files
Upload these 3 files to the repository:
```
index.html
styles.css
script.js
```

**Option A — Upload via GitHub website:**
1. Click **"Add file" → "Upload files"**
2. Drag and drop all 3 files
3. Click **"Commit changes"**

**Option B — Upload via Git command line:**
```bash
cd "/Users/rohit.dubey7/Documents/ashu mobiles"
git init
git add .
git commit -m "Initial commit — Ashu Mobile website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ashu-mobile.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: **main**, Folder: **/ (root)**
4. Click **Save**
5. Wait 1–2 minutes, then your site is live at:

```
https://YOUR_USERNAME.github.io/ashu-mobile/
```

---

## ✏️ Where to Edit Content

### Change Shop Info
- **Shop name, tagline, description** → `index.html`, Hero section
- **Phone number** → Search for `+917415485161` (appears in multiple places)
- **Address** → Search for `Shop No 26` in `index.html`
- **Google Map link** → Search for `maps.app.goo.gl` in `index.html`
- **WhatsApp link** → Search for `wa.me` in `index.html`

### Change Opening Hours
- `index.html` → Contact section → look for "Opening Hours"

### Change Reviews
- `index.html` → Reviews section → edit review cards directly

### Change Colors
- `styles.css` → Edit the CSS variables at the top:
  - `--clr-accent` — Main accent color (indigo/purple)
  - `--clr-neon` — Neon blue accent
  - `--clr-bg` — Background color
  - `--clr-whatsapp` — WhatsApp button color

### Add Product Images
- Replace the SVG placeholders in the `.product-card__image` divs with `<img>` tags
- Example: `<img src="your-image.jpg" alt="Smartphones">`

### Change Stats Numbers
- `index.html` → Hero section → `.stat__number` elements (10+, 15K+, 50+)

---

## 📁 File Structure

```
ashu-mobile/
├── index.html    ← Main HTML (all sections)
├── styles.css    ← All styling (colors, layout, animations)
├── script.js     ← Interactions (scroll reveal, nav, counters)
└── README.md     ← This file
```

---

## ✨ Features

- 🎨 Premium dark design with glassmorphism effects
- 📱 Mobile-first responsive layout
- ✨ Scroll reveal animations
- 🟢 Floating WhatsApp button
- 📞 Click-to-call buttons
- 🗺️ Embedded Google Map
- ⭐ Customer review cards
- 💳 Payment methods section
- 🔤 Google Fonts (Inter + Space Grotesk)
- ♿ Accessibility-friendly (semantic HTML, ARIA labels)
- 🚀 Lighthouse-optimized (no external dependencies)

---

© 2026 Ashu Mobile. All rights reserved.
