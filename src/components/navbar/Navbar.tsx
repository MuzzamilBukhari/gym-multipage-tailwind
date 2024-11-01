import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Button from "../Button";

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
    <header className="text-primary body-font bg-black hidden md:flex ">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
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
        <Button type="button" className="py-1">
          Join us
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
