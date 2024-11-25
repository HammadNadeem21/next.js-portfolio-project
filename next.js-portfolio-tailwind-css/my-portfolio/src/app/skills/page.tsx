import Navbar from "@/components/Navbar";
import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";



const Skills = () => {
  return (
    <div>
      <Navbar />
      <h1 className="mt-[100px] text-center text-white text-4xl font-bold underline underline-offset-8" data-aos="fade-up">
        Skills
      </h1>

      <h2 className="text-[#448b8e] text-center text-2xl mt-[25px]" data-aos="fade-up">
        A blend of creativity, technology, and innovation.
      </h2>

      <p className="text-[#448b8e] md:w-[50%] w-[80%] m-auto text-xl mt-[70px] text-center" data-aos="fade-up">
        Over the years, I&apos;ve honed a diverse set of skills to craft impactful
        digital experiences. Here&apos;s a glimpse into the tools and technologies I
        excel in:
      </p>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

           {/* Frontend Developmen */}

          <div className="flex flex-col text-center w-full mb-10" data-aos="fade-up">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white underline underline-offset-[8px]">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* HTML */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[22px] flex-shrink-0">
                    <FaHtml5 />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-[#6d737a]">
                  <div className="w-[100%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  100%
                </h3>
              </div>
            </div>

            {/* CSS */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[22px] flex-shrink-0">
                    <FaCss3Alt />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                    CSS
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[80%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  80%
                </h3>
              </div>
            </div>


              {/* Tailwind CSS */}
              <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[22px] flex-shrink-0">
                    <SiTailwindcss />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                  Tailwind CSS
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[80%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  80%
                </h3>
              </div>
            </div>


            {/* Javascript */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[22px] flex-shrink-0">
                    <AiOutlineJavaScript />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                  Javascript
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[75%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  75%
                </h3>
              </div>
            </div>

            {/* Typescript */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[22px] flex-shrink-0">
                    <SiTypescript className="bg-transparent"/>
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                  Typescript
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[75%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  75%
                </h3>
              </div>
            </div>

           {/* Next.js */}
           <div className="p-4 w-full md:w-1/2 lg:w-1/3 " data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[25px] flex-shrink-0 pt-[2px] pl-[2px]">
                    <RiNextjsLine />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                  Next.js
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[60%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  60%
                </h3>
              </div>
            </div>
           
           {/* Backend Developmen */}

            <div className="flex flex-col text-center w-full mb-10 mt-[30px]" data-aos="fade-up">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white underline underline-offset-[8px]">
              Backend Development
            </h1>

          </div>
{/* Node.js */}

          <div className="p-4 w-full md:w-1/2 lg:w-1/3" data-aos="fade-up">
              <div className="flex rounded-lg h-full p-8 flex-col" data-aos="fade-up">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#448b8e] text-white text-[25px] flex-shrink-0 pt-[2px] pl-[2px]">
                    <FaNodeJs />
                  </div>
                  <h2 className="text-[#448b8e] text-lg title-font font-semibold">
                  Node.js
                  </h2>
                </div>

                <div className="w-full h-[5px] rounded-lg bg-white">
                  <div className="w-[10%] h-[5px] rounded-lg bg-[#448b8e]"></div>
                </div>
                <h3 className="text-[#448b8e] text-md text-right title-font font-semibold">
                  10%
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section> 
           
    </div>
  );
};

export default Skills;
