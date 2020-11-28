import React from 'react'
import { Card, Container, Navbar} from "react-bootstrap"; 
import "./footer.css"

export default function footer() {
  return (
    <Navbar id="footer">
      <Container >
        <Card.Footer>
          <Card.Text id="copyright" className="text-muted">&#9400; 2020 Wilson Ruan</Card.Text>
        </Card.Footer>
      </Container>
    </Navbar>
  )
}
