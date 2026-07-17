import { Download } from "lucide-react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { ShimmerDivider } from "./components/Decor";
import CallToAction from "./components/CallToAction";
import { GithubIcon } from "./components/icons/BrandIcons";
import { profile } from "./data/navigation";
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

        <CallToAction
          text="Curious about the source code?"
          actionLabel="View GitHub"
          href={profile.github}
          variant="secondary"
          external
          icon={<GithubIcon className="h-4 w-4" aria-hidden="true" />}
        />

        <Capstone />

        {/* The one CTA carrying a video, so the accent lands once and stays an accent.
            Dark, because the footage is — the one band on the page that inverts. */}
        <CallToAction
          text="Interested in working together?"
          actionLabel="Download CV"
          href={profile.cvPath}
          download
          videoSrc="/videos/section-accent.mp4"
          tone="dark"
          icon={<Download className="h-4 w-4" aria-hidden="true" />}
        />

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
