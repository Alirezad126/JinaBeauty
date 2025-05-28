import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
