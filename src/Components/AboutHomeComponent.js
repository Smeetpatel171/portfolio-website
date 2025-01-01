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
        𝗚𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀! 👋 I'm 𝗦𝗺𝗲𝗲𝘁 𝗣𝗮𝘁𝗲𝗹, a seasoned 𝗧𝗲𝗰𝗵 𝗟𝗲𝗮𝗱 with a strong foundation in 𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 and a passion for crafting 𝘀𝗰𝗮𝗹𝗮𝗯𝗹𝗲, 𝘂𝘀𝗲𝗿-𝗰𝗲𝗻𝘁𝗿𝗶𝗰, and 𝗵𝗶𝗴𝗵-𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 web applications. Currently leading a talented development team at 𝗦𝘁𝗲𝗹𝗹𝗮𝗿𝗺𝗶𝗻𝗱.𝗮𝗶, I specialize in architecting innovative solutions that shape the digital landscape.I am a passionate Web3 enthusiast, I am currently learning and excited about the transformative potential of decentralized technologies and their impact on the future of the internet.
        </p>
        
      </div>
      </div>
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
