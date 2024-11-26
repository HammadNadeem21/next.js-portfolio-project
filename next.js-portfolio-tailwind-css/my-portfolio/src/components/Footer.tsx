import React from "react";
import { CgMail } from "react-icons/cg";
import { FaAddressBook, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#448b8e]">
      <div className=" p-2 w-full pt-8 mt-8 text-center">
        <div className="flex justify-center">
          <CgMail className="mt-[3px] text-xl text-white" />
          <a className="text-white ml-2">hamm426623@gmail.com</a>
        </div>

        <div className="flex justify-center mt-2">
          <FaSquarePhone className="mt-[3px] text-xl text-white" />
          <a className="text-white ml-2">03221835452</a>
        </div>

        <div className="flex justify-center mt-2">
          <FaAddressBook className="mt-[3px] text-xl text-white" />
          <h4 className="text-white ml-2">
            31/121, K-area, Korangi, Karachi, Pakistan
          </h4>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/muhammad-hammad-4bba392b4/"
            target="_blank"
            className="mt-6 h-[50px] w-[50px] border-2 p-[11px] text-[25px] rounded-full cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-white"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/HammadNadeem21"
            target="_blank"
            className="mt-6 ml-3 h-[50px] w-[50px] border-2 p-[11px] text-[25px] rounded-full   cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/share/19oP2aDfZv/"
            target="_blank"
            className="mt-6 ml-3 h-[50px] w-[50px] border-2 p-[11px] text-[25px] rounded-full   cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-white"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
