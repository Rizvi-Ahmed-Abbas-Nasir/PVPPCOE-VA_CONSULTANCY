import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Temp from "../Assets/IMG/tem1.png"
export default function Projects() {
  // Define the project objects
  const projects = [
    {
      src: "/images/sample_project1.webp",
      title: "Project 1",

    },
    {
      src: "/images/sample_project2.webp",
      title: "Project 2",
    },
    {
      src: "/images/sample_project2.webp",
      title: "Project 3",
    },
    {
      src: "/images/sample_project2.webp",
      title: "Project 3",
    },
    

  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0e0c15] w-full text-white p-8">
      <section className="flex justify-center items-center flex-col space-y-3 mb-8">
        <h2 className="text-2xl font-bold">OUR WORK</h2>
        <h1 className="text-4xl font-bold text-center">
          Featured Website Design Projects
        </h1>
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl font-bold">
            Custom B2C, B2B and eCommerce solutions
          </p>
          <p className="text-2xl font-bold text-center">
            optimized for traffic, engagement and conversion.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center w-full">
        {projects.map((project, index) => (
          <div key={index} className="contentimg relative w-full md:w-1/2 p-2" >
            <Image
              src={project.src}
              alt={project.title}
              className="object-cover w-full h-full imagebig"
              height={1000}
              width={1000}
            />
           <div className="insideimg ">
           <Image
              src={Temp}
              alt={project.title}
              className=" object-cover"
              height={800}
              width={800}
            />
           </div>
            
            <div className="blackout w-full h-[80%] bg-black  ">
            <h3 className="projectnbtn absolute top-20 left-8 text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
              {project.title}
            </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" >Featured Website Design</h2>
              <p> Featured Website Design Projects
              Custom B2C, B2B and eCommerce solutions </p>
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
