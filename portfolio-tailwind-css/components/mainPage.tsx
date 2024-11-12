"use client";
import React from "react";
import { useEffect } from "react";
// For Amimate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import { Sidebar } from "./sidebar";

// for AOS
const MainPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar */}

      <div className="w-1/5">
        <Sidebar />
      </div>

      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default MainPage;
