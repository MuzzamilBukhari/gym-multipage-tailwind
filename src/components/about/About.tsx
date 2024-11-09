import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto flex gap-12 lg:gap-0 px-16 py-24 lg:flex-row flex-col items-center justify-center ">
      <div>
        <Image
          className="object-cover object-center rounded ring-2 ring-primary shadow-lg shadow-secondary/60"
          alt="hero"
          src="/images/about.jpg"
          width={520}
          height={460}
        />
      </div>
      <div className="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center items-center ">
        <h1 className="title-font sm:text-6xl text-4xl font-black  text-white">
          Why
          <span className="text-secondary"> Choose Us?</span>
        </h1>
        <div className=" space-y-4">
          <p className="mt-10 leading-relaxed">
            Our diverse membership base creates a friendly and supportive
            atmosphere, where you can make friends and stay motivated.
          </p>
          <p>Unlock your potential with our expert Personal Trainers.</p>
          <p>Elevate your fitness with practice sessions.</p>
          <p>We provide Supportive management, for your fitness success.</p>
        </div>

        <button className="inline-flex text-lg font-medium text-white mt-10 border-0 px-6 focus:outline-none py-2 bg-black border-none shadow-primary ring-2 ring-primary shadow-md rounded-lg hover:scale-105 transform transition duration-300">
          Get Started with a Free Lesson!
        </button>
      </div>
    </div>
  );
};

export default About;
