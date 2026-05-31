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
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

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
      <footer className="bg-bg_light_primary border-t border-slate-200 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            <div className="text-center lg:text-left">
              <h6 className="text-2xl font-bold text-gray-800">MAY DEEP</h6>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Transforming Ideas into Reality</p>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                title="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            <div className="text-center lg:text-right">
              {contactData.social_media.map((item, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600">
                  {item.text}
                </p>
              ))}
              {contactData.note && <p className="text-sm sm:text-base text-gray-600 mt-3">{contactData.note}</p>}
            </div>
          </div>

          <div className="mt-10 text-center text-sm sm:text-base text-gray-600">
            {Footer.text}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;