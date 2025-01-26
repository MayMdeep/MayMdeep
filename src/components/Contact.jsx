import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Clear all input fields
          toast.success("Email sent successfully!"); // Success toast
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again."); // Error toast
        }
      );
  };

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
            onSubmit={sendEmail}
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
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
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
            <button
              className="btn self-start bg-white text-dark_primary hover:bg-gray-200 transition-colors duration-200"
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