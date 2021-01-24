import React, { Component } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import "./aboutme.css";
import Contact from '../contact/contact'
import project from "../projects.json"

class aboutme extends Component {
  render() {
    const rand = Math.floor(Math.random() * 3)
    const fourProjects = project.slice(0 + rand, 4 + rand)
    return (
      <div>
        <Container style={{ marginTop: "50px", padding: '35px' }}>
         <Row >
            <Col className='float-left' style={{ background: "white", display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: "100px", padding: '35px', boxShadow: '5px 10px 18px #888888' }}>
              <h1>Who Am I?</h1>
              <p className="paragraphText">My background stems from a unique combination of creative and coding. After graduating from the BootStrap Coding in 2020, I discovered my newfound love for web development.</p>
              <p className="paragraphText">I can honestly say I've never enjoyed learn more than I did while taking this course. As someone whose life has been surround by computers and technology, I fell in love with coding immediately.</p>
              <p className="paragraphText">I specialize in front end development with React JS and Javascript, but I also have experience developing full-stack MERN applications. However, I'm constantly dabbling with new innovative technologies in the programming world.</p>
              <hr/>
              <Contact />
            </Col>
              <Row className='float-right' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
              {fourProjects.map((value) => (
                <Col className="d-none d-lg-block">
                  <Card style={{ width: "250px", padding: "10px 10px 20px 10px", border: "1px solid #BFBFBF", backgroundColor: "white", boxShadow: "10px 10px 5px #aaaaaa", transform: value.rotate }}>
                    <div className="overContainer">
                      <Card.Img className="image" src={value.image} alt="Pulpit rock" height="213" />
                      <div className="overlay"> 
                        <Card.Link className="text" href={value.website} target="_blank">{value.name} Website Link</Card.Link>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
    )
  }
}

export default aboutme;