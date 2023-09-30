import { useState } from "react";
import Img1 from "/images/trippro.com.hk_cn_-2.png";
import Img2 from "/images/trippro.com.hk_cn_-1.png";
import Img1Mobile from "/images/trippro.com.hk_(iPhone X)-6@2x.png";
import Img2Mobile from "/images/trippro.com.hk_(iPhone X)-5@2x.png";
import Img3Mobile from "/images/trippro.com.hk_(iPhone X)-4@2x.png";
import Img4Mobile from "/images/trippro.com.hk_(iPhone X)-3@2x.png";
import SmartPhone from "/images/smartphone(1).svg";
import img1 from "/images/keyboard-left-arrow-button.svg";
import img2 from "/images/keyboard-left-arrow-button-1.svg";
import arrow from "/images/arrow-pointing-to-right-4.svg";
import { motion } from "framer-motion";

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
    <section className=" w-full h-[553px] ">
      <motion.div
        initial={{ opacity: 0, x: -1500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        viewport={{ once: false }}
        className="h-full flex items-stretch"
      >
        {showDesktop ? (
          <div className="z-30 2xl:basis-3/10 flex bg-white h-full">
            <img
              src={Img1}
              className="w-[631px] h-[360px] -ml-[50%] 2xl:-ml-[25%]"
              alt=""
            />
            <div className=" w-[600px] ">
              <div className=" w-[600px] h-[405px] border-[20px] border-[#58595B] rounded-t-[30px] bg-[#58595B] flex justify-center items-center">
                <img
                  src={Img2}
                  className="w-[631px] h-[356px] border-2 border-[#58595B] rounded-t-[20px]"
                  alt=""
                />
              </div>
              <div className=" w-[600px] h-[62px] border-[1px]  bg-[#C5CDD3] flex justify-center items-center border-b-2  rounded-b-[20px]">
                <div className="w-[24px] h-[24px] bg-[#58595B] rounded-full"></div>
              </div>
              <div className=" w-[172px] h-[75px]  bg-[#6E7278] mx-auto clipPolygon"></div>
              <div className="w-[250px] h-[10px] border-t-[2px] border-t-slate-300 bg-slate-500 mx-auto"></div>
            </div>
          </div>
        ) : (
          <div className="z-30 basis-3/10 flex bg-white h-full">
            <img
              src={Img1Mobile}
              className="w-[240px] h-[406px] -ml-[2%] mt-auto"
              alt=""
            />
            <img
              src={Img2Mobile}
              className="w-[240px] h-[406px] mt-auto "
              alt=""
            />
            <img
              src={Img3Mobile}
              className="w-[240px] h-[406px] mt-auto "
              alt=""
            />

            <div className=" w-[265px] h-[546px] flex flex-col relative  border-2 rounded-[50px] border-[#B8B9BA]  bg-[#F5F5F5]">
              <div className=" w-[265px] h-[60px] ">
                <p className="w-[6px] h-[6px] rounded-full bg-black mx-auto mt-3"></p>
                <div className=" flex justify-center my-4">
                  <span className="inline-block w-[8px] h-[8px] rounded-full bg-black "></span>
                  <span className="inline-block w-[45px] h-[3px] rounded-full bg-black ml-5 me-5"></span>
                </div>
              </div>
              <div className=" w-[265px] h-[416px] ">
                <img
                  src={Img4Mobile}
                  className=" w-[214px] h-[410px] absolute right-7  "
                  alt=""
                />
              </div>
              <div className=" w-[265px] h-[70px]  flex justify-center">
                <span className="w-[38px] h-[38px] rounded-full mt-3 border-2 border-black"></span>
              </div>
            </div>
          </div>
        )}
        {/* old website */}
        <div className="basis-7/10 pt-16 bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA]">
          <div className="mx-auto w-[60%] 2xl:w-[50%]">
            <h1 className="OS-36 font-bold text-white opacity-80 uppercase mb-10">
              Their Old Website & Problems
            </h1>
            {lists.map((list) => {
              return (
                <div key={list?.id} className="flex gap-10 mb-10">
                  <img src={arrow} className="w-[19px] h-[13px] my-4 " alt="" />
                  <p className="mb-5 w-[688px] text-white opacity-50">
                    {list?.body}
                  </p>
                </div>
              );
            })}
            <div className="flex gap-5 mb-10">
              <img src={img1} className=" w-[10px] h-[16px]" alt="" />
              <img src={img2} className=" w-[10px] h-[16px]" alt="" />
            </div>
            <button
              onClick={() => setShowDesktop(!showDesktop)}
              className="OS-20 font-bold bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] uppercase text-white opacity-80 rounded-[50px] w-[214px] h-[47px] border-2 border-white my-2 flex justify-center items-center px-2"
            >
              <div className={`flex justify-center items-center`}>
                <span
                  className={` inline-block w-[26px] h-[26px] rounded-full bg-white ${
                    showDesktop ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`${
                    showDesktop ? "hidden" : ""
                  } mx-6 flex gap-5 justify-center items-center`}
                >
                  <img src={SmartPhone} alt="" />
                  Mobile
                </span>
              </div>
              <div className={`flex justify-center items-center`}>
                <span className={`${showDesktop ? "" : "hidden"} mx-6`}>
                  Desktop
                </span>
                <span
                  className={`inline-block w-[26px] h-[26px] rounded-full bg-white ${
                    showDesktop ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OldWebsite;
