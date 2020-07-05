import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

import { initAccount } from './actions/AccountActions';

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <BrowserRouter>
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
          <Route path="/manage/links/edit/:id">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return { account: state.account.account };
}

export default connect(mapStateToProps, { initAccount })(App);