"use client";
import oneIMG from "../Assets/IMG/1.png"
import twoIMG from "../Assets/IMG/2.png"
import threeIMG from "../Assets/IMG/3.png"
import fourIMG from "../Assets/IMG/4.png"
import fiveIMG from "../Assets/IMG/7.png"
import sixIMG from "../Assets/IMG/6.png"
import sevenIMG from "../Assets/IMG/8.png"
import Image from "next/image";
import React, { useRef } from 'react';

export default function Landing(){
  const videoRef = useRef(null);


  if (typeof window !== 'undefined') {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }  }

  

    return(
      <div className="w-full flex flex-col ">
         <div className='HomePage '>
      <video ref={videoRef} autoPlay="autoplay" loop="loop" muted >
        <source src="/_next-video/bg.mp4" type="video/mp4" />
      </video>
      <div className='overlay'></div>
      <div className='text'>
        <h2 className="text-[0.8rem] md:text-[1.2rem] lg:text-[3rem] xl:text-[4.7rem]">PVPPCOE CONSULTANCY</h2>
        <h3  className="text-[0.6rem] md:text-[1.1rem] lg:text-[2rem] xl:text-[3.7rem]">VASANTDATA PATIL</h3>
        <p  className="text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">The need for using alternative fuel for mobility is higher than ever before. EVs are one such option as such vehicles produce zero-emission.</p>
        <div>
        <a href='#'>Contact us</a>
        </div>
		<div className='Search'>
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
		<div class="box">
			<div class="container-2">
		<span class="icon"><i class="fa fa-search"></i></span>
		<input type="search" id="search" placeholder="Search..." />
		</div>
		</div>
    </div>
      </div>
     
      </div>
      <div className="slider  ">
	<div className="slide-track z-4">
		<div className="slide z-4">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={twoIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={threeIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={threeIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={twoIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
	</div>
      </div>
      </div>
    );
}