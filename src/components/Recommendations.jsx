import React from "react";
import { content } from "../Content";

const Recommendations = () => {
  const { recommendations } = content;

  return (
    <section id="recommendations" className="py-12 bg-bg_light_primary">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">{recommendations.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{recommendations.subtitle}</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {recommendations.items.map((r, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 120} className="bg-white p-5 rounded-md border-2 border-slate-200">
              <h5 className="text-lg font-semibold">{r.name}</h5>
              <p className="text-sm text-gray-600">{r.title}</p>
              {r.text && <p className="mt-2 text-gray-700">{r.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
