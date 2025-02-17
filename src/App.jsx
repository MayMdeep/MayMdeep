import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Service />
        <Projects />
        <Hireme />
        <Contact />
      </div>
      {/* Enhanced Footer */}
      <footer className="bg-bg_light_primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding Section */}
            <div className="text-center md:text-left">
              <h6 className="text-xl sm:text-2xl font-bold text-gray-800">MAY DEEP</h6>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Transforming Ideas into Reality</p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub"
              >
                <i className="fab fa-github text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                title="Twitter"
              >
                <i className="fab fa-twitter text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <i className="fab fa-instagram text-xl sm:text-2xl"></i>
              </a>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-base text-gray-600">Email: maydeep@gmail.com</p>
              <p className="text-sm sm:text-base text-gray-600">Phone: +123 456 7890</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 mt-6 pt-6 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              &copy; {new Date().getFullYear()} MAY DEEP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;