import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { ShimmerDivider } from "./components/Decor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Capstone from "./sections/Capstone";
import Internship from "./sections/Internship";
import Certificates from "./sections/Certificates";
import Seminars from "./sections/Seminars";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      {/* The page-wide wash every section is layered over. */}
      <div aria-hidden="true" className="aurora" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />

        {/* Dividers mark the two turns of the page: into the work, then out of it. */}
        <ShimmerDivider />

        <Projects />
        <Capstone />
        <Internship />

        <ShimmerDivider />

        <Certificates />
        <Seminars />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
