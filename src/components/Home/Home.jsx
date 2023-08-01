import React from "react";
import "../Home/Home.css";
import ProfilePic from "../../img/Profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import ScrollDown from "./ScrollDown";
import resume from "./Resume.pdf";

const Home = () => {


  return (
    <div
      className="h-screen bg-gradient-to-b from-black via-black to-gray-800"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="flex flex-col justify-center items-center h-full relative gap-10 md:flex-row p-7 md:gap-0"
      >
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{ transition: transition1, duration: 8 }}
          className="flex flex-col relative gap-1 md:w-full  md:left-10 lg:justify-center lg:gap-7 lg:left-28 lg:p-10"
        >
          <span className="text-Blanc text-2xl sm:text-3xl md:text-4xl name">
            {" "}
            Hy! I Am Tushar Bhowal
          </span>
          <span className="text-principal font-bold styling-text text-3xl sm:text-4xl md:text-5xl left-3 work">
            A Web Developer
          </span>
          <div className="flex relative mb-8 gap-6 flex-row top-10 lg:top-14">
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              <div></div>
              <button className="" to="#contact">
                <span>Hire Me</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    strokeWidth="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </Link>
<a href={resume}>
            <button className="buttonDownload" >
              Download CV
              </button>
              </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ transition: transition1, duration: 8 }}
          className="lg:w-2/3"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ transition: transition1, duration: 8 }}
            className="rounded-2xl w-2/5 mx-auto md:w-56 lg:w-80"
            src={ProfilePic}
            alt="profile"
          />
        </motion.div>
      </motion.div>

      <div className="custom-shape-divider-bottom-1686883565">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Home;
