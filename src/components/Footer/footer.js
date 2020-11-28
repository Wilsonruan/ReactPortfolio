import React from 'react'
import { Card, Container, Navbar} from "react-bootstrap"; 
import "./footer.css"

export default function footer() {
  return (
    <Navbar fixed="bottom" id="footer">
      <Container >
          <Card.Text className="text-muted">&#9400; 2020 Wilson Ruan</Card.Text>
      </Container>
    </Navbar>
  )
}
