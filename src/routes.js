import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Aqua from './pages/Aquashop';
import Fire from './pages/Fireshop';
import Ghost from './pages/Ghostshop';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/aquashop" component={ Aqua}  />
    <Route path="/fireshop"  component={Fire} />
    <Route path="/ghostshop"  component={Ghost} />
  </Switch>
);

export default Routes;
