import Image from "next/image";
import Landing from "../components/Home";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
   <div className="bg-[#0e0c15] w-full h-[100vh]">
    <Landing />
    <AboutUs/>
   </div>
  );
}
