import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div id="about" className="text-[#448b8e]">
      <Navbar />

      <div className="lg:px[80px] sm:px-[100px] px-[50px] py-[70px]">
        <div className="lg:w-[1000px] md:w-[700px] text-[20px] ">
          <div data-aos="fade-up" className="md:mt-20 sm:mt-3">
            <h1 className="text-white text-4xl font-bold">ABOUT ME</h1>
            <p className="mt-5 md:text-[22px] text-[18px]">
              Hi! I&#39;m Hammad, a passionate Web Developer specializing in
              frontend development with a keen eye for design and functionality.
              I am also venturing into software development and backend
              programming, aiming to become a full-stack developer.
              <br />
              My current journey includes exploring cutting-edge technologies
              like Artificial Intelligence, Web 3.0, and the Metaverse, as I
              believe in staying ahead in the ever-evolving tech landscape.
            </p>
          </div>
          <br />
          <div data-aos="fade-up">
            <h2 className="text-white text-3xl font-bold">What I Do</h2>
            <ul className="list-none mt-5 md:text-[22px] text-[18px]">
              <li className="before:content-['•'] before:text-white before:text-2xl before:mr-4">
                <span className="text-white font-bold">
                  Frontend Development :
                </span>{" "}
                Creating user-centric, responsive, and visually appealing
                interfaces.
              </li>
              <li className="before:content-['•'] before:text-white before:text-2xl before:mr-4">
                <span className="text-white font-bold">Backend Learning :</span>{" "}
                Building robust and scalable server-side applications.
              </li>
              <li className="before:content-['•'] before:text-white before:text-2xl before:mr-4">
                <span className="text-white font-bold">
                  Software Development :
                </span>{" "}
                Developing innovative software solutions to solve real-world
                problems.
              </li>
              <li className="before:content-['•'] before:text-white before:text-2xl before:mr-4">
                <span className="text-white font-bold">
                  AI & Web 3.0 Enthusiast :
                </span>{" "}
                Understanding and applying futuristic technologies in modern web
                applications.
              </li>
            </ul>
          </div>
          <br />

          <div data-aos="fade-up">
            <h2 className="text-white text-3xl font-bold">My Vision</h2>
            <p className="mt-5 md:text-[22px] text-[18px]">
              I aim to combine my skills in{" "}
              <span className="font-bold">
                web development, software engineering, and emerging technologies
              </span>{" "}
              to deliver creative solutions that shape the future of digital
              experiences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
