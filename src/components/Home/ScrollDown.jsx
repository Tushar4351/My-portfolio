import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollDown = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -scrollY,
    },
  };

  return (
    <div className="scroll_down">
      <a href="#about" className="mouse_wrapper">
        <span className="home_scroll-name text-black font-medium">Scroll Down</span>
        <motion.span
          className="mouse"
          variants={scrollVariants}
          initial="initial"
          animate="animate"
        >
          <span className="wheel"></span>
        </motion.span>
      </a>
    </div>
  );
};

export default ScrollDown;