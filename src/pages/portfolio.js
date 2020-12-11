import React, { Component } from 'react';
import { Container } from "react-bootstrap";
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