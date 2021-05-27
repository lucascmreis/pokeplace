import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Aqua from './pages/Aquashop';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aquashop" exact component={Aqua} />
  </Switch>
);

export default Routes;
