import React, { Component } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import "./aboutme.css";
import CodeQuiz from "../images/Code-Quiz.jpg"
import DayPlanner from "../images/Day-Planner.jpg"
import RocketShooter from "../images/Rocket-Shooter.jpg"
import PasswordGenerator from "../images/Password-Generator.jpg"
import WeatherDashboard from "../images/Weather-Dashboard.jpg"
import FlightSearch from "../images/Flight-Search.png"
import Contact from '../context/contact'


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
    rotate: "rotate(-7deg)"
  }
]


class aboutme extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '35px' }}>
          <Row className='float-right' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            {project.map((value) => (
              <Col >
                <Card style={{ width: "284px", padding: "10px 10px 20px 10px", border: "1px solid #BFBFBF", backgroundColor: "white", boxShadow: "10px 10px 5px #aaaaaa", transform: value.rotate }}>
                  <Card.Img src={value.image} alt="Pulpit rock" height="213" />
                  <Card.Text class="caption">{value.name}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className='float-left' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            <Col >
              <h1>Who Am I?</h1>
              <p className="paragraphText">My background stems from a unique combination of creative and coding. After graduating from the BootStrap Coding in 2020, I discovered my newfound love for web development.</p>
              <p className="paragraphText">I can honestly say I've never enjoyed learn more than I did while taking this course. As someone whose life has been surround by computers and technology, I fell in love with coding immediately.</p>
              <p className="paragraphText">I specialize in front end development with React JS and Javascript, but I also have experience developing full-stack MERN applications. However, I'm constantly dabbling with new innovative technologies in the programming world.</p>
              <hr/>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default aboutme;