import ResponsiveSvg from "/images/responsive.svg";
import WordpressSvg from "/images/wordpress-development-logo-banner.svg";
import ShoppingCartSvg from "/images/shopping-cart.svg";
import LaptopImg from "/images/Laptop.png";
import Devwp from "/images/devwp.visibleone.net_tripprohk_.png";

const Hero = () => {
  return (
    <section className="w-full ">
      <img src="/images/Header.png" className=" w-full h-[80px]" alt="" />
      <div className=" h-[894px] relative">
        <div className='bg-[url("/images/15740.png")] bg-no-repeat bg-center bg-cover relative h-[637px] -z-20 py-20'>
          <div className=" w-full h-full absolute bg-black opacity-40 -z-10 inset-0"></div>

          <p className="OS-60 font-light w-[1040] mt-5 mb-16 text-white opacity-60 text-center">
            TRIPPRO - AN ECOMMERCE SOLUTION
          </p>
          <p className=" text-white opacity-60 text-center ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam 
          </p>
          <p className=" text-white opacity-60 text-center">voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.</p>
          <div className=" flex justify-center mt-10">
            <div className=" hero-div w-[250px] ">
              <div>
                <p className=" OS-24 text-white opacity-70 font-bold">
                  Build for:
                </p>
              </div>
              <img src={ResponsiveSvg} className=" w-[62px] h-[58px]" alt="" />
            </div>
            <div className=" hero-div w-[300px]  border-x-4 border-x-white">
              <div>
                <p className=" OS-24 text-white opacity-50 font-normal mb-2">
                  Technologies:
                </p>
                <p className=" OS-24 text-white opacity-70 font-bold">
                  Wordpress
                </p>
              </div>
              <img src={WordpressSvg} className=" w-[65px] h-[65px]" alt="" />
            </div>
            <div className=" hero-div w-[250px] ">
              <div>
                <p className=" OS-24 text-white opacity-50 font-normal mb-2">
                  Industry:
                </p>
                <p className=" OS-24 text-white opacity-70 font-bold">
                  Ecommerce
                </p>
              </div>
              <img
                src={ShoppingCartSvg}
                className=" w-[74px] h-[64px]"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" ">
          <img
            src={LaptopImg}
            className="flex justify-center w-[850px] h-[484px] z-20 absolute bottom-3 left-[50%] -translate-x-[50%]"
            alt=""
          />
          <img
            src={Devwp}
            className="flex justify-center w-[644px] h-[404px] z-30 absolute bottom-16 left-[50%] -translate-x-[50%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
