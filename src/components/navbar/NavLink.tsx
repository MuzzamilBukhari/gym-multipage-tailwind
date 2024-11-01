import Link from "next/link";
import React from "react";

const NavLink = ({ name }: { name: string }) => {
  return (
    <>
      <Link
        href={""}
        className="mr-5 font-medium hover:text-gray-900 ring-secondary hover:bg-secondary rounded-lg duration-200 px-3 py-1"
      >
        {name}
      </Link>
    </>
  );
};

export default NavLink;
