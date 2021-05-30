import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Aqua from './pages/Aquashop';
import Fire from './pages/Fireshop';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aquashop" exact component={Aqua} />
    <Route path="/fireshop" exact component={Fire} />
  </Switch>
);

export default Routes;
