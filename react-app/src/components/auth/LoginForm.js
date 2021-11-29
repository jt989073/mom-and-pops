import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import InternalFooter from '../footer';
import './loginform.css'

const LoginForm = () => {
const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

const demoLogin = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
    history.push("/businesses");
};


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    history.push('/businesses')
  }

  return (
      <div className="login_form_container">
        <div className="login_card">

              <div className="login_title">Login to Mom and Pops!</div>
            <form className="form" onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
              </div>
              <div className="email_container">
                <label className="email_label" htmlFor='email'>Email</label>
                <input
                className="email_input"
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                />
              </div>
              <div className="email_container">
                <label className="password_label" htmlFor='password'>Password</label>
                <input
                className="password_input"
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                  />
              </div>
              <div className="email_container">
                <button className="login_button" type='submit'>Login</button>
              </div>
              <div>
                <button className="login_button" onClick={demoLogin}>Demo Login</button>
              </div>
            </form>
        </div>
        <InternalFooter />
    </div>
  );
};

export default LoginForm;
