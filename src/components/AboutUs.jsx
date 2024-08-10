import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
const abcd = "bg-[#0e0c15]";
export default function AboutUs() {
  return (
    <div className="h-screen flex flex-col md:flex-row  bg-[#00042a] w-full relative ">
       <div className="circles" id="cir1"></div>
         
         
      <section className="flex-1 flex flex-col justify-center z-4 items-start p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Creative Web Agency Delivering Custom Solutions
        </h1>
        <ul className="space-y-6 text-lg md:text-xl lg:text-2xl">
          <li className="flex items-center">
            <FaLocationArrow fill="cyan" className="mr-2" />
            <span>
              Custom Web Design Solutions{" "}
              <span className="text-cyan-300 font-bold">
                To Drive Conversions
              </span>
            </span>
          </li>
          <li className="flex items-center">
            <FaLocationArrow fill="cyan" className="mr-2" />
            <span>
              Effective Marketing Campaigns{" "}
              <span className="text-cyan-300 font-bold">
                To Generate Growth
              </span>
            </span>
          </li>
          <li className="flex items-center">
            <FaLocationArrow fill="cyan" className="mr-2" />
            <span>
              Tailored Branding Strategies{" "}
              <span className="text-cyan-300 font-bold">
                To Drive Engagement
              </span>
            </span>
          </li>
        </ul>
      </section>
      <section className="flex-1 flex justify-center items-center p-8 md:p-12 z-4">
        <Image
          src="/images/solutions.webp"
          width={600}
          height={600}
          alt="solutions"
          className="rounded-lg shadow-lg"
        />
      </section>
    </div>
  );
}
