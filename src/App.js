import './App.css';
import { Navbar, Breadcrumb, Container, Nav } from "react-bootstrap";
import Main from './components/main'

function App() {
  return (
    <div>
      <Container>
        <Navbar variant='primary'>
          <Navbar.Brand href="/">Wilson Ruan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/aboutme">About Me</Breadcrumb.Item>
            <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
            <Breadcrumb.Item href="https://drive.google.com/file/d/1RTGhtVr1cGEi1Ku8t9dG9lptUcOKfEWU/view?usp=sharing" target="_blank">Resume</Breadcrumb.Item>
            <Nav.Link href="https://github.com/Wilsonruan" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-github fa-2x" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="mailto:wilsonruan23@gmail.com" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-envelope fa-2x"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/wilson-ruan-874069139/" target="_blank"><i style={{ marginRight: "-15px" }} class="fa fa-linkedin fa-2x"></i></Nav.Link>
          </Navbar.Collapse> 
        </Navbar>
        <Main />
      </Container>
    </div>
  );
}

export default App;
