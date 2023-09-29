import React from "react";
import Tablet from "/images/Tablet@2x.png";

const About = () => {
  return (
    <section className=" container mx-auto w-[1350px]  py-20">
      <div className=" flex items-center justify-between gap-10">
        <div>
          <h1 className="mb-0 .OS-36 font-bold text-black mb-5 ">
            ABOUT <span className=" text-[#2DC4EA]">TRIPPRO </span>{" "}
          </h1>
          <span className=" inline-block w-[152px] h-[2px] bg-[#2DC4EA]"></span>
          <p className=" w-[665px] h-[157px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </p>
          <button className="bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA] uppercase text-white rounded-[50px] w-[280px] h-[74px] my-2">
            tour to website
          </button>
        </div>
        <div>
          <div className="relative w-[680px] ">
            <img src={Tablet} className="  w-[368px] h-[490px] absolute left-48 top-16" alt="" />
            <svg height="620" width="680">
              <circle
                cx="370"
                cy="300"
                r="200"
                stroke="#EA1A25"
                strokeWidth="7"
                fill="none"
                strokeDasharray="130,100"
                d="M5 40 l215 0"
              />
              <circle
                cx="370"
                cy="300"
                r="250"
                stroke="#EA1A25"
                strokeWidth="7"
                fill="none"
                strokeDasharray="170,300"
                d="M5 40 l215 0"
              />
              <circle
                cx="370"
                cy="300"
                r="300"
                stroke="#EA1A25"
                strokeWidth="7"
                fill="none"
                strokeDasharray="200,100"
                d="M5 40 l215 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
