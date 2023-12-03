import React from "react";
import myimg from "../../Assets/Images/rotated_hd.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AboutHomeComponent from "../AboutHomeComponent";
import ProjectSlider from "../ProjectSlider";
export default function Home() {
  return (
    <div>
      <div className="toptint"></div>
      <div className="container">
        <div className="hero">
          <div className="heroinfo">
            <h1>Hello! I'm Smeet Patel.</h1>
            <Link to="/contact">Hire Me</Link>
            <h2>
              As
              <span>
                <Typewriter
                  words={[
                    "Front-End Developer.",
                    "React Developer.",
                    "Javascript Developer.",
                    "MERN Developer.",
                  ]}
                  loop={20}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
          <div className="myimg">
            <img src={myimg} alt="" />
          </div>
        </div>
        
      </div>
      <AboutHomeComponent></AboutHomeComponent>
      <ProjectSlider></ProjectSlider>
    </div>
  );
}
