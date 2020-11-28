import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import CodeQuiz from "../images/Code-Quiz.jpg"
import DayPlanner from "../images/Day-Planner.jpg"
import RocketShooter from "../images/Rocket-Shooter.jpg"
import PasswordGenerator from "../images/Password-Generator.jpg"
import WeatherDashboard from "../images/Weather-Dashboard.jpg"
import FlightSearch from "../images/Flight-Search.png"
import Project from "../components/Projects/projects"
// import project from "../projects.json"

const project = [
  {
    name: "Code Quiz",
    image: CodeQuiz,
    github: "https://github.com/Wilsonruan/4-Code-Quiz",
    website: "https://wilsonruan.github.io/4-Code-Quiz",
    rotate: "rotate(7deg)"
  },
  {
    name: "Day Planner",
    image: DayPlanner,
    github: "https://github.com/Wilsonruan/5-Day-Planner",
    website: "https://wilsonruan.github.io/5-Day-Planner",
    rotate: "rotate(7deg)"
  },
  {
    name: "Rocket Shooter",
    image: RocketShooter,
    github: "https://scratch.mit.edu/projects/366012034",
    website: "https://scratch.mit.edu/projects/366012034",
    rotate: "rotate(7deg)"
  },
  {
    name: "Password Generator",
    image: PasswordGenerator,
    github: "https://wilsonruan.github.io/3-Password-Generator",
    website: "https://github.com/Wilsonruan/3-Password-Generator",
    rotate: "rotate(7deg)"
  },
  {
    name: "Weather Dashboard",
    image: WeatherDashboard,
    github: "https://wilsonruan.github.io/6-Weather-Dashboard",
    website: "https://github.com/Wilsonruan/6-Weather-Dashboard",
    rotate: "rotate(7deg)"
  },
  {
    name: "Flight Search",
    image: FlightSearch,
    github: "https://wilsonruan.github.io/Flight-Search",
    website: "https://github.com/Wilsonruan/Flight-Search",
    rotate: "rotate(7deg)"
  }
]

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