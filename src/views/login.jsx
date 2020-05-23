import React from 'react';
import { range } from 'lodash';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { Label, SeccionContainer, ViewContainer } from '../components';
import InputLabel from '../components/inputLabel';
import getSelector from '../redux/selectors';
import { loginLoading, token } from '../redux/selectors/selectorsKeys';
import { getLogin } from '../redux/action';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('testapis@tuten.cl');
  const [password, setPassword] = React.useState('1234');
  const [validLogin, setValidLogin] = React.useState(false);
  const loading = useSelector((state) => getSelector(state, loginLoading));
  const tokenLogin = useSelector((state) => getSelector(state, token));
  dispatch(getLogin({ email, password }));
  const loadingSpinner = range(6).map((item) => (
    <Spinner
      key={item}
      animation="border"
      role="status"
      style={{ width: `${item}rem`, height: `${item}rem`, marginRight: '1rem' }}
    />
  ));
  const disabled = (email === '' || password === '');
  const setEmailLogin = (value) => {
    if (validLogin) {
      setValidLogin(false);
    }
    setEmail(value);
  };
  const submit = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      dispatch(getLogin({ email, password }));
    } else {
      setValidLogin(true);
    }
  };
  const content = (
    <div className="login-container">
      <InputLabel onchange={(e) => setEmailLogin(e.target.value)} type="email" label="email" />
      <span className="login-container__label-error">{validLogin && <Label id="EmailInvalid" />}</span>
      <InputLabel onchange={(e) => setPassword(e.target.value)} type="password" label="password" />
      <button
        className="login-container__login-button"
        disabled={disabled}
        onClick={submit}
      >
        <Label id="login" />
      </button>
    </div>
  );
  if (tokenLogin) {
    return (<Redirect to="/home" />);
  }
  return (
    <ViewContainer>
      {!loading ? <SeccionContainer content={content} label="login" /> : loadingSpinner}
    </ViewContainer>
  );
};
export default Login;
