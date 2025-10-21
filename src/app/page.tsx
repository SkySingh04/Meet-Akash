import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import NewExperience from "./components/NewExperience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Volunteering from "./components/Volunteering";
import Footer from "./components/Footer";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <NewExperience />
      <Projects />
      <Achievements />
      <Recommendations />
      {/* <OpenSource /> */}
      <Certifications />
      <Volunteering />
      <Footer />
    </div>
  )
}
