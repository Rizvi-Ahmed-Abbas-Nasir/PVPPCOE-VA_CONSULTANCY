"use client";
import Image from "next/image";
import Logo from "../Assets/IMG/Logo.png"
import { useState } from "react";
export default function Header(){
    const [active, setActive] = useState(false);

    return(
        <div className="fixed top-0 flex justify-center left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  ">
            <div className=" lg:h-[10.5vh] h-[11vh] w-full flex justify-between items-center  px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <div className="flex items-center gap-2 w-[20rem]"> 
                    <div>
                    <Image
                    className="w-[3rem]"
                    src={Logo}
                    width={50}
                    height={50}
                    />
                    </div>
                       <div className="flex flex-col">
                        <h3 className="text-n-1">PVPPCOE CONSULTANCY</h3>
                        <p className="text-n-1 text-xs">Initiated by Computer Department</p>
                        </div>
                </div>
             
                <div className=" lg:flex hidden uppercase w-[45%]  justify-start text-n-1 transition-colors hover:text-color-1">
                    <ul className="flex justify-center gap-15 text-xs text-neutral-100">
                        <li className="cursor-pointer hover:text-white">FEATURES</li>
                        <li  className="cursor-pointer hover:text-white">PRICING</li>
                        <li  className="cursor-pointer hover:text-white">WEBSITES</li>
                        <li  className="cursor-pointer hover:text-white">CONSULTANCY</li>
                    </ul>
                </div>
                <div className="text-n-1 lg:inline-flex hidden cursor-pointer  rounded-md text-xs  w-[7rem] border-[3px] button relative  items-center justify-center h-11 transition-colors hover:text-color-1  ">
                    <button><h3 className="uppercase">Contact Us</h3></button>
                </div>
                <div
                        className="HamBurgerIcon lg:hidden flex justify-center h-[8vh]  items-center w-[4rem] rounded-2xl xl:hidden border-[2px]"
                        onChange={() => setActive(!active)}
                    >
                <label
                    className="label flex h-[13vh] justify-center justify-items-center"
                    htmlFor="check"
                >
                    <input className="input" type="checkbox" id="check" />
                    <span className="span"></span>
                    <span className="span"></span>
                </label>
                </div>
            </div>
        </div>
    );
}