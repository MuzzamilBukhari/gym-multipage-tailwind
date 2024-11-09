import React from "react";
import TestimonialCard from "./TestimonialCard";
import { SectionTitle } from "..";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "SAMEER AWAN",
      desc:
        "Joining this gym has been a game-changer for me! The trainers are knowledgeable, and the support from the community keeps me motivated every day.",
      imgSrc: "/images/testemonial1.jpg",
    },
    {
      id: 2,
      name: "SAAD ALI",
      desc:
        "I’ve seen amazing progress in just a few months. The equipment is top-notch, and the atmosphere is always welcoming!",
      imgSrc: "/images/testemonial2.jpg",
    },
    {
      id: 3,
      name: "USAMA KHAN",
      desc:
        "This is more than a gym—it's a second home. I've not only achieved my fitness goals but also gained confidence and new friends along the way!",
      imgSrc: "/images/testemonial3.jpg",
    },
  ];

  return (
    <section className=" text-white bg-black body-font">
      <div className="container px-5 py-24 mx-auto ">
        <SectionTitle first="Our" second="Testimonials" />
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2 text-center ">
          Real Results, Real Stories: See What Our Members Have to Say!
        </p>
        <div className="flex mx-8 mt-16 flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
