import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import { LogIn, NoPage, Home, Register } from './pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        {/** For parent element only */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="*" element={<NoPage />} />
          {/** The '*' stands for all type of links */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

root.render(<App />);
export default App
