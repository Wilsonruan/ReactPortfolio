import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', maring: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={6}>
            <img src='https://i.redd.it/hww8g804tp8z.jpg' alt='avatar' />
            <p col={1}>
              I am a Full Stack Developer with a passion of creative ideas, visually engaging, and fully responsive applications. Programming allows me to engage both the creative and logical sides of my brain, and I love the satisfying feeling of bringing new ideas to coding.
              My skills include JavaScript, ES6, jQuery, React/React Hooks, Redux, React Native, Node, Express, MySQL, Sequelize.js MongoDB, Mongoose.js, REST APIs, HTML5, Handlebars, CSS3, Bootstrap, Material UI, Git, and GitHub. I am constantly learning new techniques and collaborating with other developers to become a better Full Stack Developer.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;