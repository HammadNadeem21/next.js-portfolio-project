"use client";
import Image from "next/image";
import profile from "../app/image/profile.jpg";
import React from "react";
// Typewriter library
import Typewriter from "typewriter-effect";
// component
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen">
      <Navbar />

      <div className="container flex justify-between px-[90px] py-[90px]">
        <div>
          <Image
            src={profile}
            alt="profile"
            height={350}
            width={350}
            className="rounded-full cursor-pointer border-[5px] border-[#448b8e] hover:shadow-custom-blue"
          />
        </div>

        <div className="ml-[200px] p-1">
          <h1 className="text-5xl font-[600] mr-[100px] mt-8">HAMMAD NADEEM</h1>
          
          <h1 className="inline text-4xl font-[600] text-white">I'm a </h1>
            <h1 className="inline-block text-4xl font-[600] mt-3"><Typewriter
              options={{
                strings: ["Web Developer", "Software Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            /></h1>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
