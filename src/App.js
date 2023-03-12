
import './App.css';

import Navbar from './Navbar'
import About from './About'
import Hero from './Hero'
import Footer from './Footer'

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import Instructions from './Instructions'
import Preloader from './Preloader'



function App() {
  
    return (
      <div>
        <Preloader />
        <Navbar />
         <Hero />
        
        <About />
        <Instructions />
        <Footer />
      </div>
    
  

    );
  
}

export default App;
