import React from "react";
import "./Contact.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import PersonalDetails from "./PersonalDetails";
import SendingInfo from "./SendingInfo";


const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="flex w-full min-h-screen justify-center items-center bg-gradient-to-b from-gray-800 via-black to-black"
        id="contact"
      >
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full max-w-7xl p-8 sm:p-12 rounded-xl shadow-lg text-Blanc overflow-hidden">
          
          <PersonalDetails />
          <SendingInfo/>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
