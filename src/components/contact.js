import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';
import Wilson from './Wilson-Ruan.jpg'

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Wilson Ruan</h2>
            <img src={Wilson} alt='avatar' />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            {/* <List>
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
                <ListItemContent><i class="fa fa-github"></i>GitHub</ListItemContent>
              </ListItem>
            </List> */}
            <List>
              <ListItem>
                <ListItemContent>(647)828-0111</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>wilsonruan@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent>Linkin</ListItemContent>
                <ListItemAction>
                  <a href="https://www.linkedin.com/in/wilson-ruan-874069139/"><Icon name="linkin" /></a>
                </ListItemAction>
                
              </ListItem>
              <ListItem>
              <ListItemContent>GitHub</ListItemContent>
                <ListItemAction>
                  <a href="https://github.com/Wilsonruan"><Icon name="linkin" /></a>
                </ListItemAction>
                
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;