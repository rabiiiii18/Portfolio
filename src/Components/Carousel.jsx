import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.8,
    },
  },
};

const Carousel = () => {
  return (
    <motion.div
      className="lg:mt-[10%] mt-[5%] py-25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.p
        className="lg:text-[60px]  text-[40px] lg:leading-[74px] leading-[45px] text-center font-semibold text-[#141414]"
        variants={item}
      >
        Ready to start creating a <br />
        standard website?
      </motion.p>

      <motion.p
        className="text-[18px] leading-[23px] text-center mt-6 font-bold text-[#141414]"
        variants={item}
      >
        Choose for the best
      </motion.p>

      <motion.div
        className="flex justify-center items-center my-10"
        variants={item}
      >
        <motion.button
          whileHover={{ rotate: 5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="border px-3 py-3 rounded-md text-[16px] font-bold cursor-pointer bg-[#c9003e] text-[#fff]"
        >
          Work with Me
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
