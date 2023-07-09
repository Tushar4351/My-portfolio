import React from "react";
import { motion, useAnimation } from "framer-motion";
import { transition1 } from "../../transitions";
import { IoLocationOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
const PersonalDetails = () => {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "100%" }}
      animate={controls}
      transition={transition1}
      className="flex flex-col space-y-8 justify-between md:w-3/4"
    >
      <div>
        <h1 className=" font-semibold text-2xl sm:text-3xl md:text-5xl tracking-wide">
          Contact Me
        </h1>
        <p className="pt-2 text-cyan-100">
          You can connect me from given sources below, let's build together !!!!
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="inline-flex space-x-2 items-center">
          <a href="tel:+916290779683" className="">
            <i className="fa-solid fa-phone fa-xl text-principal"></i>
            <span className="relative left-4 ">Call : +916290779683</span>
          </a>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <a href="mailto:tusharbhowal3211@gmail.com" className="">
            <i className="fa-regular fa-envelope fa-xl text-principal"></i>{" "}
            <span className="relative left-3">tusharbhowal3211@gmail.com</span>
          </a>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <IoLocationOutline
            style={{
              color: "var(--principal)",
              fontSize: "24px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          />
          <a href="https://goo.gl/maps/mhijBBn4DQ7jy4Wa9"> Goalapara,Ichapur</a>
        </div>
      </div>
      <div className="flex space-x-4 text-lg">
        <a
          className="hover:bg-principal hover:text-black1 bg-black1 w-12 h-12 p-3 sm:w-14 sm:h-14 sm:p-4 rounded-full hover-effect"
          href="https://www.linkedin.com/in/tushar-bhowal-32bb74205/"
        >
          <i className="fa-brands fa-linkedin-in fa-xl sm:text-sm"></i>
        </a>
        <a
          className="hover:bg-principal hover:text-black1 bg-black1 w-12 h-12 p-3 sm:w-14 sm:h-14 sm:p-4 rounded-full hover-effect"
          href="https://www.instagram.com/ig_tushar2/"
        >
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a
          className="hover:bg-principal hover:text-black1 bg-black1 w-12 h-12 p-3 sm:w-14 sm:h-14 sm:p-4 rounded-full hover-effect"
          href="https://www.facebook.com/tushar.bhowal.1/"
        >
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a
          className="hover:bg-principal hover:text-black1 bg-black1 w-12 h-12 p-3 sm:w-14 sm:h-14 sm:p-4 rounded-full hover-effect"
          href="https://github.com/Tushar4351"
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a
          className="hover:bg-principal hover:text-black1 bg-black1 w-12 h-12 p-3 sm:w-14 sm:h-14 sm:p-4 rounded-full hover-effect"
          href="http://wasap.my/916290779683"
        >
          <i className="fa-brands fa-whatsapp fa-xl"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default PersonalDetails;
