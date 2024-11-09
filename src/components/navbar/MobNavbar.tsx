"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { CgGym } from "react-icons/cg";

const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About us", slug: "/about" },
  { id: 3, name: "Pricing", slug: "/pricing" },
  { id: 4, name: "Trainers", slug: "/trainers" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-primary body-font bg-black flex flex-col md:hidden">
      <div className="container mx-auto flex justify-between flex-wrap p-5 items-center">
        <div className="flex justify-center items-center gap-2">
          <CgGym size={35} />
          <Link href={"/"} className=" font-black text-2xl">
            <span className="text-white"> Xtreme</span>Fitness
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
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobNavbar;
