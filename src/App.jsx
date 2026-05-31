import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Recommendations from "./components/Recommendations";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { content } from "./Content";
import { FaGithub, FaTwitter, FaLinkedin,FaEnvelope, FaInstagram } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      offset: 100,
    });
  }, []);

  const { Contact: contactData, Footer } = content;

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Languages />
        <Skills />
        <Service />
        <WorkExperience />
        <Projects />
        <Education />
        <Recommendations />
        <Hireme />
        <Contact />
      </div>
<footer className="border-t border-gray-100 bg-white py-8 mt-20">
  <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} May Deeb. All rights reserved.
    </p>

    <div className="flex items-center gap-6">
      <a
        href="https://github.com/MayMdeep"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="text-lg" />
      </a>
      <a
        href="https://linkedin.com/in/may-deeb"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-lg" />
      </a>
      <a
        href="mailto:may.m.deep@gmail.com"
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Email"
      >
        <FaEnvelope className="text-lg" />
      </a>
    </div>

  </div>
</footer>
    </div>
  );
};

export default App;