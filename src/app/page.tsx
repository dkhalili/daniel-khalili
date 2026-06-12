import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Quote from "../components/Quote";
import Initiatives from "../components/Initiatives";
import Philosophy from "../components/Philosophy";
import Timeline from "../components/Timeline";
import TechOrbit from "../components/TechOrbit";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Quote />
      <Initiatives />
      <Philosophy />
      <Timeline />
      <TechOrbit />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
