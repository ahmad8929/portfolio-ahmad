import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Effects from "@/components/Effects";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MoreProjects from "@/components/MoreProjects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Featured />
        <MoreProjects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
