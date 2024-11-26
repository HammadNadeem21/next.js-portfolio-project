import Navbar from "@/components/Navbar";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />


      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-white underline underline-offset-[10px]">
              Contact Us
            </h1>
          
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap md:flex-row flex-col -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-[#448b8e]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black bg-opacity-50 rounded border border-[#448b8e] focus:border-[#448b8e] focus:bg-black focus:ring-2 focus:ring-[#448b8e] text-base outline-none text-[#448b8e] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-[#448b8e]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black bg-opacity-50 rounded border border-[#448b8e] focus:border-[#448b8e] focus:bg-black focus:ring-2 focus:ring-[#448b8e] text-base outline-none text-[#448b8e] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md text-[#448b8e]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black bg-opacity-50 rounded border border-[#448b8e] focus:border-[#448b8e] focus:bg-black focus:ring-2 focus:ring-[#448b8e] h-32 text-base outline-none text-[#448b8e] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-[#448b8e] hover:text-white bg-black hover:bg-[#448b8e] border-2 border-[#448b8e] rounded-full py-2 px-8 focus:outline-none text-lg hover:scale-[1.1] transition-all duration-300">
                  Submit
                </button>
              </div>
              <div className=" p-2 w-full pt-8 mt-8 border-t border-[#448b8e] text-center">
                <div className="flex justify-center">
                  <CgMail className="mt-[3px] text-xl text-[#448b8e]" />
                  <a className="text-[#448b8e] ml-2">hamm426623@gmail.com</a>
                </div>

                <div className="flex justify-center mt-2">
                  <FaSquarePhone className="mt-[3px] text-xl text-[#448b8e]" />
                  <a className="text-[#448b8e] ml-2">03221835452</a>
                </div>

                <div className="flex justify-center mt-2">
                  <FaAddressBook className="mt-[3px] text-xl text-[#448b8e]" />
                  <h4 className="text-[#448b8e] ml-2">
                    31/121, K-area, Korangi, Karachi, Pakistan
                  </h4>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/muhammad-hammad-4bba392b4/"
                    target="_blank"
                    className="mt-6 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-[#448b8e]"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://github.com/HammadNadeem21"
                    target="_blank"
                    className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-[#448b8e]"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.facebook.com/share/19oP2aDfZv/"
                    target="_blank"
                    className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300 text-[#448b8e]"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
