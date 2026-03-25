import React, { useRef } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/nav";

export default function App() {
  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const academicsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80, // Offset for sticky navbar
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      {/* Pass the scroll function and refs to Navbar */}
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ homeRef, aboutRef, skillsRef, academicsRef, projectsRef, contactRef }} 
      />

      <main className="relative z-10 container mx-auto px-6 py-12 space-y-32">
        <section ref={homeRef}>
          <Home scrollToProjects={() => scrollToSection(projectsRef)} />
        </section>
        
        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={academicsRef}>
          <Academics />
        </section>

        <section ref={projectsRef}>
          <Projects scrollToHome={() => scrollToSection(homeRef)} />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}