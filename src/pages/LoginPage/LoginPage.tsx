import { useMount } from 'hooks/useMount';
import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import styles from './LoginPage.module.scss';
import { AuthReducer } from './reducers/authReducer';
import { messageLogin, statusLogin } from './selectors';
import thunkContinueLog from './thunks/thunkContinueLog';
import thunkLogin from './thunks/thunkLogin';

const LoginPage = () => {
  const [SignIn_Info, setSignInInfo] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const history = useHistory();
  // Dispatch
  const loginAction = thunkLogin();
  const loginContinue = thunkContinueLog();
  // Selector
  const msg = useSelector(messageLogin);
  const status = useSelector(statusLogin);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    loginAction({ email: SignIn_Info.email, password: SignIn_Info.password });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      email: e.target.value
    });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      password: e.target.value
    });
  };

  const _renderError = () => {
    return (
      <div className={styles.modalError}>
        <div className={styles.modalTop}>
          <h3>Error</h3>
        </div>
        <div className={styles.modalContent}>
          <p>{msg}</p>
        </div>
      </div>
    );
  };

  useMount(() => {
    const preLoginJSON = localStorage.getItem('persist:root');
    const preLogin = preLoginJSON ? JSON.parse(preLoginJSON) : {};
    const preAuthReducerJSON = preLogin ? preLogin.authReducer : '';
    const preAuthReducer: AuthReducer = preAuthReducerJSON && JSON.parse(preAuthReducerJSON);
    if (preAuthReducer?.token && preAuthReducer.refreshToken) {
      loginContinue({ token: preAuthReducer.token, refreshToken: preAuthReducer.refreshToken });
    }
  });

  if (status === 'loged') {
    return history.location.state ? <Redirect to={{ pathname: history.location.state as string }} /> : <Redirect to='/admin/builder' />;
  }

  return (
    <div className={styles.LoginPage}>
      <div className={styles.contentLoginPage}>
        <div className={styles.form}>
          <div className={styles.formTop}>
          </div>
          <div className={styles.formContent}>
            <input onChange={handleChangeEmail} required type="email" className={styles.input} name="login" placeholder="Email" />
            <input onChange={handleChangePassword} required type="password" className={styles.input} name="login" placeholder="password" />
            <button className={styles.submitBtn} onClick={handleSignIn}>
              Log in
            </button>
          </div>
          <div className={styles.formBottom}>
            <a href="##" onClick={(e) => e.preventDefault()} className={styles.forgotPasswordBtn}>Forgot password</a>
          </div>
        </div>
        {msg ? _renderError() : null}
      </div>
    </div>
  );
};

export default LoginPage;
