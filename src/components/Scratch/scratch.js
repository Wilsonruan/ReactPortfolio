import React from 'react'
import { Card } from "react-bootstrap";
import './scratch.css'

export default function scratch() {
  return (
    <Card style={{width: '30.5rem', marginBottom: '100px', boxShadow: '5px 10px 18px #888888'}}>
      <iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/366012034/embed/?autostart=true" frameborder="0" allowfullscreen></iframe>
    </Card>
  )
}