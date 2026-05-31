import React from "react";
import { content } from "../Content";

const WorkExperience = () => {
  const { workExperience } = content;

  return (
    <section id="experience" className="py-12 bg-bg_light_primary">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">{workExperience.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{workExperience.subtitle}</h4>
        <div className="mt-6 flex flex-col gap-6">
          {workExperience.roles.map((r, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white p-5 rounded-md border-2 border-slate-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-lg font-semibold">{r.role} — {r.company}</h5>
                  <p className="text-sm text-gray-600">{r.location}</p>
                </div>
                <div className="text-sm text-gray-500">{r.period}</div>
              </div>
              {r.bullets && r.bullets.length > 0 && (
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2">
                  {r.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
