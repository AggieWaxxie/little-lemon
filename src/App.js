import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <br />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <br />
      <Footer />
    </>
  );
}

export default App;
