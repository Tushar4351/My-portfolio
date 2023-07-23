import React from "react";
import "./App.css";
import Sidebar from "./components/Navbar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About me/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PreLoader from "./components/Preloader/PreLoader";
function App() {
  return (
    <>
      <PreLoader/>
    <div className="App no-scrollbar overflow-x-hidden">
      <Sidebar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
      </>
  );
}

export default App;
