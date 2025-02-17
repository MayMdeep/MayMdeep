import { createElement, useRef, useEffect, useState } from "react";
import { content } from "../Content";
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  const [showToast, setShowToast] = useState(false); // State to control showing toast
  const [state, handleSubmit] = useForm("mgvopynk"); // Replace with your Formspree form ID
  
  useEffect(() => {
    // Only show the success toast once after form submission
    if (state.succeeded && !showToast) {
      toast.success("Email sent successfully!"); // Success toast
      setShowToast(true); // Set to true to avoid multiple toast
      form.current.reset(); // Reset form fields after successful submission
    }
  }, [state.succeeded, showToast]);

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              name="email" // This should match the field name in Formspree
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary hover:bg-gray-200 transition-colors duration-200"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-4"
              >
                <h4 className="text-white text-2xl">
                  {createElement(content.icon)}
                </h4>
                <a
                  className="font-Poppins text-white hover:text-gray-300 transition-colors duration-200"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
