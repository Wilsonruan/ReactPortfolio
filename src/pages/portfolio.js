import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import CodeQuiz from "../images/Code-Quiz.jpg"
import DayPlanner from "../images/Day-Planner.jpg"
import RocketShooter from "../images/Rocket-Shooter.jpg"
import PasswordGenerator from "../images/Password-Generator.jpg"
import WeatherDashboard from "../images/Weather-Dashboard.jpg"
import FlightSearch from "../images/Flight-Search.png"
import Project from "../components/Projects/projects"
import project from "../projects.json"


class projects extends Component {
  state = {
    project
}
  render() {
    return (
      <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: "100px" }}>
        {this.state.project.map(value => (
          <Project  
            image={value.image}
            name={value.name}
            github={value.github}
            website={value.website}
          />
        ))}
      </Container>
    )
  }
}

export default projects;