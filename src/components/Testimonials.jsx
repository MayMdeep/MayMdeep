import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-3xl sm:text-4xl md:text-5xl" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle text-lg sm:text-xl md:text-2xl" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.5}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl mx-auto"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-white mx-4 md:mx-8 border-2 
                p-6 md:p-8 h-full rounded-2xl flex items-center gap-6
                border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img
                  src={content.img}
                  alt={content.name}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                  <p className="sm:text-base text-sm text-gray-600">
                    {content.review}
                  </p>
                  <br />
                  <h6 className="text-lg font-bold text-gray-800">{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;