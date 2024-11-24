import Navbar from "@/components/Navbar";
import Image from "next/image";
import todo from "../../../public/todo.png";
import digitalClock from "../../../public/digitalclock.png"
import portfolio from "../../../public/portfolio1.png"
import game from "../../../public/game.png"
import dynamicresume from "../../../public/dynamicresume.png"
import nrcodex from "../../../public/nrcodex.png"
import React from "react";

// icons
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Projects = () => {
  return (
  <div>
    <Navbar/>

    <h1 className="mt-[100px] text-center text-[#448b8e] text-4xl font-bold">My Projects</h1>

    <section className="text-[#448b8e] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* projects */}
          <div className="flex flex-wrap -m-4" data-aos="fade-up">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={todo}
                alt="todo-app"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  Todo App
                </h1>

                <p className="leading-relaxed mb-3">
                A simple and efficient To-Do App to manage daily tasks. Users can add, edit, and delete tasks seamlessly. Built using Next.js for dynamic routing and Tailwind CSS for a responsive design, this project showcases my skills in creating functional web applications.
                </p>
            
                <div className="flex items-center flex-wrap mt-[110px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <SiNextdotjs className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <BiLogoTypescript className="h-[35px] w-[35px]"/>
                  </span>

                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm">
                  <SiTailwindcss className="h-[35px] w-[35px]"/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={digitalClock}
                alt="digital-clock"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  Digital Clock
                </h1>

                <p className="leading-relaxed mb-3">
                A sleek and functional Digital Clock built using HTML, CSS, and TypeScript. The clock displays the current time in hours, minutes, and seconds, updating in real-time. Styled with CSS for a clean and modern look, this project demonstrates my ability to work with TypeScript for handling dynamic functionality.
                </p>
            
                <div className="flex items-center flex-wrap mt-[80px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <FaHtml5 className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <FaCss3Alt className="h-[35px] w-[35px]"/>
                  </span>

                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm">
                  <BiLogoTypescript className="h-[35px] w-[35px]"/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={portfolio}
                alt="portfolio"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  Portfolio
                </h1>

                <p className="leading-relaxed mb-3">
                A responsive and visually appealing portfolio website created using HTML, CSS, and JavaScript. This sample project demonstrates a modern layout to showcase skills, projects, and contact information. It includes smooth navigation and interactive elements, making it a practical example of my frontend development skills.
                </p>
            
                <div className="flex items-center flex-wrap mt-[80px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <FaHtml5 className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <FaCss3Alt className="h-[35px] w-[35px]"/>
                  </span>

                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm">
                  <IoLogoJavascript className="h-[35px] w-[35px]"/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          </div>


          <div className="flex flex-wrap -m-4 mt-5" data-aos="fade-up">

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={dynamicresume}
                alt="Game"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  Dynamic Resume Builder
                </h1>

                <p className="leading-relaxed mb-3">
                A Dynamic Resume Builder created using HTML, CSS, and TypeScript. This project allows users to input their details and dynamically generates a professional resume in real-time. The app provides a clean and organized layout, styled with CSS, and leverages TypeScript for handling user inputs and data validation.
                </p>
            
                <div className="flex items-center flex-wrap mt-[100px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank" href="https://milestone5-shareable-resume-builder-one.vercel.app/">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <FaHtml5 className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <FaCss3Alt className="h-[35px] w-[35px]"/>
                  </span>

                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm">
                  <BiLogoTypescript className="h-[35px] w-[35px]"/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={game}
                alt="Game"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  Tic-Tac-Toe Game
                </h1>

                <p className="leading-relaxed mb-3">
            A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript. This interactive project allows two players to compete on a 3x3 grid. The game includes logic to detect wins, losses, and draws, making it a complete and functional implementation of the timeless game. Styled with CSS for a clean layout, it showcases my ability to create interactive applications using JavaScript.
                </p>
            
                <div className="flex items-center flex-wrap mt-[80px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <FaHtml5 className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <FaCss3Alt className="h-[35px] w-[35px]"/>
                  </span>

                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm">
                  <IoLogoJavascript className="h-[35px] w-[35px]"/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-[#448b8e] border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={nrcodex}
                alt="nrcodex"
                height={500}
                width={500}
                className="lg:h-56 md:h-40 w-full object-cover object-center"
              />
              <div className="p-6">
               
                <h1 className="title-font text-3xl text-[#448b8e] font-medium mb-3 underline underline-offset-[6px]">
                  NR Codex (Clone)
                </h1>

                <p className="leading-relaxed mb-3">
                A responsive clone of the NRCodex website built using HTML and CSS. This project replicates the layout and design of the original website, demonstrating my skills in creating pixel-perfect websites. The clone includes all the major sections, such as the header, footer, and main content, with a focus on achieving a similar look and feel as the original site
                </p>
            
                <div className="flex items-center flex-wrap mt-[75px]">
                  <a className="text-[#448b8e] inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-2xl underline underline-offset-4" target="_blank">
                    view
               
                  </a>

                  <span className="text-[#448b8e] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  <FaHtml5 className="h-[35px] w-[35px]" />
                  </span>
                  <span className="text-[#448b8e] inline-flex items-center leading-none text-sm mr-[24px]">
                  <FaCss3Alt className="h-[35px] w-[35px]"/>
                  </span>

                  
                </div>
              </div>
            </div>
          </div>
         
          </div>
         

        </div>
      </div>
    </section>
  </div>
  );
};

export default Projects;
