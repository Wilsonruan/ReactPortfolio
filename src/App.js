import './App.css';
import { Layout, Header, Navigation, Drawer, Content, FooterSection, Footer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Header className='header-color' title="Wilson Ruan" scroll>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Wilson Ruan">
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer size="mini">
          <FooterSection type="left" logo="© Copyright">
          </FooterSection>
        </Footer>
      </Layout>

    </div>
  );
}

export default App;
