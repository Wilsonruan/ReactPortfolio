import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Home from "./home"

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme/" component={AboutMe} />
    <Route path="/portfolio/" component={Portfolio} />
  </Switch>
)

export default Main; 