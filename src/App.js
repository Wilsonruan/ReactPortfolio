import './App.css';
import { Container } from "react-bootstrap";
import Header from './components/Header/header'
import Main from './pages/main'
import Footer from './components/Footer/footer'
import Loading from './loading'


function App() {
  
  return (
    <>
      <Header />
        <Container>
          <Main />
        </Container>
      <Footer />
    </>
  );
}

export default App;
