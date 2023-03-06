import React, { useState } from "react";
import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import AboutMe from "./Components/AboutMe";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import MyWork from "./Components/Work";
import Certificates from "./Components/Certificates";
import AcademicDetails from "./Components/Academic Details";
import ContactMe from "./Components/ContactMe";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const myFunction = () => {
    const x = document.querySelector(".menu-container");
    x.classList.toggle("change");
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="menu">
        <StyledOffCanvas isOpen={isOpen} onClose={myFunction}>
          <div
            class="menu-container d-flex flex-column align-items-end"
            onClick={myFunction}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <Menu>
            <ul>
              <li>
                <div onClick={() => setIsOpen(false)}>close</div>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Menu>
          <Overlay />
        </StyledOffCanvas>
      </div>
      <div className="container">
        <Introduction />
        <AboutMe />
        <Skills />
        <MyWork />
        <Certificates />
        <AcademicDetails />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
