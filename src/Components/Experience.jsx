import { Layers, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

// import { useInView } from "framer-motion";
const Experience = () => {
  return (
    <div className="mt-[10%]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
        viewport={{ once: true }}
        className="flex  items-center mb-1 lg:mb-4 md:mb-4 sm:mb-4  pb-6 gap-2"
      >
        <span>
          <User size={28} />
        </span>
        <span className="text-xl lg:text-2xl md:text-2xl sm:text-2xl  font-semibold">
          My Resume
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "anticipate" }}
        viewport={{ once: true }}
        className="text-[35px] lg:text-[40px] md:text-[40px] sm:text-[40px] font-semibold leading-[40px] ld:leading-[22px] md:leading-[22px] sm:leading-[22px]"
      >
        My Education &<span className="text-[#c9003e]"> Experience</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="h-auto w-full mt-8 rounded-xl bg-[#ded9db] p-5 flex justify-center items-center gap-15"
      >
        <div className="max-w-2xl mx-auto rounded-lg p-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex flex-col lg:flex-row  px-1 justify-center items-center  "
          >
            <div className="w-3/5 relative">
              <div className="flex items-center lg:items-end flex-col lg:pr-8 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg
                    fill="#000000"
                    width="45px"
                    height="45px"
                    viewBox="-3.5 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    class="jam jam-apple"
                  >
                    <path d="M13.623 10.627c-.025-2.533 2.066-3.748 2.159-3.808-1.175-1.72-3.005-1.955-3.657-1.982-1.557-.158-3.039.917-3.83.917-.788 0-2.008-.894-3.3-.87C3.299 4.909 1.734 5.87.86 7.39c-1.764 3.06-.452 7.595 1.267 10.077.84 1.215 1.842 2.58 3.157 2.53 1.266-.05 1.745-.819 3.276-.819 1.531 0 1.962.82 3.302.795 1.363-.026 2.226-1.239 3.06-2.457.965-1.41 1.362-2.775 1.386-2.845-.03-.013-2.658-1.02-2.684-4.045zm-2.518-7.433c.698-.847 1.169-2.022 1.04-3.194C11.14.04 9.921.67 9.2 1.515c-.647.75-1.214 1.945-1.062 3.094 1.122.088 2.268-.57 2.967-1.415z" />
                  </svg>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl  font-bold text-gray-800"
                >
                  Apple1
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-center"
                >
                  Jan 2023 - May 2024
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:block hidden absolute top-0 right-0 h-full w-0.5 bg-gray-400 transform translate-x-1/2 "
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:block hidden absolute top-6 right-0 w-3 h-3 bg-[#c9003e] rounded-full transform translate-x-1/2"
              ></motion.div>
            </div>

            <div className="w-full lg:w-3/5 lg:pl-8 flex  flex-col items-center lg:items-start  mt-5">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                Web Developer1
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 text-center lg:text-left"
                viewport={{ once: true }}
              >
                Cursus risus at ultrices mi tempus imperdiet nulla malesuada
                pellentesque elit eget gravida cum sociis natoque penatibus
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex mt-8 flex-col-reverse lg:flex-row justify-center items-center px-1  "
          >
            <div className="w-full lg:w-3/5 relative">
              <div className="flex items-center lg:items-end flex-col lg:pr-8 mt-5">
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  Web Developer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-600 lg:text-right text-center"
                >
                  Cursus risus at ultrices mi tempus imperdiet nulla malesuada
                  pellentesque elit eget gravida cum sociis natoque penatibus
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:block hidden absolute top-0 right-0 h-full w-0.5 bg-gray-400 transform translate-x-1/2"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="lg:block hidden absolute top-6 right-0 w-3 h-3 bg-[#c9003e] rounded-full transform translate-x-1/2"
              ></motion.div>
            </div>

            <div className="w-full lg:w-3/5 relative">
              <div className="flex items-center lg:items-start flex-col lg:pl-8 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg
                    fill="#000000"
                    width="45px"
                    height="45px"
                    viewBox="-3.5 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    class="jam jam-apple"
                  >
                    <path d="M13.623 10.627c-.025-2.533 2.066-3.748 2.159-3.808-1.175-1.72-3.005-1.955-3.657-1.982-1.557-.158-3.039.917-3.83.917-.788 0-2.008-.894-3.3-.87C3.299 4.909 1.734 5.87.86 7.39c-1.764 3.06-.452 7.595 1.267 10.077.84 1.215 1.842 2.58 3.157 2.53 1.266-.05 1.745-.819 3.276-.819 1.531 0 1.962.82 3.302.795 1.363-.026 2.226-1.239 3.06-2.457.965-1.41 1.362-2.775 1.386-2.845-.03-.013-2.658-1.02-2.684-4.045zm-2.518-7.433c.698-.847 1.169-2.022 1.04-3.194C11.14.04 9.921.67 9.2 1.515c-.647.75-1.214 1.945-1.062 3.094 1.122.088 2.268-.57 2.967-1.415z" />
                  </svg>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl  font-bold text-gray-800"
                >
                  Apple
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-center"
                >
                  Jan 2023 - May 2024
                </motion.p>
              </div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:flex-row justify-center items-center px-1  "
          >
            <div className="w-3/5 relative">
              <div className="flex items-center lg:items-end flex-col lg:pr-8 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    fill="#000000"
                    width="35px"
                    height="35px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <polygon
                          points="458.97,95.229 256,13.104 53.029,95.229 0,95.229 0,149.391 30.417,149.391 31.187,149.391 480.813,149.391 
			481.583,149.391 512,149.391 512,95.229 		"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon
                          points="481.583,444.734 480.813,444.734 31.187,444.734 30.417,444.734 0,444.734 0,498.896 512,498.896 512,444.734 		
			"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M480.813,221.945v-42.138h-30.417H61.604H31.187v42.138h15.209v150.234H31.187v42.138h30.417h388.792h30.417v-42.138
			h-15.209V221.945H480.813z M157.27,372.179h-24.291V221.945h24.291V372.179z M268.146,372.179h-24.292V221.945h24.292V372.179z
			 M379.02,372.179h-24.291V221.945h24.291V372.179z"
                        />
                      </g>
                    </g>
                  </svg>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl  font-bold text-gray-800"
                >
                  Higher School
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-600"
                >
                  May 2018 - May 2020
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className=" lg:block hidden absolute top-0 right-0 h-full w-0.5 bg-gray-400 transform translate-x-1/2"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className=" lg:block hidden absolute top-6 right-0 w-3 h-3 bg-[#c9003e] rounded-full transform translate-x-1/2"
              ></motion.div>
            </div>

            <div className="w-full lg:w-3/5 lg:pl-8 flex  flex-col items-center lg:items-start  mt-5">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                kathmandu Bernhardt College
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-600 text-center lg:text-left"
              >
              Major: Computer Science
              oKey subjects: Computer Science, Mathematics
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex mt-8 flex-col-reverse lg:flex-row justify-center items-center px-1  "
          >
            <div className="w-full lg:w-3/5 relative">
              <div className="flex items-center lg:items-end flex-col lg:pr-8 mt-5">
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  Herald College Kathmandu
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-gray-600 lg:text-right text-center"
                >
                 Graduated with a focus on frontend development, databases, and software development.
                 Key coursework: Web Development, Data Structures, Algorithms, AI.
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className=" lg:block hidden absolute top-0 right-0 h-full w-0.5 bg-gray-400 transform translate-x-1/2"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className=" lg:block hidden absolute top-6 right-0 w-3 h-3 bg-[#c9003e] rounded-full transform translate-x-1/2"
              ></motion.div>
            </div>

            <div className="w-full lg:w-3/5 relative">
            <div className="flex items-center lg:items-start flex-col lg:pl-8 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <svg
                  fill="#000000"
                  width="50px"
                  height="50px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Graduation">
                    <polygon points="445.055 384.794 445.055 221.864 418.805 234.989 418.805 384.777 401.301 429.785 462.551 429.785 445.055 384.794" />

                    <path d="M229.0648,306.3708l-107.7643-53.88v53.7754c0,36.2433,58.7634,65.625,131.25,65.625,72.4887,0,131.25-29.3817,131.25-65.625V252.49L276.0277,306.3741C257.5813,313.681,247.5133,313.6789,229.0648,306.3708Z" />

                    <path d="M264.2912,282.8969l186.5207-93.26c6.4579-3.2289,6.4579-8.5107,0-11.74l-186.5207-93.26c-6.4556-3.2289-17.0214-3.2289-23.4793,0l-186.5207,93.26c-6.4556,3.2289-6.4556,8.5107,0,11.74l186.5207,93.26C247.27,286.1258,257.8356,286.1258,264.2912,282.8969Z" />
                  </g>
                </svg>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl  font-bold text-gray-800"
              >
                University
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                viewport={{ once: true }}
                className="text-gray-600 lg:text-start text-center"
              >
                Feb 2021 - Mar 2024
              </motion.p>
            </div>
           </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
