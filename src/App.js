import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li className="list-group-item">
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/create">Create Link</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/edit">Edit Link</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links">Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <Signin />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/manage/links/create">
            <ManageLinksCreate />
          </Route>
          <Route path="/manage/links/edit">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;