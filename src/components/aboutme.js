import React, { Component } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import "./aboutme.css";
import CodeQuiz from "./images/Code-Quiz.jpg"
import DayPlanner from "./images/Day-Planner.jpg"
import RocketShooter from "./images/Rocket-Shooter.jpg"
import PasswordGenerator from "./images/Password-Generator.jpg"
import WeatherDashboard from "./images/Weather-Dashboard.jpg"
import FlightSearch from "./images/Flight-Search.png"

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
    rotate: "rotate(-7deg)"
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
    rotate: "rotate(-7deg)"
  },
  {
    name: "Flight Search",
    image: FlightSearch,
    github: "https://wilsonruan.github.io/Flight-Search",
    website: "https://github.com/Wilsonruan/Flight-Search",
    rotate: "rotate(7deg)"
  }
]


class aboutme extends Component {
  render() {
    return (
      <div>
        <Container style={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', padding: "35px" }}>
          <Row xs={1} md={2}>
            {project.map((value) => (
              <Col>
                <Card style={{ marginRight: "-250px", width: "284px", padding: "10px 10px 20px 10px", border: "1px solid #BFBFBF", backgroundColor: "white", boxShadow: "10px 10px 5px #aaaaaa", transform: value.rotate }}>
                  <Card.Img src={value.image} alt="Pulpit rock" height="213" />
                  <Card.Text class="caption">{value.name}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default aboutme;