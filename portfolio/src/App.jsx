import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Certificates from "./sections/Certificates";
import Internships from "./components/Internships";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="bg-[#0B1026] min-h-screen text-white overflow-hidden">

      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Certificates />
      <Internships />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;