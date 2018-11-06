import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div class="grid-container">
        <div class="header">
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div class="main">
          <Route exact path="/" component={Home}>Home</Route>
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
        <div class="footer">Developed@saidur</div>
      </div>
    </Router>
    );
  }
}

export default App;
