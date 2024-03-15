# React + Vite

npm create vite@latest

Projekten belül: - npm install

Futtatás: - npm run dev

Tailwind: 
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
  
React Router: (ez a navigációhoz kell, pl: Bejelentkezés -> főoldal)
- npm install react-router-dom
___
## Struktúra:
 - assets: kiegészitők pl. képek mennek ide
 - components: weboldal felbontás külön részekre (navbar, footbar)
 - index.js: Ez exportálja a komponenseket (ne kelljen sokat importolni az App.jsx-be)
___
 # Errors, debugging failures:

### Failed to load PostCSS config:

Failed duo to missing node modules

Fix:  - npm install (In project directory)
