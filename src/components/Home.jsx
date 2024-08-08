"use client";
import React, { useRef } from 'react';

export default function Landing(){
  const videoRef = useRef(null);


  if (typeof window !== 'undefined') {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }  }

    return(
      <div className="w-full">
         <div className='HomePage'>
      <video ref={videoRef} autoPlay="autoplay" loop="loop" muted >
        <source src="/_next-video/bg.mp4" type="video/mp4" />
      </video>
      <div className='overlay'></div>
      <div className='text'>
        <h2>PVPPCOE CONSULTANCY</h2>
        <h3>VASANTDATA PATIL</h3>
        <p>The need for using alternative fuel for mobility is higher than ever before. EVs are one such option as such vehicles produce zero-emission.</p>
        <div>
        <a href='#'>Explore</a>
        </div>
      </div>
      <div className='IconSocial'> 
      <ul>
        {/* <li classNaem='icon1' > <img classNaem='icon1' src={facebookicon} alt="facebook" /></li>
        <li className='icon2'>  <img  src={intagramicon} alt="insta" /></li>
        <li className='icon3'> <img  src={twittericon} alt="twitter" /></li> */}
      </ul>
      </div>
      </div>
      </div>
    );
}