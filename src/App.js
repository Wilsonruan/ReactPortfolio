import React, { useState, useEffect } from 'react'
import './App.css';
import { Container } from "react-bootstrap";
import Header from './components/Header/header'
import Main from './pages/main'
import Footer from './components/Footer/footer'
import LoadingScreen from './pages/loading'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  
  return (
    <>
      <Header />
      {loading === false ? (
          <div>
            <Container>
              <Main />
            </Container>
          </div>
        ) : (
            <LoadingScreen />
          )}
      <Footer />
    </>
  );
}

export default App;
