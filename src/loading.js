import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import Main from './pages/main'
import { Container } from "react-bootstrap";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <FadeIn>
            <div style={{ textAlign: 'center', marginTop: '300px', fontSize: '48px', marginBottom: '600px'  }}>
              <h1>Fetching Data</h1>
              <Lottie options={defaultOptions} height={120} width={120} isStopped={this.state.isStopped} isPaused={this.state.isPaused}/>                      
            </div>
          </FadeIn>
        ) : (
          <Container>
            <Main />
          </Container>
        )}
      </div>
    );
  }
}