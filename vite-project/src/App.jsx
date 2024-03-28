import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { SignIn, NoPage, Main } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Main />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

root.render(<App />);
export default App
