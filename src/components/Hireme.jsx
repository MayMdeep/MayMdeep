import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-3xl sm:text-4xl md:text-5xl" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-lg sm:text-xl md:text-2xl" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse gap-8">
          {/* Image for Desktop */}
          <img
            src={Hireme.image1}
            alt="Hire Me"
            data-aos="fade-right"
            className="max-w-sm w-full md:block hidden"
          />
          {/* Image for Mobile */}
          <img
            src={Hireme.image2}
            alt="Hire Me"
            data-aos="fade-up"
            className="max-w-sm w-full md:hidden"
          />
          {/* Content Box */}
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm w-full
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] bg-white"
          >
            <p className="leading-7 text-sm sm:text-base">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white hover:bg-dark_primary/90 transition-colors duration-200">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;