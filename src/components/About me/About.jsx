import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profilecartoon from "../../img/profile-cartoon.png";
import Card from "./Card";
import "../About me/About.css";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
    
      <div className="about p-0 sm:p-10 lg:pl-28 sm:h-screen" id="about">
        
    <span className="text-2xl text-black font-semibold relative left-4 sm:text-3xl lg:top-16 lg:text-5xl lg:left-6 md:left-7">About Me</span>
      <div className="mx-auto p-4 relative md:left-6 flex lg:p-0 flex-col md:flex-row lg:pt-36 lg:flex-row items-center sm:gap-20 gap-10">
        <motion.img
          src={profilecartoon}
          alt=""
          className="w-28 sm:w-32 md:w-44 lg:w-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
        />
        <motion.div
            ref={ref}
            className="md:p-0"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <Card />
        </motion.div>
        </div>
      </div>
      
      </>
  );
};

export default About;
