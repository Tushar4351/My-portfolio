import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6 }, // Adjust the delay and duration as desired
      }));
    }
  }, [controls, inView]);

  return (
    <>
      <div id="skills" className="p-10">
        <div className="outer-wrapper h-screen p-0 sm:p-10" id="skill">
          <h1 className="text-2xl text-black1 font-semibold relative right-4 sm:text-3xl lg:text-5xl lg:left-14">Skills</h1>
          <div className="Wrapper gap-4 sm:gap-10 p-10  md:p-20" ref={ref}>
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 85 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={0}
            >
              <h3>
                80<span>%</span>
              </h3>
              <h4>Html</h4>
            </motion.div>
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 70 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={1}
            >
              <h3>
                70<span>%</span>
              </h3>
              <h4>CSS</h4>
            </motion.div>
            
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 60 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={2}
            >
              <h3>
                60<span>%</span>
              </h3>
              <h4>TailwindCss</h4>
            </motion.div>
            <motion.div
              className="progress less lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 44 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={3}
            >
              <h3>
                40<span>%</span>
              </h3>
              <h4>javaScript</h4>
            </motion.div>
          
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 60 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={5}
            >
              <h3>
                60<span>%</span>
              </h3>
              <h4>BootStrap</h4>
            </motion.div>
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 50 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={6}
            >
              <h3>
                50<span>%</span>
              </h3>
              <h4>React</h4>
            </motion.div>
            <motion.div
              className="progress less lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 30 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={7}
            >
              <h3>
                30<span>%</span>
              </h3>
              <h4>nodejs</h4>
            </motion.div>
            <motion.div
              className="progress less lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 25 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={8}
            >
              <h3>
                25<span>%</span>
              </h3>
              <h4>expressjs</h4>
            </motion.div>
            
            <motion.div
              className="progress less lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 25 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={8}
            >
              <h3>
                25<span>%</span>
              </h3>
              <h4>mongodb</h4>
            </motion.div>
            <motion.div
              className="progress less lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 25 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={8}
            >
              <h3>
                25<span>%</span>
              </h3>
              <h4>mongoose</h4>
            </motion.div>
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 85 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={9}
            >
              <h3>
                85<span>%</span>
              </h3>
              <h4>c</h4>
            </motion.div>
            <motion.div
              className="progress lg:w-36 lg:h-36 sm:w-24 sm:h-24 w-20 h-20"
              style={{ "--i": 75 }}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={10}
            >
              <h3>
                60<span>%</span>
              </h3>
              <h4>java</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

