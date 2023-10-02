import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
    </div>
  )
}
