import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Wilson from './Wilson-Ruan.jpg'

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={6}>
            <img src={Wilson} alt='avatar' />
            <p style={{fontSize: '20px', padding: '1em'}}>
              I am a Full Stack Developer with a passion of creative ideas, visually engaging, and fully responsive applications. Programming allows me to engage both the creative and logical sides of my brain, and I love the satisfying feeling of bringing new ideas to coding.
              My skills include JavaScript, ES6, jQuery, React/React Hooks, Redux, React Native, Node, Express, MySQL, Sequelize.js MongoDB, Mongoose.js, REST APIs, HTML5, Handlebars, CSS3, Bootstrap, Material UI, Git, and GitHub. I am constantly learning new techniques and collaborating with other developers to become a better Full Stack Developer.
            </p><a href="https://drive.google.com/file/d/1RTGhtVr1cGEi1Ku8t9dG9lptUcOKfEWU/view?usp=sharing" target="_blank" rel="noreferrer">Click here to view my Resume</a>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;