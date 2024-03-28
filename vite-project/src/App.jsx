import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewNavbar from './components/NewNavbar'
import { LogIn, NoPage, Main } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter> 
    {/** For parent element only */}
      <NewNavbar />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="SignIn" element={<LogIn />} />
          <Route path="*" element={<NoPage />} />
          {/** The '*' stands for all type of links */}
      </Routes>
    </BrowserRouter>
  )
}

root.render(<App />);
export default App
