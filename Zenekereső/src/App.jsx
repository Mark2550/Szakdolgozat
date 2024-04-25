import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { LogIn, NoPage, Home, Register, About } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
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

  )}
  
export default App
