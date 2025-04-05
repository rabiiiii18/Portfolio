import { Contact2 } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const formItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
};

const Contact = () => {
  return (
    <div className="mt-[10%">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
        viewport={{ once: true }}
        className="flex  items-center mb-4 pb-6 gap-2"
      >
        <span>
          <Contact2 size={28} />
        </span>
        <span className="text-xl lg:text-2xl md:text-2xl sm:text-2xl  font-semibold">
          Contact
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "anticipate" }}
        viewport={{ once: true }}
        className="text-[35px] lg:text-[40px] md:text-[40px] sm:text-[40px] font-semibold leading-[40px] ld:leading-[22px] md:leading-[22px] sm:leading-[22px]"
      >
        Let's work<span className="text-[#c9003e]"> Together</span>
      </motion.h1>
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Name & Email Row */}
        <motion.div
          className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center mt-8"
          variants={container}
        >
          <motion.input
            variants={formItem}
            type="text"
            placeholder="Name"
            className="lg:w-[40%] w-full px-3 py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
          <motion.input
            variants={formItem}
            type="email"
            placeholder="Email"
            className="lg:w-[40%] w-full px-3 py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
        </motion.div>

        {/* Subject */}
        <motion.div className="mt-5" variants={formItem}>
          <motion.input
            variants={formItem}
            type="text"
            placeholder="Subject"
            className="lg:w-[40%] w-full px-3 py-4 border border-gray-300 rounded-md focus:border-[#c9003e] focus:outline-none transition-all duration-500 ease-in"
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mt-5" variants={formItem}>
          <motion.textarea
            variants={formItem}
            name="message"
            placeholder="Enter your text...."
            rows="10"
            cols="90"
            className="w-full px-4 py-3 mb-4 outline-0 border border-gray-300 rounded-md focus:border-[#c9003e] focus:outline-none transition-all duration-500 ease-in"
          ></motion.textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={formItem}>
          <motion.button
            whileHover={{ rotate: 5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border px-3 py-3 rounded-md text-[18px] font-bold cursor-pointer bg-[#c9003e] text-[#fff]"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Contact;
