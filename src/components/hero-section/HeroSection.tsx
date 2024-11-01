import React from "react";
import Image from "next/image";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white body-font"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:mt-28 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl sm:text-7xl font-bold ">
            Build Your <br className="hidden lg:inline-block" />
            Dream Physique
          </h1>
          <p className="  font-medium mt-4 leading-relaxed">
            Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse{" "}
            <br />
            laudantium animi vitae consectetur obcaecati
          </p>
          <Button type={"button"} className="mt-4">
            Join us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
