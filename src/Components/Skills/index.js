import React from "react";
import "./stylesheet.css";

const Skills = () => {
  return (
    <div className="content-skills">
      <h3>My Skills</h3>
        <div className="skills-wrapper">
         <div className="skills">Html
            <div className="skills html">80%</div>
         </div>
         <div className="skills">Css
         <div className="skills css">80%</div>
         </div>
         <div className="skills">JavaScript
         <div className="skills js">80%</div>
         </div>
         <div className="skills">Php
         <div className="skills php">80%</div>
         </div>
         <div className="skills">MySql
         <div className="skills mysql">80%</div>
         </div>
         <div className="skills">MongoDb
         <div className="skills mongodb">80%</div>
         </div>
         <div className="skills">Sql
         <div className="skills sql">80%</div>
         </div>
         <div className="skills">NodeJs
         <div className="skills nodejs">80%</div>
         </div>
        </div>
    </div>
  );
};

export default Skills;
