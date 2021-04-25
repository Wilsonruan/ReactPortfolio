import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Project from "../components/Projects/projects"
import project from "../projects.json"
import Budget from "../images/Budget-Trackers.jpg"
import Employee from "../images/Employee-Directory.jpg"
import Password from "../images/Password-Generator.jpg"
import Weather from "../images/Day-Planner.jpg"
import Portfolio from "../images/Portfolio.jpg"
import CodeQuiz from "../images/Code-Quiz.jpg"
import ShopSmart from "../images/ShopSmart.jpg"
import FlightSearch from "../images/Flight-Search.png"
import NoteTaker from "../images/Note-Taker.jpg"
import Scratch from "../components/Scratch/scratch"
import Instructions from "../components/Instructions/instructions"

class projects extends Component {
  state = {
    project
}
  render() {
    console.log(Weather)
    return (
      <Container style={{ background: "white", display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: "100px", marginBottom: "100px", paddingTop: "50px", boxShadow: '5px 10px 18px #888888' }}>
        {this.state.project.map(value => (
          <Project  
            image={value.image}
            name={value.name}
            technologies={value.technologies}
            description={value.description}
            github={value.github}
            website={value.website}
          />
        ))}
        <Scratch/>
        <Instructions/>
      </Container>

    )
  }
}

export default projects;