https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
___
# Telepítés
- npm create vite@latest
- npm install (Projekten belül)

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- npm install flowbite flowbite-react
- [Getting started](https://flowbite.com/docs/getting-started/react/)

- npm install react-router-dom
- npm i date-fns  (date functions, installed as dependencies)
- npm i nodemon -D (-D to install as Dependencies)
- npm i express (szerverhez kell)
- npm i axios

## Szerver / local futtatás
```
package.json:
"scripts": {
    "start": "node server",
    "dev": "node server",
    ... },

"scripts": {
    "start": "node index",
    "dev": "vite",
    ... },
```

## Struktúra
 - components: weboldal felbontás külön részekre (navbar, footbar)
 - index.js: exportálja a komponenseket (ne kelljen sokat importolni az App.jsx-be)

# Errors

### Failed to load PostCSS config

Fix:  - npm install (Projekten belül)

### [ESLint Require/process is not defined](https://stackoverflow.com/questions/50894000/eslint-process-is-not-defined)

# Források:
- [Quick start](https://react.dev/learn)
- [File input template tailwindcss](https://flowbite.com/docs/forms/file-input/)
- [Navbar](https://flowbite.com/docs/components/navbar/)
- [Navbar with Route](https://github.com/CodeCompleteYT/react-navbar)
- [React Router](https://www.w3schools.com/react/react_router.asp)
- [Audio identification services](https://acoustid.biz/)
- [Types of Routes](https://www.geeksforgeeks.org/reactjs-types-of-routers/)
- [Server side configuration with Vite](https://vitejs.dev/guide/ssr) - [Github code of it](https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-react/package.json)

# TODO
- Add Alert msg to login page https://mui.com/material-ui/react-alert/
- [Connect to MSSQL, database calls (video)](https://www.youtube.com/watch?v=Uh2JCSUjA_E&t=4s)
# Megjegyzések
Tailwind és React
