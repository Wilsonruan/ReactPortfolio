import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import Projects from './projects';
import Home from "./home"

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main; 