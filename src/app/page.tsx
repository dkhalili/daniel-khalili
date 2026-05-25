import Hero from "../components/Hero";
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
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Quote />
      <div className="section-divider" />
      <Initiatives />
      <div className="section-divider" />
      <Philosophy />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <TechOrbit />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
