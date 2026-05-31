import React from "react";
import { content } from "../Content";

const Languages = () => {
  const { languages } = content;

  return (
    <section id="languages" className="py-12">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">{languages.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{languages.subtitle}</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languages.languages.map((lang, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white p-5 rounded-md border-2 border-slate-200"
            >
              <h5 className="text-lg font-semibold">{lang.name}</h5>
              <p className="text-sm text-gray-600">{lang.level}</p>
              <p className="mt-2 text-sm text-gray-700">{lang.details}</p>
              {lang.highlight && (
                <p className="mt-2 text-sm text-green-600 font-semibold">{lang.highlight}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
