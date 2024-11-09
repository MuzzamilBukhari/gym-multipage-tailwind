import React from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  desc: string;
  imgSrc: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, imgSrc, desc } = testimonial;
  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <Image
          alt="profile"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block ring-2 ring-primary shadow-lg shadow-secondary/60"
          src={imgSrc}
          width={80} // Width in pixels
          height={80} // Height in pixels
        />
        <p className="leading-relaxed ">{desc}</p>
        <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
        <h2 className="text-white font-medium title-font tracking-wider text-sm">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
