import React, { Component } from 'react';
import { Cell, Grid, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import RocketShooter from './Rocket-Shooter.jpg'
import CodeQuiz from './Code-Quiz.jpg'
import DayPlanner from './Day-Planner.jpg'
import FlightSearch from './Flight-Search.png'
import PasswordGenerator from './Password-Generator.jpg'
import WeatherDashboard from './Weather-Dashboard.jpg'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className='category-tabs'>
        <Grid>
          <Cell col={12}>
            <div className='content'>
              <div className='project-grid'>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${RocketShooter}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Rocket Shooter
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://scratch.mit.edu/projects/366012034' target="_blank">GITHUB</Button>
                    <Button href='https://scratch.mit.edu/projects/366012034' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${WeatherDashboard}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Weather Dashboard
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://github.com/Wilsonruan/6-Weather-Dashboard' target="_blank">GITHUB</Button>
                    <Button href='https://wilsonruan.github.io/6-Weather-Dashboard/' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${PasswordGenerator}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Password Generator
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://github.com/Wilsonruan/3-Password-Generator' target="_blank">GITHUB</Button>
                    <Button href='https://wilsonruan.github.io/3-Password-Generator/' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
                <hr></hr>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${FlightSearch}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Flight Search
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://github.com/Wilsonruan/Flight-Search' target="_blank">GITHUB</Button>
                    <Button href='https://wilsonruan.github.io/Flight-Search/' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${DayPlanner}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Day Planner
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://github.com/Wilsonruan/5-Day-Planner' target="_blank">GITHUB</Button>
                    <Button href='https://wilsonruan.github.io/5-Day-Planner/' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                  <CardTitle expand style={{ color: '#fff', background: `url(${CodeQuiz}) no-repeat`, backgroundSize: '320px 225px' }}></CardTitle>
                  <CardText>
                    Code Quiz
                </CardText>
                  <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button href='https://github.com/Wilsonruan/4-Code-Quiz' target="_blank">GITHUB</Button>
                    <Button href='https://wilsonruan.github.io/4-Code-Quiz/' target="_blank"> WEBSITE</Button>
                  </CardActions>
                </Card>
              </div></div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Project;