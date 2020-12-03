import React, { Component } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import "./aboutme.css";
import Contact from '../context/contact'
import project from "../projects.json"

class aboutme extends Component {
  render() {
    const fourProjects = project.splice(0, 3)
    return (
      <div>
        <Container style={{ marginTop: "100px", padding: '35px' }}>
          <Row className='float-right' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            {fourProjects.map((value) => (
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