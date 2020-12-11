import React from 'react'
import { Card } from "react-bootstrap";

export default function projects({image, name, github, website, technologies, description}) {
  console.log(image)
  return (
      <Card style={{ width: '18rem', marginBottom: '100px' }}>
        <Card.Body>
          <Card.Img style={{ height: '12rem', boxShadow: '5px 10px 18px #888888' }} variant="top" alt={name} src={image} />
        </Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Subtitle className="text-muted text-center">{technologies}</Card.Subtitle>
        <Card.Body style={{ marginTop: '-15px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <Card.Text className="text-muted text-center">
          {description}
          </Card.Text>
          <Card.Link href={github} target="_blank">GitHub Link</Card.Link>
          <Card.Link href={website} target="_blank">Website Link</Card.Link>
        </Card.Body>
      </Card>
  )
}
