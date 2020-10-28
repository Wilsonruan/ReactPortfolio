import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Wilson Ruan</h2>
            <img src='https://i.redd.it/hww8g804tp8z.jpg' alt='avatar' height='250px' />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <List>
              <ListItem>
                <ListItemContent icon="phone-square">(647)828-0111</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="mail">wilsonruan@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="linkin">Linkin</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="github">GitHub</ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;