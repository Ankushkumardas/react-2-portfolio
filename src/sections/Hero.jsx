import React from "react";
import memo from "../assets/images/memoji-computer.png";
import { FaArrowDown } from "react-icons/fa";
import grain from "../assets/images/grain.jpg";
import Starimage from '../assets/icons/star.svg'
function Hero() {
  return (
    <div className="relative z-0 py-10 md:py-38 lg:py-40 overflow-x-clip">
      {/* grain effcet */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grain})` }}
      ></div>
      {/* for rings */}
      <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      {/* <div className="absolute inset-0 size-[1420px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div> */}
      {/* stars */}
      {/* <div className="absolute">
        <Starimage/>
      </div> */}
      <div className="container max-w-screen-2xl ">
        <div className="flex flex-col items-center">
          <img src={memo} className="size-[100px]" alt="" />
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-gray-800 rounded-lg bg-gray-950">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="text-sm font-medium">Available for New project</div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="mt-6 text-3xl font-semibold tracking-wide text-center md:text-4xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I Specialize in transforming designs into functional,high
            performance web applications. Let's discuss your next project
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mt-3 md:flex-row">
          <button className="flex border border-white/15  px-3 py-1.5 text-sm font-semibold  text-white/60 rounded-lg gap-2">
            Explore my Work <FaArrowDown className="mt-1" />
          </button>
          <button className="flex border border-white/15  px-3 py-1.5 text-sm font-semibold   rounded-lg gap-2 bg-white text-black">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
