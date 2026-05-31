import React from "react";
import { content } from "../Content";

const Education = () => {
  const { education } = content;

  return (
    <section id="education" className="py-12">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">{education.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{education.subtitle}</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {education.items.map((it, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 120} className="bg-white p-5 rounded-md border-2 border-slate-200">
              <h5 className="text-lg font-semibold">{it.title}</h5>
              <p className="text-sm text-gray-600">{it.org} • {it.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
