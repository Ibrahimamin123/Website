# Ibrahim Amin — Portfolio (React + Bootstrap)

Original HTML/CSS/JS portfolio ko React (Vite) + Bootstrap 5 grid system me convert kiya gaya hai.
Ab yeh mobile par bhi fully responsive hai aur "Download CV" button se professional PDF resume
generate/download hota hai (browser mein hi banta hai, koi server chahiye nahi).

## Kya kya improve hua

- **Bootstrap 5 grid** (`container / row / col-*`) — har section (Hero, About, Skills, Experience,
  Projects, Achievements, Contact) ab `col-12 / col-sm-6 / col-lg-3` type breakpoints use karta
  hai, isliye mobile, tablet aur desktop teeno par layout sahi tarah stack/align hota hai.
- **React components** — har section apna component hai (`src/components/*.jsx`), data
  `src/data/portfolio.js` me centralised hai — content edit karna ab bohot aasan hai.
- **Fast/performant** — production build ka main JS bundle ~67KB (gzip) hai; PDF library
  (jsPDF) sirf tab load hoti hai jab user "Download CV" par click kare (code-splitting), isliye
  pehli load fast rehti hai.
- **CV Download** — About section me "Download CV" button hai jo `Ibrahim_Amin_CV.pdf` naam se
  professional resume generate karke download karta hai, portfolio ke saare data (skills,
  experience, education, projects, achievements) ke sath.
- **Contact form** — client-side validation ke sath, submit par mailto se email app open hoti
  hai (pehle jaisa behavior maintained).

## Setup

```bash
npm install
npm run dev       # development server (localhost:5173)
npm run build     # production build → dist/ folder
npm run preview   # preview production build
```

## Structure

```
src/
  components/   NavBar, Hero, About, Skills, Experience, Projects, Achievements, Contact, Footer
  data/         portfolio.js — saari content yahan se aati hai
  utils/        generateCV.js — PDF resume generator (jsPDF)
  index.css     Bootstrap ke upar neon dark theme
public/assets/  profile photo
```

## Deploy

`npm run build` chalayein, phir `dist/` folder ko kisi bhi static host (Netlify, Vercel, GitHub
Pages) par upload kar dein.
