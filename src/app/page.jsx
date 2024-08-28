"use client";
import Image from "next/image";
import Landing from "../components/Landingpg";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import ProductServices from "@/components/ProductServices";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
   <div className="bg-[#0e0c15] w-full h-[100vh]">
    
    <Landing />
    <AboutUs/>
    <Projects/>
    <ProductServices />
    <Footer/>
   </div>
   </ReactLenis>
  );
}
