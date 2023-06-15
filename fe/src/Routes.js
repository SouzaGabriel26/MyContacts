import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import NewCategory from './pages/NewCategory';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/newContact" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
      <Route path="/newCategory" component={NewCategory} />
    </Switch>
  );
}
