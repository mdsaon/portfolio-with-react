import React, { Component } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
      <div class="grid-container">
      <div class="header">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div class="main">
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </div>  
      <div class="footer">Footer</div>
    </div>
      </Router>
       
    );
  }
}

export default Home;
