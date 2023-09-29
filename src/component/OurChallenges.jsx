import React from "react";
import CaseStudy from "/images/case-study-trip-pro-our-challenges.png";

const OurChallenge = () => {
  return (
    <section className=" container mx-auto py-20">
      <div className=" flex items-stretch justify-between">
        <img src={CaseStudy} className=" basis-1/2" alt="" />
        <div className=" basis-1/2">
          <h1 className=" .OS-36 font-bold h-[49px]  text-black ">
          OUR<span className=" text-[#2DC4EA]"> CHALLENGES </span>
          </h1>
          <div className="flex flex-col gap-3 w-full">
            <div className=" shadow-lg bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] flex items-center p-5 ">
              <span className=" inline-block w-[46px] h-[55px] text-[40px] text-gray-400">01</span>
              <span className=" inline-block w-full text-[18px]">Hello world</span>
            </div>
            <div className=" shadow-lg bg-white flex">
              <span className=" inline-block w-[46px] h-[55px] text-[40px] text-[#2DC4EA]">02</span>
              <span className=" inline-block w-full text-[18px]">Hello world</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] text-white rounded-[50px] w-[215px] h-[74px] my-2">
          VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurChallenge;
