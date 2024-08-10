"use client";
import "../app/globals.css";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [active, setActive] = useState(false);

    return(<>
    
        <div className=" w-full  h-[180vh] bg-black flex-col overflow-hidden relative"  >
         <div className="w-full h-[35%] bg-white flex align-end z-99  gap-[100px]" id="page4up">
          <div className="w-[40%] h-[80%] flex-col align-top pt-[6vw]">
            <h3 >Why are your here ?</h3>
            <h5>Explore our web design services</h5>
          </div>
          <div className="w-[30%] h-[80%] flex-col align-bottom pt-[6vw] ">
            <p>As a full-service web design agency, we handle all of your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement.</p>
            <h4>Continue Reading
            </h4>
          </div>
         </div>
         <section className="allimages w-full h-[40%] flex z-5 align-middle justify-items-center bg-slate-600">
          <div className="imagediv ">
          <Image
          src={"/images/sample_project1.webp"}
          alt="rectangle"
          className="image1p4"
          height={100}
          width={100}
        />
          </div>
          <div className="imagediv bg-slate-100">
          <Image
          src={"/images/sample_project1.webp"}
          alt="rectangle"
          className="image1p4"
          height={1000}
          width={1000}
        />
          </div>
          <div className="imagediv ">
          <Image
          src={"/images/sample_project1.webp"}
          alt="rectangle"
          className="image1p4"
          height={1000}
          width={1000}
        />
          </div>
          <div className="imagediv ">
          <Image
          src={'/images/sample_project1.webp'}
          alt="rectangle"
          className="image1p4"
          height={1000}
          width={1000}
        />
          </div>
          <div className="imagediv ">
          <Image
          src={"/images/sample_project1.webp"}
          alt="rectangle"
          className="image1p4"
          height={1000}
          width={1000}
        />
          </div>
         </section>
         <section className="w-full h-[55%] bg-white flex " id="belowp4" >
          
            <h2 >Our Website Design Process</h2>
            <h5>How to create a website tailored to your unique business goals?</h5>
            <h5>Take a look at our design process that helps us deliver</h5>
            <h4>customized and goal-oriented digital solutions.</h4>
          <div className="w-[90%] bg-slate-700 flex justify-between h-[30%]" id="lowpart">
            <div className="lpcard  ">hello</div>
            <div className="lpcard ">hello</div>
            <div className="lpcard ">hello</div>
            <div className="lpcard ">hello</div>
            <div className="lpcard ">hello</div>
            <div className="lpcard ">hello</div>
            
        </div>
         </section>
        </div>
        </>
    );
}