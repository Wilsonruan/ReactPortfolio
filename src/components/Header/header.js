import React from 'react'
import { Navbar, Breadcrumb, Nav, Container } from "react-bootstrap";
import './header.css'

export default function header() {
  return (
    <Navbar fixed="top" id="header" style={{ marginBottom: "50px"}}>
      <Container>
        <Navbar.Brand className='text-primary' href="/">Wilson Ruan</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Breadcrumb.Item className="text-danger" href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/aboutme">About</Breadcrumb.Item>
          <Breadcrumb.Item href="/portfolio">Portfolio</Breadcrumb.Item>
          <Breadcrumb.Item href="https://drive.google.com/file/d/197RK4KqoGBqjp0ypGt3cPX-lBromFwWn/view?usp=sharing" target="_blank">Resume</Breadcrumb.Item>
          <Nav.Link href="https://github.com/Wilsonruan" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-github fa-2x" aria-hidden="true"></i></Nav.Link>
          <Nav.Link href="mailto:wilsonruan23@gmail.com" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-envelope fa-2x"></i></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/wilsonruan/" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-linkedin fa-2x"></i></Nav.Link>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
}
