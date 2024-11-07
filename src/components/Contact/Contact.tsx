import React from "react";
import { SectionTitle } from "../";
const Contact = () => {
  return (
    <div>
      <section className="container text-white bg-black body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <SectionTitle first="Contact" second="Us" />
            <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base">
              We’d love to hear from you! Whether you have questions about
              <br /> our services, want to schedule a consultation, or need
              assistance,
              <br /> our team is here to help. Reach out to us today!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black -opacity-40 rounded border border-secondary focus:border-primary focus:bg-black focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black first:bg-opacity-40 rounded border border-secondary focus:border-primary focus:bg-black focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black first:bg-opacity-40 rounded border border-secondary focus:border-primary focus:bg-black focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 rounded text-lg font-semibold hover:text-black hover:bg-primary shadow-primary ring-2 ring-primary shadow-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
