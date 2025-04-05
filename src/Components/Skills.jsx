import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import CountUp from "react-countup";
const Skills = () => {
  return (
    <div className="mt-[10%]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
        viewport={{ once: true}}
        className="flex  items-center mb-1 lg:mb-4 md:mb-4 sm:mb-4  pb-6 gap-2"
      >
        <span>
          <Layers size={28} />
        </span>
        <span className="text-xl lg:text-2xl md:text-2xl sm:text-2xl  font-semibold">
        Skills</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "anticipate" }}
        viewport={{ once: true}}
        className="text-[35px] lg:text-[40px] md:text-[40px] sm:text-[40px] font-semibold leading-[40px] ld:leading-[22px] md:leading-[22px] sm:leading-[22px]"
      >
        My <span className="text-[#c9003e]">Specializations</span>
      </motion.h1>
      <div className="mt-8 flex  ">
        <div className=" mt-2 h-auto w-full rounded-xl bg-[#ded9db] py-4  flex lg:justify-between  lg:flex-wrap flex-col lg:flex-row gap-5 items-center  ">
          
          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
            <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                fill="#c9003e"
                viewBox="0 0 299.215 299.215"
                xml:space="preserve"
              >
                <g id="XMLID_106_">
                  <path
                    id="XMLID_107_"
                    d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
		l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
		c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
		c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
		c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
		H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
		c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
		l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
		c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
		c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
		c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
		c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
		l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
		s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z"
                  />
                </g>
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">HTML</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    90%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full px-3 flex gap-5  justify-between items-center">
            <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 48 48"
                fill="#c9003e"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>css</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="Q3_icons" data-name="Q3 icons">
                    <path d="M24,46,8.3,41.7,5,4H43L39.7,41.7ZM12,38.6l12,3.3,12-3.3L38.6,8H9.4Z" />
                    <path d="M14,13H34L32.2,34.3,23.9,37l-8.4-2.1-.9-7.2h4.5v3.6l4.8.9,4.4-.9V25.9H14.6l-.3-4.5a2.3,2.3,0,0,1,1.5-.6c6.9,0,12.5.6,12.5.6V17.8H14.6Z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">Css</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 2, delay: 0.9,ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    10%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full px-3 flex gap-5  justify-between items-center">
            <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                width="30px"
                height="30px"
                fill="#c9003e"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>javascript</title>
                <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path>
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">
                  Javascript
                </p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "10%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    10%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
           <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 15 15"
                fill="#c9003e"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z"
                  stroke="#c9003e"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">Tailwind</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 2, delay: 0.9,ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    90%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
           <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                fill="#c9003e"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z" />
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">React</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    70%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
            <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                fill="#c9003e"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                id="framer"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon line-color"
              >
                <path
                  id="primary"
                  d="M6.75,3H19V9H12ZM12,9H5v6l6,6V15h6.25Z"
                ></path>
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px]leading-[24px] font-bold">Framer</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    60%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
            <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="#c9003e"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z" />
                <circle cx="15.332" cy="12" r="3.332" />
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">Figma</p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    60%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] w-full  px-3 flex gap-5  justify-between items-center">
           <div className="p-2 lg:w-[45px] lg:h-[45px] w-[35px] h-[35px]  bg-[#dfcad2] rounded-full flex justify-center items-center">
              <svg
                fill="#c9003e"
                width="30px"
                height="30px"
                viewBox="0 0 14 14"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 1,1 1,13 13,13 13,1 1,1 Z M 6.8475,7.1225 C 6.47325,7.497 5.885,7.6725 5.2205,7.6725 5.045,7.6725 4.8845,7.6647 4.76225,7.642 l 0,1.94 -0.93175,0 0,-5.079 c 0.336,-0.06125 0.802,-0.107 1.436,-0.107 0.6875,0 1.1915,0.14525 1.52,0.42 0.3055,0.252 0.504,0.65675 0.504,1.138 -2.5e-4,0.48875 -0.15275,0.8935 -0.443,1.1685 z M 8.65725,9.65825 C 8.207,9.65825 7.80225,9.5515 7.527,9.39875 l 0.183,-0.68 C 7.92375,8.849 8.32875,8.986 8.66475,8.986 c 0.4125,0 0.5955,-0.16825 0.5955,-0.41225 0,-0.252 -0.1525,-0.38175 -0.6105,-0.54225 C 7.924,7.77925 7.61825,7.382 7.626,6.947 c 0,-0.65675 0.5425,-1.16875 1.40525,-1.16875 0.41275,0 0.7715,0.107 0.98525,0.2215 L 9.83325,6.66425 C 9.673,6.57275 9.375,6.4505 9.04675,6.4505 8.7105,6.4505 8.5275,6.611 8.5275,6.84025 c 0,0.23675 0.17575,0.35125 0.6495,0.51925 0.672,0.2445 0.985,0.588 0.99275,1.13825 0,0.67175 -0.527,1.1605 -1.5125,1.1605 z M 5.3045,5.114 c -0.25975,0 -0.443,0.023 -0.54225,0.04575 l 0,1.7415 C 4.87675,6.93175 5.0295,6.9395 5.2205,6.9395 5.92325,6.9395 6.35075,6.59575 6.35075,5.99225 6.35075,5.4195 5.95375,5.114 5.3045,5.114 Z" />
              </svg>
            </div>
            <div className="w-[85%] ">
              <div>
                <p className="lg:text-[20px] text-[16px] leading-[24px] font-bold">
                  Photoshop
                </p>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden ">
                <motion.div
                  className="h-full bg-[#c9003e] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 2,delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true}}
                >
                  <div className="h-full flex items-center justify-end pr-2 text-xs text-white">
                    60%
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
