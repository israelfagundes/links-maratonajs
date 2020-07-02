import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
            <li>
              <Link to="/manage/links/create">Create Link</Link>
            </li>
            <li>
              <Link to="/manage/links/edit">Edit Link</Link>
            </li>
            <li>
              <Link to="/manage/links">Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in">Sign In</Route>
          <Route path="/sign-up">Sign Up</Route>
          <Route path="/manage/links/create">Create Link</Route>
          <Route path="/manage/links/edit">Edit Link</Route>
          <Route path="/manage/links">Links</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;