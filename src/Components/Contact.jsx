import { Contact2 } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import Form from "./Form";

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
  <Form/>
    </div>
  );
};

export default Contact;
