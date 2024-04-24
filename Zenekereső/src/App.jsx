import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import { LogIn, NoPage, Home, Register, About } from './pages';
import { StrictMode } from 'react';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          {/** For parent element only */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
            {/** The '*' stands for all type of links */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>

  )
}

//root.render(<App />);
export default App
