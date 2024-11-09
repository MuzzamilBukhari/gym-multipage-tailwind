import React from "react";
import { Button } from "../";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white body-font pt-6"
      style={{ backgroundImage: "url('/images/boy.jpg')" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 mt-20 lg:mt-28 md:pl-16 flex flex-col md:items-start md:text-left mb-16 sm:mb-0 items-center text-center">
          <h1 className="title-font text-6xl sm:text-7xl font-bold ">
            Build Your <br className="hidden lg:inline-block" />
            Dream Physique
          </h1>
          <p className="  font-medium mt-4 leading-relaxed">
            Unlock your potential with our expert Personal Trainers. <br />
            Elevate your fitness with practice sessions.
          </p>
          <Button type={"button"} className="mt-4 bg-secondary ">
            Join us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
