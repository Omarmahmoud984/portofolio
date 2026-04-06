import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Competitive from './components/Competitive';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050508] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Competitive />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
