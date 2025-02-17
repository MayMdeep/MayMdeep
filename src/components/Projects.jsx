import { useState, useRef, useEffect } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

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
    <section className="bg-bg_light_primary py-16 min-h-[500px] max-h-[800px]" id="projects">
      <div className="max-w-3xl mx-auto px-5 flex flex-col justify-between">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-down">
            {Projects.title}
          </h2>
        </div>

        {/* Swiper Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-10">
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-right"
            spaceBetween={10}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full rounded-3xl drop-shadow-lg"
          >
            {Projects.project_content.map((project, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openPopup(project)}
              >
                {/* Project Image */}
                <img src={project.images[0]} alt={project.title} className="rounded-lg w-full h-55 object-cover" />

                {/* Project Details */}
                <div className="mt-4">
                  <h5 className="text-xl font-semibold text-gray-800">{project.title}</h5>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup(project);
                    }}
                    className="text-blue-600 hover:underline mt-2 block"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup for Project Details */}
      {isPopupOpen && activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div
            ref={popupRef}
            className="bg-white rounded-lg p-6 w-full md:w-3/4 lg:w-1/2 relative max-h-[90vh] overflow-y-auto shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors text-2xl"
            >
              &times;
            </button>

            {/* Gallery */}
            <div className="mb-6">
              <Swiper pagination={{ clickable: true }} navigation modules={[Pagination, Navigation]} className="rounded-lg">
                {activeProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`${activeProject.title} - ${index + 1}`} className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">{activeProject.title}</h3>
              <p className="text-gray-600">{activeProject.description || "This is a detailed description of the project."}</p>
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
