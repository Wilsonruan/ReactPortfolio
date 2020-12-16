import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Project from "../components/Projects/projects"
import project from "../projects.json"
import Budget from "../images/Budget-Trackers.jpg"
import Employee from "../images/Employee-Directory.jpg"
import RocketShooter from "../images/Code-Quiz.jpg"
import ShopSmart from "../images/ShopSmartSS.png"
import Google from "../images/Google-Books.jpg"
import FlightSearch from "../images/Flight-Search.png"
import NoteTaker from "../images/Note-Taker.jpg"
import WorkOut from "../images/Workout-Tracker.jpg"

class projects extends Component {
  state = {
    project
}
  render() {
    console.log(WorkOut)
    return (
      <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: "100px" }}>
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
      </Container>
    )
  }
}

export default projects;