import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* Background Section with Name */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* First Column: Content */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {hero.title}
          </h2>
          <br />
          <div className="flex justify-end">
            <button className="btn px-6 py-3 text-sm sm:text-base">
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full sm:w-80 gap-5 ${
                  i === 1 && "flex-row-reverse text-right"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {content.count}
                </h3>
                <p className="text-sm sm:text-base">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column: Image */}
        <div className="md:h-[37rem] h-96 w-full md:w-auto flex items-center justify-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Hero"
            className="h-full w-full object-contain" // Changed from object-cover to object-contain
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;