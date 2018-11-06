import React, { Component } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import banner from "../Images/banner.jpg";
class Home extends Component {
  render() {
    return (
        <div class="content-home">
          <div className="banner">
            <img src={banner} alt="Banner" width="100%" />
          </div>
         <h1>Welcome to the home page</h1>
         <About />
         <Skills />
         <Projects />
         <Contact />
        </div>
    );
  }
}

export default Home;
