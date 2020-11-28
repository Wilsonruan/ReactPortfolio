import './App.css';
import { Container } from "react-bootstrap";
import Header from './components/Header/header'
import Main from './pages/main'
import Footer from './components/Footer/footer'


function App() {
  return (
    <div>
     <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
