


import Navbar from './Navbar'
import About from './About'
import Hero from './Hero'
import Footer from './Footer'
import Whatsapp from './Whatsapp'
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import Instructions from './Instructions'
import Preloader from './Preloader'



function Home() {
  const redirectToWhatsApp = () => {
    window.location.href = 'https://wa.me/9110835613';
  }
  
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

export default Home;
