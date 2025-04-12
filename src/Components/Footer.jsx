import React from "react";
import { motion } from "motion/react";
import { Facebook, Github, House, Instagram, Linkedin, Twitter } from "lucide-react";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.5,
    },
  },
};

const socialIcon = {
  hover: {
    y: -5,
    scale: 1.1,
    transition: { type: "spring", stiffness: 400 },
  },
  tap: { scale: 0.9 },
};
const socials = [
  { Icon: Facebook, url: "https://www.facebook.com/fb.rabishresthaa" },
  { Icon: Instagram, url: "https://www.instagram.com/rabii_dgaf/" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/ravi-shrestha-279077238/" },
  { Icon: Github, url: "https://github.com/rabiiiii18" },
];

const Footer = () => {
  return (
    <motion.div
      className="py-5 flex justify-center items-center flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.div className="flex gap-5 lg:right-13 lg:top-5" variants={container}>
      {socials.map(({ Icon, url }, index) => (
          <motion.div
            key={index}
            onClick={() => window.open(url, "_blank")}
            className="bg-[#c9003e] text-white p-2 rounded-full w-[40px] h-[40px] cursor-pointer"
            variants={item}
            whileHover="hover"
            whileTap="tap"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={socialIcon}>
              <Icon className="w-full h-full" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.span
        className="mt-6 text-[#141414] font-semibold"
        variants={item}
      >
        © Copyright All rights reserved RaviShrestha
      </motion.span>
    </motion.div>
  );
};

export default Footer;
