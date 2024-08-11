import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Temp from "../Assets/IMG/tem1.png"
import Link from "next/link";
export default function Projects() {
  // Define the project objects
  const projects = [
    {
      src: "/images/temp2back.png",
      title: "SalahCar",
      src2:"/images/tem2.png",
      desc:"Unleashing Your Automotive Adventure",
      link:"http://www.google.com"
    },
    {
      src: "/images/temp6back.png",
      title: "Engineering Paathshala",
      src2:"/images/tem6.png",
      desc:"All In One Student Resource",
      link:"http://www.google.com"

    },
    {
      src: "/images/temp4back.png",
      title: "Project 3",
      src2:"/images/tem3.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
      link:"http://www.google.com"

    },
    {
      src: "/images/temp5back.png",
      title: "Project 4",
      src2:"/images/tem5.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
      link:"http://www.google.com"
    },
    {
      src: "/images/temp5back.png",
      title: "Project 5",
      src2:"/images/tem5.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
      link:"http://www.google.com"
    },
    {
      src: "/images/temp5back.png",
      title: "Project 6",
      src2:"/images/tem5.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
      link:"http://www.google.com"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#00042a] w-full text-white p-8 pb-40 ">
      <section className="flex justify-center items-center flex-col space-y-3 mb-8 gap-2">
        <h2 className="text-[4rem] font-bold">OUR WORK</h2>
        <h1 className="text-[3rem] text-cyan-300  text-center">
          Featured Website Design Projects
        </h1>
        <div className="flex justify-center items-center flex-col gap-3">
          <p className="text-[1.2rem] ">
            Custom B2C, B2B and eCommerce solutions
          </p>
          <p className="text-[1rem] text-center">
            optimized for traffic, engagement and conversion.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center w-full">
        {projects.map((project, index) => (
          <div key={index} className="contentimg relative  w-full md:w-1/2 p-2 rounded-xl" >
            <Image
              src={project.src}
              alt={project.title}
              className="object-cover w-full h-full imagebig rounded-xl  "
              height={1000}
              width={1000}
            />
           <div className="insideimg ">
           <Image
              src={project.src2}
              alt={project.title}
              className=" object-cover"
              height={800}
              width={800}
            />
           </div>
            
            <div className="blackout w-full h-[80%] bg-black  ">
            <h3 className="projectnbtn absolute top-6 left-8 text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
              {project.title}
            </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" >Featured Website Design</h2>
              <p> {project.desc} </p>
              <Link href={project.link} target="_blank">
              <h2 className="flex flex-row justify-center items-center">LAUNCH THE WEBSITE <GoChevronRight className="sideicon"/>
              </h2>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
