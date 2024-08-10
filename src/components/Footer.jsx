"use client";
import Image from "next/image";
import Logo from "../Assets/IMG/Logo.png";

export default function Footer() {
  return (
    <div>
      <div className="flex bg-[#0576c1]  bg-gradient-to-b flex-col md:px-20 py-10">
        <h1 className="text-3xl font-bold text-white p-4 md:p-6 md:text-6xl">Lets Grow Your Brand</h1>

        <div className="flex flex-row flex-wrap">
       
            <div className="text-white p-5 px-6">
            <ul className=" border-l px-8">
                <p className=" text-2xl md:text-3xl font-semibold pb-5">Main Services</p>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
            </ul>
            </div>

            <div className="text-white p-5 px-6">
            <ul className=" border-l px-8">
                <p className="text-2xl md:text-3xl font-semibold pb-5">Main Services</p>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
            </ul>
            </div>


            <div className="text-white p-5 px-6">
            <ul className=" border-l px-8">
                <p className="text-2xl md:text-3xl font-semibold pb-5">Main Services</p>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
            </ul>
            </div>

            <div className="text-white p-5 px-6">
            <ul className=" border-l px-8">
                <p className="text-2xl md:text-3xl font-semibold pb-5">Main Services</p>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
                <li className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer" >Custom Web design</li>
            </ul>
            </div>

        </div>

        <div className="flex items-center">
                <h1 className="text-4xl font-bold text-white p-6 ">PVPPCOE Consultancy</h1>
                <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-row flex-wrap text-white">
                <p className="px-8 text-slate-100 font-light">@pvppcoe.ac.in</p>
                <p className="px-8 text-slate-100 font-light">@pvppcoe.ac.in</p>
                <p className="px-8 text-slate-100 font-light">@pvppcoe.ac.in</p>
                <p className="px-8 text-slate-100 font-light">@pvppcoe.ac.in</p>
        
        </div>


      </div>
    </div>
  );
}
