import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transition1 } from "../../transitions";

const SendingInfo = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "100%" }}
      animate={controls}
      transition={transition1}
    >
      <div className="relative z-10 bg-Blanc rounded-xl shadow-lg p-8 md:w-full ">
        <form
          action="https://formspree.io/f/mrgvjojg"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <div>
            <label className="text-sm text-black1"> Your Name</label>

            <input
              type="text"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 p-2 outline-none focus:ring-2 mt-2 focus:ring-principal"
              name="username"
              placeholder="Enter your name"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="text-sm text-black1"> Your Email Address</label>

            <input
              type="email"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 p-2 outline-none focus:ring-2 mt-2 focus:ring-principal"
              name="Email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label className="text-sm text-black1"> Message</label>
            <textarea
              name="message"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 p-2 outline-none focus:ring-2 mt-2 focus:ring-principal"
              placeholder="Enter your text"
              cols="30"
              rows="4"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button className="cssbuttons-io-button" type="submit" value="send">
            {" "}
            Send
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SendingInfo;
