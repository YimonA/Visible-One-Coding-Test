import React, { useState } from "react";
import Img1 from "/images/trippro.com.hk_cn_-2.png";
import Img2 from "/images/trippro.com.hk_cn_-1.png";
import Img1Mobile from "/images/trippro.com.hk_(iPhone X)-6@2x.png";
import Img2Mobile from "/images/trippro.com.hk_(iPhone X)-5.png";
import Img3Mobile from "/images/trippro.com.hk_(iPhone X)-4.png";
import Img4Mobile from "/images/trippro.com.hk_(iPhone X)-3.png";
import SmartPhone from "/images/smartphone(1).svg";
import DesktopSvg from "/images/desktop(1).svg";

const OldWebsite = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    {
      id: 3,
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
  ]);
  const [showDesktop, setShowDesktop] = useState(true);

  return (
    <section className=" w-full h-[553px] bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA]">
      <div className="h-full flex items-stretch justify-between">
        {showDesktop ? (
          <div className="basis-1/3 flex bg-white h-full">
            <img src={Img1} className="w-[631px] h-[360px] -ml-[35%]" alt="" />
            <div className=" w-[679px] h-[405px] border-[1px] rounded-t-xl 	bg-[#58595B] flex justify-center items-center -mr-[85%]">
              <img src={Img2} className="w-[631px] h-[306px] " alt="" />
            </div>
          </div>
        ) : (
          <div className="basis-1/2 flex bg-white h-full">
            <img
              src={Img1Mobile}
              className="w-[240px] h-[406px] -ml-[2%]"
              alt=""
            />
            <img src={Img2Mobile} className="w-[240px] h-[406px] " alt="" />
            <img src={Img3Mobile} className="w-[240px] h-[406px] " alt="" />
            <div className=" w-[266px] h-[450px] flex justify-center items-center">
              <img src={SmartPhone} alt="" />
              <img src={Img4Mobile} className="w-[240px] h-[425px] " alt="" />
            </div>
          </div>
        )}
        {/* old website */}
        <div className="basis-1/2 p-10">
          <h1 className=" .OS-36 font-bold text-white uppercase mb-10">
            Their Old Website & Problems
          </h1>
          {lists.map((list) => {
            return (
              <p key={list?.id} className="mb-5">
                {list?.body}
              </p>
            );
          })}
          <button
            onClick={() => setShowDesktop(!showDesktop)}
            className="bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] uppercase text-white rounded-[50px] w-[214px] h-[47px] border-2 border-white my-2 flex justify-center items-center"
          >
            {showDesktop ? (
              <div className=" flex justify-center items-center">
                <span className=" inline-block w-[26px] h-[26px] rounded-full bg-white"></span>
                <span className=" mx-6">Mobile</span>
              </div>
            ) : (
              <div className=" flex justify-center items-center">
                <span className=" mx-6">Desktop</span>
                <span className=" inline-block w-[26px] h-[26px] rounded-full bg-white"></span>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OldWebsite;
