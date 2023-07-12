import React, { useState } from "react";
import "./Projects.css";
import TinDog from "../../img/TinDog.png";
import PlantDashboard from "../../img/PlantDashboard.png";
import WeatherApp from "../../img/WeatherApp.png";
import SnakeGame from "../../img/SnakeGame.png";
import ChatApp from "../../img/Chat-App.png";
import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transition1 } from "../../transitions";

const Projects = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(-1);
  const handlePanelClick = (index) => {
    setActivePanel(index);
  };
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Animation logic when projects section comes into view
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [controls, inView]);

  const panelData = [
    {
      image: TinDog,
      title: "Tin Dog",
      description:
        "It is just a frontend responsive web app where u can see the navbar, home ,about ,pricing and contact section. Here i used HTML,CSS and Bootstrap.",
      link: "https://tindogtush.netlify.app",
    },
    {
      image: PlantDashboard,
      title: "Plant DashBoard",
      description:
        "It is just a frontend responsive web app where u can see a side bar, people who are purchasing data. Here i used Html,react,Css and javaScript.",
      link: "https://plantdashboardtush.netlify.app",
    },
    {
      image: WeatherApp,
      title: "Weather Web App",
      description:
        "It is just a frontend responsive web app where u can see temperature,wind speed,humidity and next 7 day forecast.Here I used HTML,CSS,JavaScript,React.",
      link: "https://weather-app-eta-pied-64.vercel.app",
    },
    {
      image: SnakeGame,
      title: "Snake Game",
      description:
        "It is just a frontend  web app where u can get almost similar features like snake game.Here I used HTML,CSS and JavaScript.",
      link: "http://snake-game-seven-sigma.vercel.app",
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1624385392440-3b3a5423fae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
    //   title: "Secrets Web App",
    //   description:
    //     "It is a Full stack web app where u can see login, register page ,and u can store ur Secrets.For authentication i used JWT tokens.Here i used for frontend- Html,Bootstrap,ejs and for backend- Node Js,Express Js,MongoDb, Mongoose.",
    //   link: "https://tindogtush.netlify.app",
    // },
    {
      image: ChatApp,
      title: "Chat Web App",
      description:
        "It is a Full stack responsive Chat web app where u can see login, register page ,here u can get real time chatting for both one to one chat or group chat also u can see the other person is typing,also u will get notification when new message arrived.For authentication i used JWT tokens.Here i used for frontend- Html,React,ChakraUI and for backend- Node Js,Express Js,MongoDb, Mongoose.",
      link: "https://chat-app-zru9.onrender.com",
    },
  ];

  return (
    <>
      <motion.div
         ref={ref}
        initial={{ opacity: 0, x: "100%" }}
        animate={controls}
        transition={transition1}
        id="projects"
       
      >
        <span className="text-2xl text-black1 font-semibold relative left-4 sm:text-3xl lg:text-5xl lg:left-32 sm:top-7 sm:left-14">
          Projects
        </span>
        <div className="contain h-screen sm:p-20 flex relative sm:left-10">
          {panelData.map((panel, index) => (
            <div
  key={index}
  className={`panel ${index === activePanel ? 'active' : ''}`}
  style={{
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(255, 255, 255, 0) 50%), url('${panel.image}')`,
  }}
  onClick={() => handlePanelClick(index)}
  onMouseEnter={() => setActiveTooltipIndex(index)}
  onMouseLeave={() => setActiveTooltipIndex(-1)}
  onTouchStart={() => setActiveTooltipIndex(index)}
  onTouchEnd={() => setActiveTooltipIndex(-1)}
  onKeyDown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveTooltipIndex(index);
    }
  }}
  onKeyUp={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveTooltipIndex(-1);
      handlePanelClick(index);
    }
  }}
  tabIndex={0} // Make the panel focusable for keyboard navigation
  role="button" // Define the panel as a button for accessibility
>
  {index !== activePanel && index === activeTooltipIndex && (
    <div className="toolti bg-black1 flex justify-center items-center w-24 text-Blanc">Click me</div>
  )}
  <div className="details">
    <h3 className="text-Blanc">{panel.title}</h3>
    <div className="description">
      <p className="">{panel.description}</p>
      <a
        href={panel.link}
        className="rounded-full w-12 h-12 bg-principal hover:bg-Blanc  text-white px-3 py-3 mt-2 inline-block"
      >
        <i className="fa-solid fa-link fa-lg text-black "></i>
      </a>
    </div>
  </div>
</div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Projects;
