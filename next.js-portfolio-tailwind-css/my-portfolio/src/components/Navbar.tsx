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
            <Link href="#hero" className="nav-link hover:text-[#44868b]">
              HOME
            </Link>
          </li>

          <li>
            <Link href="#hero" className="nav-link hover:text-[#44868b]">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="#hero" className="nav-link hover:text-[#44868b]">
              PROJECTS
            </Link>
          </li>

          <li>
            <Link href="#hero" className="nav-link hover:text-[#44868b]">
              SKILLS
            </Link>
          </li>

          <li>
            <Link href="#hero" className="nav-link hover:text-[#44868b]">
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
