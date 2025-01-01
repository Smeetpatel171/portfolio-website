import React from "react";
import { Link } from "react-router-dom";
import ProjectData from "../DataOfComponents/ProjectsData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function ProjectSlider() {
  var settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // centerPadding: "0px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="heading">
        <h2>Featured Projects</h2>
        <p>
          Discover a collection of my diverse and innovative projects that
          showcase my passion for Full stack development, user-centric design, and
          cutting-edge technologies. Explore the intersection of creativity and
          functionality, and witness the impact of seamless user experiences
          across a range of digital solutions.
        </p>
      </div>

      <div className="row">

      <Slider {...settings} className="slickslider">
        {
            ProjectData.map((projectitem)=>{
                return(
                    <div key={projectitem.id}  className="col-lg-4">
                    <div className="projectitem">
                      <div className="project-mainimage">
                        <img src={projectitem.mainimage} alt={projectitem.title}/>
                      </div>
<div className="projectitem-desc">
                      <div className="titleofproject">{projectitem.title}</div>
                      <div className="projectdesc">{projectitem.smalldesc}</div>
                      <div className="project-tech"><span>Technologies:</span> {projectitem.technologies}</div>
                      
                  
                      <a className="projectbtn" href={projectitem.githubrepolink} target="_blank" rel="noreferrer">
                        Check The Code
                      </a>
                      <a className="projectbtn" href={projectitem.wesbitelink} target="_blank" rel="noreferrer">
                      Project Link
                      </a>
                      <Link to="/projects">Read More...</Link>
                      </div>

                    </div>
                  </div>
                )
            })
        }
        </Slider>
      </div>


    </div>
  );
}
