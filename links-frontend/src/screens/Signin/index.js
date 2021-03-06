import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const Signin = ({ signIn, account }) => {
  if (account) return <Redirect to="/manage/links" />
  
  const submitHandler = e => {
    e.preventDefault();

    const data = getFormData(e);

    if (data.email === "" || data.password === "") return false;

    signIn(data);
  }
    
  
  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input required name="email" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input required name="password" type="password" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Sign In</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an Account?</div>
          <Link to="/sign-up">Sign Up</Link> 
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { account: state.account.account };
}

export default connect(mapStateToProps, { signIn })(Signin);