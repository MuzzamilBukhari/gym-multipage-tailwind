import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Trainer = () => {
  return (
    <div className="flex flex-wrap mt-20 m-4">
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

            <p className="mb-4">
              Strength & Conditioning Coach specializing in power and endurance
              training.
            </p>
            <span className="inline-flex">
              <a>
                <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400" />
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
            <p className="mb-4">
              Nutrition Coach focused on personalized meal planning for optimal
              fitness.
            </p>
            <span className="inline-flex">
              <a>
                <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400" />
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
            <p className="mb-4">
              Cardio Trainer dedicated to improving stamina and cardiovascular
              health.
            </p>
            <span className="inline-flex">
              <a>
                <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400" />
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
            <p className="mb-4">
              Mobility & Flexibility Trainer enhancing range of motion and
              preventing injuries.
            </p>
            <span className="inline-flex">
              <a>
                <FaFacebook className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaSquareXTwitter className="w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
              </a>
              <a className="ml-2">
                <FaInstagramSquare className="w-6 h-6 hover:text-secondary  hover:scale-110 transform transition duration-400" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
