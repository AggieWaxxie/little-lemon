import './App.css';
import Header from './components/Homepage/headerSection';
import HeroSection from './components/Homepage/heroSection';
import Highlights from './components/Homepage/highlightsSection';
import Testimonials from './components/Homepage/testimonialSection';
import About from './components/Homepage/aboutSection';
import Footer from './components/Homepage/footerSection';


function App() {
  return (
      <>
      <Header />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
      </>
    
  );
}

export default App;
