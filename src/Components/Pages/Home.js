import React from "react";
import myimg from "../../Assets/Images/rotated_hd.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AboutHomeComponent from "../AboutHomeComponent";
import ProjectSlider from "../ProjectSlider";
import  instagram  from '../../Assets/Images/instagram.svg';
import  linkdin  from '../../Assets/Images/linkdin.svg';
import  github  from '../../Assets/Images/github.svg';
import  leetcode  from '../../Assets/Images/leetcode.svg';
import ResumePDF from "../../Assets/Files/sp.pdf"
const handleDownloadResume = () => {

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Smeet-Patel_Resume.pdf'; // Replace 'YourName' with your actual name or the desired filename for the resume

    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
                    "Fullstack Developer.",
                    "Frontend Developer.",
                    "Backend Developer.",
                    "Web3 Developer",
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
            
          {/* <div className="myimg">
            <img src={myimg} alt="" />
          </div> */}
           <div className="footer-first">
              <ul>
                
                <li>
                  <Link to="https://www.linkedin.com/in/smeet-patel-963740230/" target="_blank" rel="noreferrer">
                  <img src={linkdin} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/Smeetpatel171" target="_blank" rel="noreferrer">
                  <img src={github} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="https://leetcode.com/u/Smeetpatel171/" target="_blank" rel="noreferrer">
                  <img src={leetcode} alt="" />
                  </Link>
                </li>
              </ul>

              <div className="about-btn">
        <button onClick={handleDownloadResume}>Download Resume</button>
        </div>
          </div>
            </div>
        </div>
        
      </div>
      <AboutHomeComponent></AboutHomeComponent>
      <ProjectSlider></ProjectSlider>
    </div>
  );
}
