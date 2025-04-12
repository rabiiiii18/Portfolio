import React from "react";
import { motion } from "motion/react";
import { ToastContainer, toast } from 'react-toastify';


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

const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4379bd16-faac-4815-84c4-ef24f6199b80");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully.");
      event.target.reset();
    }
  };
  return (
    <div>
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        onSubmit={onSubmit}
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
            name="name"
            required
            className="lg:w-[50%] w-full font-semibold px-3 py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
          <motion.input
            variants={formItem}
            type="email"
            placeholder="Email"
            name="email"
            required
            className="lg:w-[50%] w-full px-3 font-semibold py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
        </motion.div>

        <motion.div
          className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center mt-8"
          variants={container}
        >
          <motion.input
            variants={formItem}
            type="text"
            placeholder="Subject"
            required
            name="subject"
            className="lg:w-[50%] w-full font-semibold px-3 py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
          <motion.input
            variants={formItem}
            type="number"
            placeholder="Phone"
            name="phone"
            className="lg:w-[50%] font-semibold w-full px-3 py-4 border border-gray-300 focus:border-[#c9003e] focus:outline-none rounded-md transition-all duration-500 ease-in"
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mt-5" variants={formItem}>
          <motion.textarea
            variants={formItem}
            name="message"
            placeholder="Enter your text...."
            rows="6"
            cols="90"
            required
            className="w-full px-4 py-3 mb-4 font-semibold outline-0 border border-gray-300 rounded-md focus:border-[#c9003e] focus:outline-none transition-all duration-500 ease-in"
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
        <ToastContainer />
      </motion.form>
    </div>
  );
};

export default Form;
