import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const page = () => {
  return <div>
    <section className="bg-black text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-6xl font-black title-font mb-4 text-white tracking-widest">MEET 
        <span className="text-secondary"> OUR TEAM</span></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our dedicated trainers are here to help you reach your fitness goals with personalized workouts, expert advice, and unwavering support. From strength training to flexibility and endurance, each team member brings unique expertise to ensure you get the most out of every session. Let’s crush those goals together!</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
  alt="team"
  className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4  ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/Man.jpg"
  width={200}
  height={200}
/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg">HAMZA</h2>

            <p className="mb-4">Strength & Conditioning Coach specializing in power and endurance training.</p>
            <span className="inline-flex">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400"/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
  alt="team"
  className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4  ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/Man.jpg"
  width={200}
  height={200}
/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg">TALHA</h2>
            {/* <h3 className=" mb-3">Designer</h3> */}
            <p className="mb-4">Nutrition Coach focused on personalized meal planning for optimal fitness.</p>
            <span className="inline-flex">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400"/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
  alt="team" 
  className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4  ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/Man.jpg"
  width={200}
  height={200}
/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg">KASHAN</h2>
            {/* <h3 className=" mb-3">UI Developer</h3> */}
            <p className="mb-4">Cardio Trainer dedicated to improving stamina and cardiovascular health.</p>
            <span className="inline-flex">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400"/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
  alt="team"
  className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/Man.jpg"
  width={200}
  height={200}
/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg">AHMED</h2>
            {/* <h3 className=" mb-3">Designer</h3> */}
            <p className="mb-4">Mobility & Flexibility Trainer enhancing range of motion and preventing injuries.</p>
            <span className="inline-flex">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400"/>
              </a>
              <a className="ml-2">
              <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400"/>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>;
};

export default page;
