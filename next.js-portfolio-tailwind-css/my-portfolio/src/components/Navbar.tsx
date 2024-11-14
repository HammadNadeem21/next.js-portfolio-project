import Link from "next/link";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center px-5">
        <div className=" text-white font-extrabold text-[30px] hover:scale-[1.2] transition-all duration-300 ml-5 leading-tight cursor-pointer">
          HAMMAD <span className="text-[#448b8e]">NADEEM</span>
        </div>

        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li>
            <Link
              href={`#hero`}
              className="text-white font-[600] hover:text-[#448b8e] cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#448b8e] transition-all duration-300"
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href={`#about`}
              className="text-white font-[600] hover:text-[#448b8e] cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#448b8e] transition-all duration-300"
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link
              href={`#projects`}
              className="text-white font-[600] hover:text-[#448b8e] cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#448b8e] transition-all duration-300"
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link
              href={`#skills`}
              className="text-white font-[600] hover:text-[#448b8e] cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#448b8e] transition-all duration-300"
            >
              SKILLS
            </Link>
          </li>

          <li>
            <Link
              href={`#contact`}
              className="text-white font-[600] hover:text-[#448b8e] cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#448b8e] transition-all duration-300"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <MdOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
