https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
___
# Telepítés
- npm create vite@latest
- npm i (Projekten belül)

- npm i -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- npm i flowbite flowbite-react
- [Getting started](https://flowbite.com/docs/getting-started/react/)

- npm install react-router-dom
- npm i date-fns  (date functions, installed as dependencies) - not currently used
- npm i nodemon -D (-D to install as Dependencies)
- npm i express (Server communication)
- npm i axios
- npm i nodemon (Page refresh when making changes in files, not needed when not using SSR)

## Szerver / local futtatás
package.json:
```
"scripts": {
    "start": "nodemon server",
    "dev": "nodemon server",
    ... },
```
```
"scripts": {
    "start": "node server",
    "dev": "node server",
    ... },
```
```
"scripts": {
    "start": "node index",
    "dev": "vite",
    ... },
```

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
- [Generating Data](https://www.mockaroo.com/)

# TODO
- Add Alert MSG to login page https://mui.com/material-ui/react-alert/
- Resize search bar on main page
- Add table with items on main page
- Create about/service page (do something with them..)
- Add toggle (top left, next to the app name) with Theme (dark/white mode)
- [Connect to MSSQL, database calls (video)](https://www.youtube.com/watch?v=Uh2JCSUjA_E&t=4s)
