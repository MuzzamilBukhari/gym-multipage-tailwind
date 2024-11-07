import React from "react";
import TestimonialCard from "./TestimonialCard";
import { SectionTitle } from "..";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "HENRY LETHAM",
      desc:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc: "/images/testemonial.jpg",
    },
    {
      id: 2,
      name: "HENRY LETHAM",
      desc:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc: "/images/testemonial.jpg",
    },
    {
      id: 3,
      name: "HENRY LETHAM",
      desc:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      imgSrc: "/images/testemonial.jpg",
    },
  ];

  return (
    <section className="container text-white bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="font-black text-6xl text-center pt-8 flex justify-center">
          <SectionTitle first="Our" second="Testimonials" />
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2 text-center ">
          Our dedicated trainers are here to help you reach your fitness goals
          with personalized workouts, expert advice, and unwavering support.
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
