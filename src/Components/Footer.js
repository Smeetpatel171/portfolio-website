import React from "react";
import { Link, useLocation } from "react-router-dom";
import  facebook  from '../Assets/Images/facebook.svg';
import  instagram  from '../Assets/Images/instagram.svg';
import  linkdin  from '../Assets/Images/linkdin.svg';
import  github  from '../Assets/Images/github.svg';
import ResumePDF from "../Assets/Files/sp.pdf"
export default function Footer() {
  const location = useLocation();
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
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="footer-first">
              <h1>
                <b>Smeet</b>
                <span style={{ color: "#683d4a" }}>.</span>
              </h1>
              <p>
                Welcome to my world of React! I thrive on crafting innovative
                and responsive web experiences and love turning ideas into
                beautiful and functional websites. Let's connect and create
                remarkable digital solutions that leave a lasting impression!
              </p>
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
                  <Link to="https://instagram.com/smeetpatel171?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noreferrer">
                  <img src={instagram} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-second">
              <h4>Useful Links</h4>
              <ul>
              <li>
                <Link
                  className={location.pathname === "/" ? "footeractive" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/about" ? "footeractive" : ""
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/services" ? "footeractive" : ""
                  }
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/projects" ? "footeractive" : ""
                  }
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/testimonials" ? "footeractive" : ""
                  }
                  to="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-third">
<h4>Contact Details</h4>
<div>Email<span>:</span><Link to="mailto:smeetpatel171@gmail.com">smeetpatel171@outlook.com</Link></div>
<div>Phone<span>:</span><Link to="tel:+919913886538">+919913886538</Link></div>          

<button onClick={handleDownloadResume}>Download Resume</button>
<Link className="contactbutton" to="/contact">Contact Me</Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
