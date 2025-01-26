import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title text-3xl sm:text-4xl md:text-5xl" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle text-lg sm:text-xl md:text-2xl" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap justify-center gap-6">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] 
              duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-white p-6 
              hover:shadow-lg hover:border-dark_primary transition-all"
            >
              <img
                src={content.logo}
                alt={content.title}
                className="mx-auto w-16 h-16"
              />
              <h6 className="my-3 text-xl font-bold text-gray-800">
                {content.title}
              </h6>
              <p className="leading-7 text-sm sm:text-base text-gray-600">
                {content.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;