import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Authentication } from './context/Authentication.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Authentication>
  </React.StrictMode>
)
