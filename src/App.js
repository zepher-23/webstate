
import './App.css';

import Home from './Home'
import Whatsapp from './Whatsapp'
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import Instructions from './Instructions'
import Preloader from './Preloader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';


function App() {
  let navigate = useNavigate();
  const redirectToWhatsApp = () => {
    window.location.href = 'https://wa.me/9110835613';
  }
  
    return (
      
      
      <div>
        <Routes>
          <Route path="/" element={<Home/> } /> 
          <Route path="/Whatsapp" element={<Whatsapp/> } /> 
          </Routes>
        </div>

        
      
      
    
  

    );
  
}

export default App;
