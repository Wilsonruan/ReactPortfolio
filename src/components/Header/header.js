import React from 'react'
import { Navbar, Breadcrumb, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './header.css'

export default function header() {
  return (
    <Navbar fixed="top" id="header" style={{ marginBottom: "50px"}}>
      <Container>
        <Link className='text-primary' to="/ReactPortfolio/">Wilson Ruan</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link class="mr-3" to="/ReactPortfolio/">Home</Link>
          <Link class="mr-3" to="/ReactPortfolio/aboutme/">About</Link>
          <Link class="mr-3" to="/ReactPortfolio/portfolio/">Portfolio</Link>
          <Breadcrumb.Item class="mr-3" href="https://drive.google.com/file/d/197RK4KqoGBqjp0ypGt3cPX-lBromFwWn/view?usp=sharing" target="_blank">Resume</Breadcrumb.Item>
          <Nav.Link href="https://github.com/Wilsonruan" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-github fa-2x" aria-hidden="true"></i></Nav.Link>
          <Nav.Link href="mailto:wilsonruan23@gmail.com" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-envelope fa-2x"></i></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/wilsonruan/" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-linkedin fa-2x"></i></Nav.Link>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
}
