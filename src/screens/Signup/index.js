import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from './SignupActions';

const Signup = ({ signUp, account }) => {
  const submitHandler = e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
        
    signUp(data);
  }

  if (account) return <Redirect to="/manage/links" />
  
  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input required type="password" name="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <input required type="password" name="password_confirmation" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an Account?</div>
          <Link to="/sign-in">Sign In</Link> 
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { account: state.signUp.account };
};

export default connect(mapStateToProps, { signUp })(Signup);