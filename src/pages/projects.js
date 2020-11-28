import React, { Component } from 'react';
import { Card, Container } from "react-bootstrap";
import CodeQuiz from "../images/Code-Quiz.jpg"
import DayPlanner from "../images/Day-Planner.jpg"
import RocketShooter from "../images/Rocket-Shooter.jpg"
import PasswordGenerator from "../images/Password-Generator.jpg"
import WeatherDashboard from "../images/Weather-Dashboard.jpg"
import FlightSearch from "../images/Flight-Search.png"

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
  render() {
    return (
      <div>
        <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {project.map((value) => (
            <Card style={{ width: '18rem', marginBottom: '100px' }}>
              <Card.Body>
                <Card.Img style={{ height: '12rem', boxShadow: '5px 10px 18px #888888' }} variant="top" alt="Code Quiz" src={value.image} />
              </Card.Body>
                <Card.Subtitle className="mb-2 text-muted text-center">{value.name}</Card.Subtitle>
              <Card.Body style={{ marginTop: '-15px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Card.Link href={value.github} target="_blank">GitHub Link</Card.Link>
                <Card.Link href={value.website} target="_blank">Website Link</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    )
  }
}

export default projects;