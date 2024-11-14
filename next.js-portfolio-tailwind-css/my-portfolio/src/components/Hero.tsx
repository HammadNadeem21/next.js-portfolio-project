"use client";
import Image from "next/image";
import profile from "../app/image/profile.jpg";
import React from "react";
// Typewriter library
import Typewriter from "typewriter-effect";
// component
import Navbar from "./Navbar";

// Social-icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen">
      <Navbar />

      <div className="container flex justify-between px-[90px] py-[90px]">
        {/* Hero-section-left-side */}

        <div>
          <Image
            src={profile}
            alt="profile"
            height={350}
            width={350}
            className="rounded-full cursor-pointer border-[5px] border-[#448b8e] hover:shadow-custom-blue transition-all duration-300"
          />
        </div>

        {/* Hero-section-right-side */}

        <div className="ml-[200px] p-1">
          <h1 className="text-5xl font-[600] mr-[70px] mt-8">HAMMAD NADEEM</h1>

          <h1 className="inline text-4xl font-[600] text-white">I'm a </h1>
          <h1 className="inline-block text-4xl font-[600] mt-3">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Software Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-2xl mt-3">
            "Web & Software Development for a Smarter Future"
          </p>

          {/* social-icons */}
          <div className="flex">
            <a href="https://www.linkedin.com/in/muhammad-hammad-4bba392b4/" target="_blank" className="mt-6 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300">
              <FaLinkedinIn />
            </a>

            <a href="https://github.com/HammadNadeem21" target="_blank" className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300">
              <FaGithub />
            </a>

            <a href="https://www.facebook.com/share/19oP2aDfZv/" target="_blank" className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300">
              <FaFacebook />
            </a>
          </div>

          {/* button */}
          <button className="mt-4 w-[150px] h-[50px]  border-2 border-[#44868b] rounded-full text-lg font-bold hover:bg-[#44868b] hover:text-[#0a1a30] hover:scale-[1.1] transition-all duration-300">
            <a
              href="https://www.linkedin.com/in/muhammad-hammad-4bba392b4/"
              target="_blank"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
