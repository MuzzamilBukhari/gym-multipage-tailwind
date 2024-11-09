import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-black body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            href={"/"}
          >
            <span className="ml-3 text-xl font-bold">
              Xtreme<span className="text-primary">Fitness</span>
            </span>
          </Link>
          <p className="text-md text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary sm:py-2 sm:mt-0 mt-4">
            © 2024 Xterme Fitness
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a>
              <FaFacebook className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4">
              <FaSquareXTwitter className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4">
              <FaInstagramSquare className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4">
              <FaLinkedin className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
