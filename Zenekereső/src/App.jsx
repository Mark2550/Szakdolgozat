import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import { LogIn, NoPage, Home, Register } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
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
  )
}

root.render(<App />);
export default App
