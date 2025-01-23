import React, { memo, useState, useCallback, useMemo } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import { MdArrowForward } from "react-icons/md";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "23rem",
  },
};
Modal.setAppElement("#root");

const Skills = memo(() => {
  const { skills } = useMemo(() => content, []);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSkillClick = useCallback((skill) => {
    setSelectSkill(skill);
    openModal();
  }, [openModal]);

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex items-center gap-3">
            <img className="h-10" src={selectSkill?.logo} alt="..." />
            <h6>{selectSkill?.name}</h6>
          </div>
          <br />
          <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>
              Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
              beatae quos rem.
            </li>
          </ul>
          <br />
          <div className="flex justify-end">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </Modal>
      )}

      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white sm:cursor-pointer 
               relative group w-full md:w-[calc(33.33%-1rem)] flex items-center
                gap-5 p-5 rounded-md border-2 border-slate-200"
            >
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 group-hover:scale-150 duration-200"
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