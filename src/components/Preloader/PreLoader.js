import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./Preloader.css";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader bg-gradient-to-b from-black via-black to-gray-800">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Dreamer.</span>
      </div>
    </div>
  );
};

export default PreLoader;
