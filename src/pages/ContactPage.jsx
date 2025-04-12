import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import { motion } from "motion/react";
const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className="h-60 lg:h-86 mx-8 rounded-md bg-gray-200 flex justify-center items-center flex-col">
        <h1 className=" text-2xl lg:text-4xl leading-[42px] font-bold">Contact Us</h1>
        <div className="flex  mt-1 lg:mt-4 justify-center items-center gap-1">
          <Link to="/" className="text-[16px] leading-[28px]">
            Home{" "}
          </Link>
          <ChevronRight size={18} />
          <span className="text-[16px] leading-[28px] text-[#c9003e] font-semibold">
            Contact
          </span>
        </div>
      </div>
      <div className=" my-10 lg:w-[80%] w-full  flex lg:flex-row flex-col mx-auto ">
        <div className="lg:w-[40%] :w-full">
          <div className="lg:mx-10 mx-5 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="lg:text-[16px] text-[14px] leading-[28px] font-bold text-[#c9003e]"
            >
              GET IN TOUCH
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="lg:text-[48px] text-[30px] lg:leading-[60px] leading-[40px] lg:font-semibold font-semibold"
            >
              Elevate your brand with Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              className="lg:text-[16px] text-[14px] lg:leading-[28px] leading-[24px] lg:mt-4 mt-1 text-gray-600 max-w-xl"
            >
              Have a project in mind? Let’s connect and create something great
              together.
            </motion.p>
          </div>
        </div>
        <div className="lg:w-[60%]  px-8 ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
