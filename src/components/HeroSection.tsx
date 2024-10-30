import React from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-gray-600 body-font"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-5xl  mb-4 font-bold text-white">
          Build Your
            <br className="hidden lg:inline-block" />
            Dream Physique
          </h1>
          <p className=" text-white font-medium mb-8 leading-relaxed">
          Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse <br />
           laudantium animi vitae consectetur obcaecati
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-black font-medium bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-lg  duration-200 text-lg">
              Join us
            </button>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
