import { useState, useRef, useEffect } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { Pagination, Navigation, Autoplay } from "swiper"; // Import Autoplay module

const Projects = () => {
  const { Projects } = content;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const popupRef = useRef(null);

  const openPopup = (project) => {
    setActiveProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveProject(null);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-4 -mt-12">
          {/* Left Side: Image */}
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-left"
            className="max-w-[55vw] min-w-[28rem] -mt-4" // Added negative margin-top
          />

          {/* Right Side: Swiper */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-right"
            spaceBetween={24} // Increased space between slides
            modules={[Pagination, Autoplay]} // Added Autoplay module
            autoplay={{
              delay: 1500, // Auto-scroll every 3 seconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            className="rounded-3xl pb-8 max-w-md drop-shadow-primary self-start mt-12" // Added margin-top
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-6 border-b-8 border-[#FAF9FD] h-fit cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openPopup(content)} // Make the entire module clickable
              >
                {/* Project Image */}
                <img
                  src={content.images[0]}
                  alt="..."
                  className="rounded-lg w-full h-48 object-cover"
                />

                {/* Project Details */}
                <div className="flex flex-col gap-2 mt-4">
                  <h5 className="font-bold font-Poppins text-xl text-gray-800">
                    {content.title}
                  </h5>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the parent onClick from firing
                      openPopup(content);
                    }}
                    className="font-bold text-gray-600 self-end hover:text-blue-600 transition-colors"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isPopupOpen && activeProject && (
        <div className="fixed w-300 inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div
            ref={popupRef}
            className="bg-white rounded-lg p-6 w-2/44 md:w-3/4 lg:w-1/2 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors text-2xl"
            >
              &times;
            </button>

            {/* Gallery */}
            <div className="mb-9">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true} // Enable navigation arrows
                modules={[Pagination, Navigation]} // Add Navigation module
                className="rounded-lg"
              >
                {activeProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${activeProject.title} - ${index + 1}`}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {activeProject.title}
              </h3>
              <p className="text-gray-600">
                {activeProject.description ||
                  "This is a detailed description of the project."}
              </p>
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;