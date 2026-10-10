# WanderLux - Tour & Travel Website

A professional, modern, and fully responsive Tour & Travel website built with **React + Vite**.

![WanderLux Preview](public/images/hero_bg.jpg)

## Live Demo
> Deploy to Vercel or Netlify and paste your live URL here

## Features

- **7 React Components** with clear props drilling (App -> Navbar, Hero, Destinations, About, Testimonials, Contact, Footer)
- **6 Destination Cards** (Maldives, Paris, Bali, Rome, Japan, Dubai) with interactive wishlist toggle
- **3 Tour Packages** with save-amount badges and booking flow
- **Testimonials carousel** — responsive slider on mobile, grid on desktop
- **Contact form** with validation and success state
- Fully **responsive** — Desktop, Tablet, Mobile
- Smooth **scroll navigation** with active link highlight
- Mobile **hamburger menu** with animated open/close
- **Dark glassmorphism** design with animated hero background
- All buttons **fully functional** — scroll to contact, wishlist toggle, newsletter subscribe

## Tech Stack

| Tech | Version |
|------|---------|
| React | 19.x |
| Vite | 8.x |
| Vanilla CSS | — |
| JavaScript (JSX) | ES2022 |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx + .css       # Fixed top nav with mobile menu
│   ├── Hero.jsx + .css         # Full-screen hero with search
│   ├── Destinations.jsx + .css # Section wrapper
│   ├── DestinationCard.jsx     # Reusable card (props drilled)
│   ├── Packages.jsx + .css     # Tour packages section
│   ├── PackageCard.jsx + .css  # Reusable package card
│   ├── About.jsx + .css        # About section with team image
│   ├── Testimonials.jsx + .css # Reviews carousel
│   ├── Contact.jsx + .css      # Booking enquiry form
│   └── Footer.jsx + .css       # Footer with newsletter
├── data/
│   └── travelData.js           # All site data (destinations, packages, etc.)
├── App.jsx                     # Root — props drilled to all children
├── main.jsx
└── index.css                   # Global design tokens + utilities
public/
└── images/                     # All travel images
```

## Props Drilling Example

```
App.jsx  (holds all data)
   |
   |-- navLinks + siteName --> Navbar.jsx
   |-- heroData + onExplore --> Hero.jsx
   |-- destinations[] --> Destinations.jsx --> DestinationCard.jsx
   |-- tourPackages[] --> Packages.jsx --> PackageCard.jsx
   |-- aboutData --> About.jsx
   |-- testimonials[] --> Testimonials.jsx
   |-- siteName + navLinks --> Footer.jsx
```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/wanderlux-travel.git
cd wanderlux-travel

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Production Build

```bash
npm run build
```

Built files are in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → Import from GitHub
4. Select your repository
5. Vercel auto-detects Vite — just click **Deploy**
6. Your live URL will be: `https://your-project.vercel.app`

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect GitHub and select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **Deploy**

---

## GitHub Upload Instructions

```bash
# 1. Initialize git (if not done)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: WanderLux travel website"

# 4. Create repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## License
MIT — free to use for educational and personal projects.
