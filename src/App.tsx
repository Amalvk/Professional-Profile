import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LiveProjects from "./components/LiveProjects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-onbg-text">
        <SmoothScroll />
        <AmbientBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <LiveProjects />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
