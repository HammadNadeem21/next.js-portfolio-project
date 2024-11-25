"use client";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import React from "react";
// Typewriter library
import Typewriter from "typewriter-effect";
// component

// Social-icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen">

      {/* Hero section start */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center pt-[100px] lg:px-[80px] md:px-[50px]  sm:justify-center">
        {/* Hero-section-left-side */}
        

        <div data-aos="zoom-in-up" className="flex justify-center">
          <Image
            src={profile}
            alt="profile"
            height={400}
            width={400}
            className="lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] sm:h-[350px] sm:w-[350px] h-[300px] w-[300px] md:rounded-full sm:rounded-full rounded-full cursor-pointer border-[5px] border-[#448b8e] hover:shadow-custom-blue transition-all duration-300"
          />
        </div>

        {/* Hero-section-right-side */}

        <div data-aos="zoom-in-up" className="md:text-left text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:font-[600] md:font-[600] mt-8">HAMMAD NADEEM</h1>

          <h1 className="inline lg:text-4xl md:text-3xl text-2xl font-[600] text-white">I'm a </h1>
          <h1 className="inline-block lg:text-4xl md:text-3xl text-2xl font-[600] mt-3">
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
          <p className="lg:text-3xl md:text-2xl text-1xl mt-3">
          &quot;Web & Software Development for a Smarter Future&quot;
          </p>

          {/* social-icons */}
          <div className="flex md:justify-start justify-center">
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
              className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/share/19oP2aDfZv/"
              target="_blank"
              className="mt-6 ml-3 h-[50px] w-[50px] border-2 border-[#44868b] p-[11px] text-[25px] rounded-full  hover:bg-[#448b86] hover:text-white cursor-pointer hover:scale-[1.1] hover:translate-y-[-5px] transition-all duration-300"
            >
              <FaFacebook />
            </a>
          </div>

          {/* button */}
          <button className="mt-4 w-[150px] h-[50px]  border-2 border-[#44868b] rounded-full text-lg font-bold hover:bg-[#44868b] hover:text-white hover:scale-[1.1] transition-all duration-300">
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
