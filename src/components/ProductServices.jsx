"use client";
import { useState } from "react";

export default function ProductServices() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-start bg-[#0e0c15] relative top-[-10rem] gap-8 z-[100] pt-10">
      <div className="flex flex-col items-center w-full gap-2 justify-center">
        <h2 className="text-white text-[3rem]">Our Website Design Process</h2>
        <h5 className="text-white text-2xl">
          How to create a website tailored to your unique business goals?
        </h5>
        <h5 className="text-white text-lg">
          Take a look at our design process that helps us deliver
        </h5>
        <h4 className="text-white text-sm">
          Customized and goal-oriented digital solutions.
        </h4>
      </div>
      <div
        className={`w-[95%] rounded-xl h-[100%] relative CardProduct ${
          isHovered ? "bg-img-hover" : "bg-img-default"
        }  ${isHovered2 ? "bg-img-hover2" : "bg-img-default"}
         ${isHovered1 ? "bg-img-hover1" : "bg-img-default"}`}
      >
        <div className="Cards"></div>
        <div className="flex justify-around w-full h-full relative z-2">
          <div
            className={`w-[30rem] h-full p-10 flex flex-col items-center justify-end  border-r cursor-pointer   Cardone`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center justify-center gap-5 CardDiv">
              <h1 className="text-[4rem] text-white">01</h1>
              <div>
                <h1 className="text-white text-[1.5rem] font-bold">
                  Custom Web Design & Development
                </h1>
              </div>
            </div>
            <div className="CardPara text-white w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae eros sit amet purus hendrerit fringilla.
                Quisque consectetur risus nec erat suscipit, ac dignissim magna
                facilisis.
              </p>
            </div>
          </div>
          <div
            className={`w-[30rem] h-full p-10 flex flex-col items-center justify-end  border-r cursor-pointer   Cardone`}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div className="flex items-center justify-center gap-5 CardDiv">
              <h1 className="text-[4rem] text-white">02</h1>
              <div>
                <h1 className="text-white text-[1.5rem] font-bold">
                  Custom Web Design & Development
                </h1>
              </div>
            </div>
            <div className="CardPara text-white w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae eros sit amet purus hendrerit fringilla.
                Quisque consectetur risus nec erat suscipit, ac dignissim magna
                facilisis.
              </p>
            </div>
          </div>
          <div
            className={`w-[30rem] h-full p-10 flex flex-col items-center justify-end cursor-pointer   Cardone`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="flex items-center justify-center gap-5 CardDiv">
              <h1 className="text-[4rem] text-white">03</h1>
              <div>
                <h1 className="text-white text-[1.5rem] font-bold">
                  Custom Web Design & Development
                </h1>
              </div>
            </div>
            <div className="CardPara text-white w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae eros sit amet purus hendrerit fringilla.
                Quisque consectetur risus nec erat suscipit, ac dignissim magna
                facilisis.
              </p>
            </div>
          </div>
          {/* Repeat similar blocks for other cards */}
        </div>
      </div>
    </div>
  );
}
