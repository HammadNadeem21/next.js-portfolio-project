"use client"

import Hero from "@/components/Hero";
// import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset:160
    });
    AOS.refresh()
  }, []);
  return (
    <main>
      <Navbar />
      <Hero/>
      <Footer/>
    </main>
  );
}
