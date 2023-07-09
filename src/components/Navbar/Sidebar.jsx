import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SlLayers } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import Logo from "../../img/Tushar.png";
import { Link } from "react-scroll";
const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <div className="nav">
            <img
              src={Logo}
              style={{ width: "60px" }}
              alt="logoo"
              className="rounded-xl"
            />
          </div>
        </Link>
        <nav className="nav">
          <div className="nav menu">
            <ul style={{ listStyleType: "none" }} className="nav_list ">
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                <li className="nav_item ">
                  <div className="nav_link hover-effect">
                    <AiOutlineHome className="iconss" />
                  </div>

                  <span className="tooltip">Home</span>
                </li>
              </Link>
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                <li className="nav_item">
                  <div className="nav_link">
                    <AiOutlineUser className="iconss" />
                  </div>
                  <span className="tooltip">About Me</span>
                </li>
              </Link>
              <Link activeClass="active" to="skill" spy={true} smooth={true}>
                <li className="nav_item">
                  <div className="nav_link">
                    <MdWorkOutline className="iconss" />
                  </div>
                  <span className="tooltip">Skills</span>
                </li>
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true}>
                <li className="nav_item">
                  <div className="nav_link">
                    <SlLayers className="iconss" />
                  </div>
                  <span className="tooltip">Projects</span>
                </li>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <li className="nav_item">
                  <div className="nav_link hover-effect">
                    <IoChatbubblesOutline className="iconss" />
                  </div>
                  <span className="tooltip">Contact Me</span>
                </li>
              </Link>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright ">&copy;2023 Made by Tushar</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <HiMenu className="icon-menu" />
      </div>
    </>
  );
};

export default Sidebar;
