import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Home from "./home"

const Main = () => (
  <Switch>
    <Route exact path="/ReactPortfolio/" component={Home} />
    <Route path="/ReactPortfolio/aboutme/" component={AboutMe} />
    <Route path="/ReactPortfolio/portfolio/" component={Portfolio} />
  </Switch>
)

export default Main; 