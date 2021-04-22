import React from 'react'
import { Card } from "react-bootstrap";
import Meteor from "../../images/Meteor.jpg"
import FinalBoss from "../../images/Final Boss.jpg"
import Movement from "../../images/Movement_Instructions.jpg"
import HeartandDog from "../../images/Heart and Space Dog.jpg"

export default function instructions() {
  return (
    <Card style={{ width: '30rem', marginBottom: '100px', boxShadow: '5px 10px 18px #888888' }}>
      <Card.Title className="text-center" style={{ marginTop: '3px'}}>Rocket Shooter</Card.Title>
      <Card.Subtitle className="text-muted text-center" style={{ marginTop: '-5px'}}>Scratch</Card.Subtitle>
      <Card.Body style={{ marginTop: '-20px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '-30px' }}>
        <Card.Text className="text-muted text-center">Rocket Shooter is a fun shooting game. Allows users to shoot down meteor and save the Earth</Card.Text>
      </Card.Body>
      <Card.Body>
        <h6><Card.Img className='float-left' style={{marginRight: '8px', height: '3rem', width: '3rem'}} alt="Movement" src={Movement} />You can move left, right, up and down using the <b>arrow keys</b> and <b>spacebar</b> to shoot lasers.</h6>
        <br></br>
        <h6><Card.Img className='float-left' style={{marginRight: '8px', height: '3rem', width: '3rem'}} alt="Meteor" src={Meteor} /><b>Meteor fall</b> from the sky at random locations. If touches the bottom, the player loses a life. Once a player reaches 0 life, Game Over.</h6>
        <br></br>
        <h6><Card.Img className='float-left' style={{marginRight: '8px', height: '3rem', width: '3rem'}} alt="HeartandDog" src={HeartandDog} /><b>Hearts</b> drop from the sky must touch ship for bonus life. <b>Space Dog</b> changes unlimited fire.</h6>
        <br></br>
        <h6><Card.Img className='float-left' style={{marginRight: '8px', height: '3rem', width: '3rem'}} alt="FinalBoss" src={FinalBoss} /><b>Final Boss</b> takes a hundred hits to delete.</h6>
      </Card.Body>
    </Card>
  )
}
