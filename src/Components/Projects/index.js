import React from "react";
import card from "../../Images/card.png";
import "./stylesheet.css";

const Projects = () => {
  return (
    <div className="content-projects">
      <h3>My Projects</h3>
      <div className="projects-wrapper">
        <div className="projects">
          <img src={card} alt="Img" width="200px" height="200px"/>
          <div className="projects-info">
            <p>
              <b>Developed by using React,Redux,Nodejs and MongoDb </b>
            </p>
          </div>
        </div>
        <div className="projects">
        <img src={card} alt="Img" width="200px" height="200px"/>
          <div className="projects-info">
            <p>
              <b>Developed by using React,Redux,Nodejs and MongoDb </b>
            </p>
          </div>
        </div>
        <div className="projects">
        <img src={card} alt="Img" width="200px" height="200px"/>
          <div className="projects-info">
            <p>
              <b>Developed by using React,Redux,Nodejs and MongoDb </b>
            </p>
          </div>
        </div>
        <div className="projects">
        <img src={card} alt="Img" width="200px" height="200px"/>
          <div className="projects-info">
            <p>
              <b>Developed by using React,Redux,Nodejs and MongoDb </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
