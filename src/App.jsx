import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Capstone from "./sections/Capstone";
import Certificates from "./sections/Certificates";
import Seminars from "./sections/Seminars";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Capstone />
        <Certificates />
        <Seminars />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
