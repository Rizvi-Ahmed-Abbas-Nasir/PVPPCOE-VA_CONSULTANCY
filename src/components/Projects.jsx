import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Temp from "../Assets/IMG/tem1.png"
export default function Projects() {
  // Define the project objects
  const projects = [
    {
      src: "/images/temp2back.png",
      title: "SalahCar",
      src2:"/images/tem2.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
    },
    {
      src: "/images/temp6back.png",
      title: "Project 2",
      src2:"/images/tem6.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",

    },
    {
      src: "/images/temp4back.png",
      title: "Project 3",
      src2:"/images/tem3.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",

    },
    {
      src: "/images/temp5back.png",
      title: "Project 3",
      src2:"/images/tem5.png",
      desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",

    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#41356d] w-full text-white p-8 pb-40">
      <section className="flex justify-center items-center flex-col space-y-3 mb-8 gap-2">
        <h2 className="text-[4rem] font-bold">OUR WORK</h2>
        <h1 className="text-[3rem]  text-center">
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
              <h4 className="flex ">LAUNCH THE WEBSITE 
              <GoChevronRight className="sideicon"/>
              </h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
