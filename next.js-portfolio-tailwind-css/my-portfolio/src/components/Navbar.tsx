"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center lg:px-5">
        <div className=" text-white font-extrabold lg:text-[30px] md:text-[30px] text-[25px] hover:scale-[1.2] transition-all duration-300 ml-5 leading-tight cursor-pointer">
          HAMMAD <span className="text-[#448b8e]">NADEEM</span>
        </div>

        <ul className="gap-10 lg:gap-16 md:gap-5 sm:gap-2 hidden md:flex">
          <li>
            <Link href="/" className="nav-link hover:text-[#44868b]">
              HOME
            </Link>
          </li>

          <li>
            <Link href="/about" className="nav-link hover:text-[#44868b]">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="#projects" className="nav-link hover:text-[#44868b]">
              PROJECTS
            </Link>
          </li>

          <li>
            <Link href="#skills" className="nav-link hover:text-[#44868b]">
              SKILLS
            </Link>
          </li>

          <li>
            <Link href="#contact" className="nav-link hover:text-[#44868b]">
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="md:hidden" onClick={toggleNavbar}>
          {isClick ? (
            <IoIosCloseCircleOutline size={30} />
          ) : (
            <MdOutlineMenu size={30} />
          )}
        </div>
        {/* <MdOutlineMenu onClick={toggleNavbar} className="md:hidden sm:text-[30px]" size={30} /> */}
      </div>

      {/* Mobile navbar */}
      {isClick && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <li className="menuLink nav-link">
            <Link href={`#hero`}>HOME</Link>
          </li>

          <li className="menuLink nav-link">
            <Link href={`#about`}>ABOUT</Link>
          </li>

          <li className="menuLink nav-link">
            <Link href={`#projects`}>PROJECTS</Link>
          </li>

          <li className="menuLink nav-link">
            <Link href={`#skills`}>SKILLS</Link>
          </li>

          <li className="menuLink nav-link">
            <Link href={`#contact`}>CONTACT</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
