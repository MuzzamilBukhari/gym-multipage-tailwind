"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Button from "../Button";

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About us", slug: "/about" },
  { id: 3, name: "Classes", slug: "/classes" },
  { id: 4, name: "Trainers", slug: "/trainers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className="text-primary body-font bg-black">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <div className="flex justify-between items-center w-full md:w-auto">
    //       <Link href="/" className="ml-3 font-black text-3xl">
    //         <span className="text-white"> Xtreme </span> Fitness
    //       </Link>
    //       {/* Hamburger Icon */}
    //       <button
    //         className="text-white md:hidden block focus:outline-none"
    //         onClick={() => setIsOpen(!isOpen)}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //     {/* Navigation Links */}
    //     <nav
    //       className={`${
    //         isOpen ? "block" : "hidden"
    //       } md:flex md:items-center md:ml-auto md:gap-4 mt-5 md:mt-0 text-base justify-center w-full md:w-auto`}
    //     >
    //       {navItems.map((item) => (
    //         <NavLink key={item.id} name={item.name} />
    //       ))}
    //     </nav>
    //     <div className={`${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
    //       <Button type="button" className="py-1">
    //         Join us
    //       </Button>
    //     </div>
    //   </div>
    // </header>
    <header className="text-primary body-font bg-black flex flex-col md:hidden">
      <div className="container mx-auto flex justify-between flex-wrap p-5 items-center">
        <div>
          {/* <Image src={""} alt={""}></Image> */}
          <Link href={"/"} className="ml-3 font-black text-2xl">
            <span className="text-white"> Xtreme </span> Fitness
          </Link>
        </div>

        <button
          className="text-white block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="">
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          }  flex-col items-center gap-2 text-base justify-center absolute top-16 -right-4 bg-black rounded-md p-4`}
        >
          {navItems.map((item) => (
            <NavLink key={item.id} name={item.name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
