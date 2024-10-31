import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";

const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "About us",
    slug: "/about",
  },
  {
    id: 3,
    name: "Classes",
    slug: "/classes",
  },
  {
    id: 4,
    name: "Trainers",
    slug: "/trainers",
  },
];

const Navbar = () => {
  return (
    <header className="text-cyan-600 body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div>
          {/* <Image src={""} alt={""}></Image> */}
          <Link href={"/"} className="ml-3 font-black text-3xl">
          <span className="text-white"> Xtreme </span> Fitness
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center md:gap-4 mt-5 md:mt-0 text-base justify-center">
          {navItems.map((item) => (
            <NavLink key={item.id} name={item.name} />
          ))}
        </nav>
        <button className="inline-flex items-center text-white bg-cyan-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-cyan-600
         rounded text-base mt-4 md:mt-0">
          Join us
          {/* <svg */}
          {/* //   fill="none"
          //   stroke="currentColor"
          //   stroke-linecap="round"
          //   stroke-linejoin="round"
          //   stroke-width="2"
          //   className="w-4 h-4 ml-1"
          //   viewBox="0 0 24 24" */}
          {/* // > */}
          {/* //   <path d="M5 12h14M12 5l7 7-7 7"></path>
          // </svg> */}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
