import { Facebook, Github, House, Instagram, Linkedin,  } from "lucide-react";
import React from "react";
import { ReactTyped } from "react-typed";
import { easeInOut, motion } from "motion/react";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Contact from "./Contact";
import { easeIn } from "motion";

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
const socials = [
  { Icon: Facebook, url: "https://www.facebook.com/fb.rabishresthaa" },
  { Icon: Instagram, url: "https://www.instagram.com/rabii_dgaf/" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/ravi-shrestha-279077238/" },
  { Icon: Github, url: "https://github.com/rabiiiii18" },
];

const Body = () => {


  return (
    <div className="flex justify-center items-center flex-col pt-20 mt-12  lg:mt-15 lg:pt-10 px-4">
      <div className="w-full max-w-7xl h-auto   flex flex-col md:flex-row px-10 gap-8 md:gap-[8%] border border-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeIn }}
          className="w-[330px] h-[430px] lg:sticky  relative lg:top-40"
        >
          <div className="sticky w-full h-full">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="w-20 sm:w-28 md:w-35 absolute right-[-14%] top-[-10%]  sm:right-[-1%] md:right-[-22%] sm:top-[-10%] md:top-[-15%]"
              src="/block.png"
              alt=""
            />

            <motion.div
              className="flex flex-row sm:flex-col gap-3 sm:gap-5 absolute right-2 sm:right-4 top-3 sm:top-5"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.3 }}
            >
             {socials.map(({ Icon, url }, index) => (
                <motion.div
                  key={index}
                  onClick={() => window.open(url, "_blank")}
                  variants={socialVariants}
                  className="bg-[#000] text-white p-2 rounded-full w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] cursor-pointer hover:bg-[#c9003e] transition ease-in duration-200 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ))}
            </motion.div>
            <img
              className="w-full h-full object-cover object-center rounded-lg shadow-lg"
              src="/raviii.jpg"
              alt="Ravi"
            />

            {/* Name and Title */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[18px] sm:text-[22px] md:text-[25px] text-white ml-3 font-semibold absolute bottom-3 sm:bottom-5 kaushan-script-regular bg-opacity-50 p-2 rounded"
            >
              Hello I'm <br />
              Ravi Shrestha <br />{" "}
              <ReactTyped
                className="font-bold text-[20px] sm:text-[25px] md:text-[30px] text-[#c9003e]"
                strings={["Frontend Developer", "React Enthusiast"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.span>

            {/* Decorative block image (bottom) */}
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              className="w-20 sm:w-28 md:w-35 absolute left-[-14%] bottom-[-10%] sm:left-[-10%] md:left-[-22%]  sm:bottom-[-10%] md:bottom-[-15%] rotate-[180deg]"
              src="/block.png"
              alt=""
            />
          </div>
        </motion.div>

        {/* Right Column (Content) */}
        <div className="w-full md:w-[55%] lg:w-[65%] h-auto">
          <div className="pt-4 sm:pt-6 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
              className="flex items-center mb-3 sm:mb-4 pb-4 sm:pb-6 gap-2"
            >
              <span>
                <House size={24} className="sm:w-7 sm:h-7" />
              </span>
              <span className="text-xl sm:text-2xl font-semibold">
                Introduce
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-3xl sm:text-4xl font-semibold leading-[1.2] sm:leading-[52px] kaushan-script-regular"
            >
              Say Hi from <span className="text-[#c9003e]">Ravi Shrestha</span>
              <br />
              Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="text-base sm:text-xl leading-6 sm:leading-7 mt-4"
            >
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </motion.p>
          </div>

          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>

      <Carousel />
      <Footer />
    </div>
  );
};

export default Body;
