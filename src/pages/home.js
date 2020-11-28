import React, { Component } from 'react';
import { Alert, Figure, Container } from "react-bootstrap"; 
import Wilson from "./Wilson-Ruan.jpg"
import "./aboutme.css";

class home extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "35px" }}>
          <Alert>
          <Figure.Image style={{ margin: "35px" }} width={250} height={250} alt="Wilson Ruan" src={Wilson} className="float-right" rounded />
            <h1>Hello there,</h1>
            <p className="paragraphText">I am a Full Stack Developer with a passion of creative ideas, visually engaging, and fully responsive applications. Programming allows me to engage both the creative and logical sides of my brain, and I love the satisfying feeling of bringing new ideas to coding.</p>
            <p className="paragraphText">My skills include JavaScript, ES6, jQuery, React/React Hooks, Redux, React Native, Node, Express, MySQL, Sequelize.js MongoDB, Mongoose.js, REST APIs, HTML5, Handlebars, CSS3, Bootstrap, Material UI, Git, and GitHub.</p>
            <p className="paragraphText">I am constantly learning new techniques and collaborating with other developers to become a better Full Stack Developer.</p>
            <hr />
            <a href="https://drive.google.com/file/d/1RTGhtVr1cGEi1Ku8t9dG9lptUcOKfEWU/view?usp=sharing" target="_blank" rel="noreferrer">Click here to view my Resume</a>
          </Alert>
        </Container>
      </div>
    )
  }
}

export default home;