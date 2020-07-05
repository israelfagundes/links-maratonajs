import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFreshToken } from '../../actions/AccountActions';

import { getToken } from "../../helpers/account";
import { getTokenExpires } from '../../helpers/jwt';

const TokenRefresher = ({ getFreshToken }) => {
  const THRESHOLD = 30; 

  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpires(token);
    const secondsToExpire = expires - Date.now()/1000;

    return secondsToExpire;
  };
  
  useEffect(() => {
    const secondsToExpire = calculate() - THRESHOLD;
    const id = setTimeout(getFreshToken, secondsToExpire * 1000);

    return () => clearTimeout(id);
  }, [getFreshToken]);
  
  return null;
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);