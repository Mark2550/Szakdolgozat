import './App.css'
import ReactDOM from "react-dom/client"
//import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import Mainpage from './pages/Mainpage'
import Layout from './pages/Layout'
//import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App
