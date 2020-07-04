import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../../../Layouts/Manage';
import { getFormData } from '../../../../helpers/form';
import { linkCreate } from '../../../../actions/LinkActions';

const Create = ({ link, linkCreate }) => {
  const submitHandler = e => {
    e.preventDefault();

    const data = getFormData(e);

    if (data.label === "" || data.url === "") return false

    linkCreate(data);
  }
  
  if (link) {
    return <Redirect to="/manage/links" />
  }
  
  console.log('Create.link :: ', link);
  
  return (
    <Layout>
      <h1>Create Link</h1>
        <div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="">Label</label>
              <input required name="label" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Url</label>
              <input required name="url" type="text" className="form-control" />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input type="checkbox" name="isSocial"/>
                <span className="form-check-sign"></span>
                Is Social
              </label>
            </div>
            <div>
              <button className="btn btn-primary btn-round">Submit</button>
            </div>
          </form>
        </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  return { link: state.link.link };
}

export default connect(mapStateToProps, { linkCreate })(Create);