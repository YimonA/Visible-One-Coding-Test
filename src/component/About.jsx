import Tablet from "/images/Tablet@2x.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      
      className=" container mx-auto w-[1350px] py-36 pb-20"
    >
      <motion.div 
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay:0.1,duration: 0.9 }}
      viewport={{ once: false }}
       className=" flex items-center justify-between gap-10">
        <div>
          <h1 className="OS-36 h-[50px] font-bold text-black  ">
            ABOUT <span className=" text-[#2DC4EA]">TRIPPRO </span>
          </h1>
          <span className=" inline-block w-[152px] h-[3px] bg-[#2DC4EA] mb-5"></span>
          <p className=" w-[665px] h-[157px] mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </p>
          <button className="OS-20 font-bold bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA] uppercase text-white rounded-[50px] w-[280px] h-[74px] my-2">
            tour to website
          </button>
        </div>
        <div>
          <div className="relative w-[680px] ">
            <img
              src={Tablet}
              className="  w-[368px] h-[490px] absolute left-48 top-16"
              alt=""
            />
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
      </motion.div>
    </section>
  );
};

export default About;
