import React, { memo, useState, useCallback, useMemo, useRef, useEffect } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import { MdArrowForward } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    width: "100%",
    padding: "1rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: "1rem",
  },
};
Modal.setAppElement("#root");

const Skills = memo(() => {
  const { skills } = useMemo(() => content, []);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const sectionRef = useRef(null);
  const hasSentRef = useRef(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSkillClick = useCallback((skill) => {
    setSelectSkill(skill);
    openModal();
  }, [openModal]);

  useEffect(() => {
    if (!sectionRef.current || hasSentRef.current) return;

    const getVisitorCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) return "Unknown";
        const data = await response.json();
        return data.country_name || data.country || "Unknown";
      } catch (error) {
        console.error("Country lookup failed", error);
        return "Unknown";
      }
    };

    const sendVisitNotification = async () => {
      try {
        const country = await getVisitorCountry();
        const formData = new FormData();
        formData.append("name", "Portfolio Visitor");
        formData.append("email", "noreply@portfolio.com");
        formData.append("_replyto", "noreply@portfolio.com");
        formData.append("_subject", `Skills section visited — ${country}`);
        formData.append(
          "message",
          `A visitor has reached the Skills section of your portfolio from ${country}.`
        );
        formData.append("country", country);

        const response = await fetch("https://formspree.io/f/xkoelwpz", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast.success(`Skills section visit recorded from ${country}.`);
        } else {
          console.error("Skills section notification failed", response.status, await response.text());
          toast.success("Welcome to my portfolio!");
        }
      } catch (error) {
        console.error("Skills section notification error", error);
        toast.success("Welcome to my portfolio!");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasSentRef.current) {
            hasSentRef.current = true;
            sendVisitNotification();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-fit bg-bg_light_primary px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14" id="skills">
      <Toaster />
      {modalIsOpen && (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
  >
    <div className="flex items-center gap-3">
      <img className="h-20" src={selectSkill?.logo} alt={selectSkill?.name} />
      <h6 className="text-xl font-semibold">{selectSkill?.name}</h6>
    </div>
    <p className="mt-4 text-lg">{selectSkill?.para}</p> {/* Add the para text here */}
    <br />
    <div className="flex justify-end">
      <button onClick={closeModal} className="btn px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
        Close
      </button>
    </div>
  </Modal>
)}


      <div className="md:container px-5 py-14">
        <h2 className="title text-2xl sm:text-3xl md:text-4xl" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle text-lg sm:text-xl md:text-2xl" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        {skills.skills_intro && (
          <p className="mt-4 max-w-3xl text-base text-gray-600">
            {skills.skills_intro}
          </p>
        )}
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white sm:cursor-pointer 
               relative group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] 
               flex items-center gap-5 p-5 rounded-md border-2 border-slate-200"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
              <img
  src={skill.logo}
  alt={skill.name}
  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-150 duration-200"
  loading="lazy"
/>


              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => handleSkillClick(skill)}
                  className="text-xl absolute top-3 right-3"
                >
                  {React.createElement(MdArrowForward)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;