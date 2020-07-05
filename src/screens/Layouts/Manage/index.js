import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../actions/AccountActions';
import { Redirect, useHistory } from 'react-router-dom';

const Layout = ({ children, signOut, account }) => {
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
  }

  if (!account) return <Redirect to="/sign-in" />


  const handleGoBack = () => {
    history.goBack();
  }
  
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container d-flex w-100 juustify-content-between">
          <div>
          <button className="btn btn-primary" onClick={handleGoBack}>Back</button>
          </div>
          <div className="text-center">
            <strong>Links</strong>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleSignOut}>Exit</button>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return { account: state.account.account };
}

export default connect(mapStateToProps, { signOut })(Layout);