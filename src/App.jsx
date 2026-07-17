import { Download } from "lucide-react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { ShimmerDivider } from "./components/Decor";
import AmbientVideo from "./components/AmbientVideo";
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
      {/* The page-wide background: the video holds still while the page scrolls over it,
          and every section above is semi-opaque so it reads through. It carries no scrim
          of its own — the sections each do that for their own type.

          The fallback is not decoration. The hero is dark and sets white type over this
          layer, so the layer has to stay dark even on the screens the video skips — below
          768px, or when the file fails. Without it the hero paints white on pale, and the
          sections' scrims land on nothing. */}
      <AmbientVideo
        src="/videos/hero-bg.mp4"
        preload="auto"
        fallback="linear-gradient(to bottom right, #0f172a, #172554 60%, #1e3a8a)"
        className="fixed inset-0 z-0"
      />

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
