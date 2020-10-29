import React, { Component } from 'react';
import { Cell, Grid, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

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
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button>GITHUB</Button>
                  <Button>WEBSITE</Button>
                </CardActions>
              </Card>
              <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button colored>GITHUB</Button>
                  <Button colored>WEBSITE</Button>
                </CardActions>
              </Card>
              <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button colored>GITHUB</Button>
                  <Button colored>WEBSITE</Button>
                </CardActions>
              </Card>
              <hr></hr>
              <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button colored>GITHUB</Button>
                  <Button colored>WEBSITE</Button>
                </CardActions>
              </Card>
              <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button colored>GITHUB</Button>
                  <Button colored>WEBSITE</Button>
                </CardActions>
              </Card>
              <Card shadow={0} style={{ width: '320px', height: '320px', margin: '75px' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </CardText>
                <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button colored>GITHUB</Button>
                  <Button colored>WEBSITE</Button>
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