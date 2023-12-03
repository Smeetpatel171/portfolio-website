import React from "react";
import point from "../../Assets/Images/point.svg";
const AboutMe = () => {
  return (
    <div className="container">
      <div className="about-content">
        <div className="heading">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio website! I'm thrilled to have the
            opportunity to introduce myself and showcase my skills as a Web
            developer.I strive to deliver high-quality solutions that leave a
            lasting impression.With a keen eye for design and a deep
            understanding of user-centric development, I bring a unique blend of
            technical expertise and creative problem-solving to every project.
          </p>
        </div>
        <div className="heading">
          <h3>Background and Education</h3>
          <p>
            Let me start by sharing a bit about my background. I completed my
            high school education in science stream with an outstanding 93%
            overall percentile, demonstrating my dedication to learning and
            achieving excellence.
          </p>
          <p>
            After high school, I embarked on a professional journey as an{" "}
            <a
              href="https://www.indeed.com/career-advice/career-development/what-is-telesales"
              target="_blank"
            >
              international telesales agent
            </a>{" "}
            at{" "}
            <a href="https://www.calltelinfosolutions.com/" target="_blank">
              Calltell Info Solutions
            </a>
            . Handling over 600 calls from customers in the United States on
            daily basis, I honed my communication skills and developed a keen
            understanding of customer needs. This experience instilled in me a
            strong sense of empathy and professionalism, ensuring exceptional
            service delivery.
          </p>
          <p>
            Currently, I am pursuing my college education in{" "}
            <a href=""> bachelor of science in Information Technology</a>,
            currently in my second year at{" "}
            <a href="https://www.ganpatuniversity.ac.in/" target="_blank">
              Ganpat University
            </a>
            , with an impressive CGPA of 9.3. Throughout my college journey, I
            have consistently demonstrated a commitment to academic excellence
            and a hunger for knowledge. This solid foundation equips me with a
            well-rounded skill set to tackle the challenges of the fast-paced
            tech industry.
          </p>
        </div>
        <div className="heading">
          <h3>Skills and Expertise</h3>
          <p>
            I possess a wide range of skills that contribute to successful
            frontend/Full-stack development. My focus on performance
            optimization translates into the design and implementation of
            low-latency, high-availability, and performant applications. I have
            a deep understanding of the importance of delivering exceptional
            user experiences across various devices, and I consistently strive
            for mobile-first development.
          </p>
        </div>
        <div className="skills">
          <div>
            <img src={point} alt="" />
            <p>
              <span className="skills-title">FRONTEND:</span>
              Responsive Web Design, HTML, CSS, JavaScript (ES6+), React JS,
              Redux and Redux Toolkit, Webpack (Basics), Vite (Basics),
              Bootstrap, Tailwind CSS, API Integration.
            </p>
          </div>
          <div>
            <img src={point} alt="" />
            <p>
              <span className="skills-title">BACKEND:</span>
              Node JS, RESTful API development, Express JS, Mongoose,
              Middleware, MVC structure, Data Modelling, Using Third Party
              Backend Like Firebase.
            </p>
          </div>
          <div>
            <img src={point} alt="" />
            <p>
              <span className="skills-title">Operating Systems:</span>
              Linux (Basics), Android, Windows.
            </p>
          </div>
          <div>
            <img src={point} alt="" />
            
            <p><span className="skills-title">Database:</span>MongoDB, MySQL, Oracle (Basics).</p>
          </div>
          <div>
            <img src={point} alt="" />
            <p>
              <span className="skills-title">Others:</span>
              Implementation of Build Process, Deployment MERN app on Platforms
              Like Netlify, AWS, and Render.com, Version Control System (Git).
            </p>
          </div>
          <div>
            <img src={point} alt="" />
            <p>
              Manage EC2 Instance (On AWS) with Linux Shell Scripting on Basic
              Level Using AWS CLI.
            </p>
          </div>
        </div>
        <div className="aboutfooter">
          <p>
            Don't Forget to Download the Resume By clicking on Download Resume
            Button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
