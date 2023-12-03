import React from 'react'
import setup from "../Assets/Images/setupnew.jfif";
import quoteright from "../Assets/Images/quoteright.svg";
import quoteleft from "../Assets/Images/quoteleft.svg";
import { Link } from 'react-router-dom';
export default function AboutHomeComponent() {
  return (
    <>
    <div className='container AboutHomeComponent'>
        <div className="heading">
        <h2>About Me</h2>
        <p>
        Welcome to my portfolio website! I'm thrilled to have the opportunity to introduce myself and showcase my skills as a Web developer.I strive to deliver high-quality solutions that leave a lasting impression.With a keen eye for design and a deep understanding of user-centric
          development, I bring a unique blend of technical expertise and
          creative problem-solving to every project. <Link to="/about">read more...</Link>
        </p>
      </div></div>
      <div className="marketing-quote">

          <div className='container'>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="quoteimg"><img src={setup} alt="" /></div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="quote">
                <img className="quoteleft" src={quoteleft} alt="" />
                  <p>Your project deserves a developer who not only possesses technical powers but also values clear communication and effective collaboration. I am dedicated to actively listening to your needs, understanding your vision, and translating it into a digital reality.</p>
                  <img className="quoteright" src={quoteright} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </>
  )
}
