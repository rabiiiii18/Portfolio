import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
};

const hoverEffect = {
  scale: 1.03,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

const Portfolio = () => {
  return (
    <div className="mt-[10%]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
        viewport={{ once: true }}
        className="flex  items-center mb-4 pb-6 gap-2"
      >
        <span>
          <BriefcaseBusiness size={28} />
        </span>
        <span className="text-xl lg:text-2xl md:text-2xl sm:text-2xl  font-semibold">
          Portfolio
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "anticipate" }}
        viewport={{ once: true }}
        className="text-[35px] lg:text-[40px] md:text-[40px] sm:text-[40px] font-semibold leading-[40px] ld:leading-[22px] md:leading-[22px] sm:leading-[22px]"
      >
        Featured<span className="text-[#c9003e]"> Projects</span>
      </motion.h1>

      <motion.div
        className="flex justify-between lg:flex-row flex-col flex-nowwrap lg:flex-wrap mt-8 pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="h-[400px] w-[300px] lg:h-[400px] lg:w-[40%] border-r-3 border-b-3 border-[#c9003e] rounded-xl p-10 mb-8"
          variants={item}
          whileHover={hoverEffect}
        >
          <motion.div
            className="h-48 w-full overflow-hidden rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/weather.png"
              alt="Weather"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h3
            className="mt-5 text-[12px] leading-[21px] text-[#c9003e]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            DEVELOPMENT
          </motion.h3>

          <div className="my-4">
            <motion.span
              className="text-[23px] leading-[34px] font-bold hover:text-[#c9003e] cursor-pointer transition-all duration-200 ease-in"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Weather's App
            </motion.span>

            <motion.div
              className="flex mt-3 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://weather-app-gilt-seven-83.vercel.app/', "_blank")}
              >
                Demo
              </motion.button>
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://github.com/rabiiiii18/weatherApp', "_blank")}
              >
                Github
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="h-[400px] w-[300px] lg:h-[400px] lg:w-[40%]  border-r-3 border-b-3 border-[#c9003e] rounded-xl p-10 mb-8"
          variants={item}
          whileHover={hoverEffect}
        >
          <motion.div
            className="h-48 w-full overflow-hidden rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/meroKhana.png"
              alt="meroKhana"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h3
            className="mt-5 text-[12px] leading-[21px] text-[#c9003e]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            DEVELOPMENT
          </motion.h3>

          <div className="my-4">
            <motion.span
              className="text-[23px] leading-[34px] font-bold hover:text-[#c9003e] cursor-pointer transition-all duration-200 ease-in"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              meroKhana- Recipe
            </motion.span>

            <motion.div
              className="flex mt-3 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://mero-khana.vercel.app/', "_blank")}
              >
                Demo
              </motion.button>
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://github.com/rabiiiii18/meroKhana', "_blank")}
              >
                Github
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="h-[400px] w-[300px] lg:h-[400px] lg:w-[40%]  border-r-3 border-b-3 border-[#c9003e] rounded-xl p-10 mb-8"
          variants={item}
          whileHover={hoverEffect}
        >
          <motion.div
            className="h-48 w-full overflow-hidden rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/todo.png"
              alt="To-Do"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.h3
            className="mt-5 text-[12px] leading-[21px] text-[#c9003e]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            DEVELOPMENT
          </motion.h3>

          <div className="my-4">
            <motion.span
              className="text-[23px] leading-[34px] font-bold hover:text-[#c9003e] cursor-pointer transition-all duration-200 ease-in"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              To-Do List
            </motion.span>

            <motion.div
              className="flex mt-3 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://to-do-list-flame-tau-65.vercel.app/', "_blank")}
              >
                Demo
              </motion.button>
              <motion.button
                className="border-r-3 border-b-3 border-[#c9003e] text-[#c9003e] px-8 py-2 rounded-md text-[16px] font-bold cursor-pointer hover:bg-[#c9003e] hover:text-white transition-all duration-400 ease-in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://github.com/rabiiiii18/To-Do-list', "_blank")}
              >
                Github
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
