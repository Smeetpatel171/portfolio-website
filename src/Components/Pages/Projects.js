import React from "react";
import projectdata from "../../DataOfComponents/ProjectsData.json";
import point from "../../Assets/Images/point.svg"
export default function Projects() {
  return (
    <div className="container projectBriefinfo">
      <div className="heading">
        <h2>Featured Projects</h2>
        <p>
          "Discover a collection of my diverse and innovative projects that
          showcase my passion for web development, user-centric design, and
          cutting-edge technologies. Explore the intersection of creativity and
          functionality, and witness the impact of seamless user experiences
          across a range of digital solutions.
        </p>
      </div>
{projectdata.map((item)=>{
  return(
    <div className="" key={item.id}>
        <div className="heading">
          <h3>{item.title}</h3>
          <p>
           {item.longdesc}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="projectbrief-img">
              <img src={item.mainimage} alt={item.title} />
            </div>
          </div>
          <div className="col-lg-7 col-md-7">

          <div className="projectitem-desc">
            <div className="projectdesc">{item.smalldesc}</div>
            <div className="project-tech"><span>Technologies Used:</span>{item.technologies}</div>
            <div className="projectlinks">
                  <a className="projectbtn" href={item.githubrepolink} target="_blank" rel="noreferrer">
                        Check The Code
                      </a>
                      <a className="projectbtn" href={item.wesbitelink} target="_blank" rel="noreferrer">
                        Project Link
                      </a>
            </div>
           
              {item.features.map((feature)=>{
                return(
                  <div className="projectfeatures" key={feature.featureid}>
                    <img src={point} alt="point" />
                    <p>{feature.name}</p>
                  </div>
                )
              })}
            
          </div>

          </div>
        </div>
      </div>
  )
})}
   </div>
  );
}