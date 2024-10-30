import Link from "next/link";
import React from "react";

const NavLink = ({ name }: { name: string }) => {
  return (
    <>
      <Link
        href={""}
        className="mr-5 hover:text-gray-900 hover:bg-cyan-600 rounded-lg duration-200 px-3 py-1"
      >
        {name}
      </Link>
    </>
  );
};

export default NavLink;
