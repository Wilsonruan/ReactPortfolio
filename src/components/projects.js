import React, { Component } from 'react';
import { Cell, Grid, Tab, Tabs, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='project-grid'>
          <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
    </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
          <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
    </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }
  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Project;