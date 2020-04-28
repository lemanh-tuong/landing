import { useMount } from 'hooks/useMount';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './LoginPage.module.scss';
import { AuthReducer } from './reducers/authReducer';
import thunkContinueLog from './thunks/thunkContinueLog';
import thunkLogin from './thunks/thunkLogin';

const LoginPage = () => {
  const history = useHistory();
  const [SignIn_Info, setSignInInfo] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [error, setError] = useState('');

  // Dispatch
  const loginAction = thunkLogin();
  const loginContinue = thunkContinueLog();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    loginAction({ email: SignIn_Info.email, password: SignIn_Info.password })
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      email: e.target.value
    })
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      password: e.target.value
    })
  }

  const _renderError = () => {
    return (
      <div className={styles.modalError}>
        <div className={styles.modalTop}>
          <h3>Error</h3>
        </div>
        <div className={styles.modalContent}>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  useMount(() => {
    const preLoginJSON = localStorage.getItem('persist:root');
    const preLogin = preLoginJSON ? JSON.parse(preLoginJSON) : {};
    const preAuthReducerJSON = preLogin ? preLogin.authReducer : '';
    const preAuthReducer: AuthReducer = JSON.parse(preAuthReducerJSON);
    if (preAuthReducer.token && preAuthReducer.refreshToken) {
      loginContinue({ token: preAuthReducer.token, refreshToken: preAuthReducer.refreshToken })
    }
  })

  return (
    <div className={styles.LoginPage}>
      <div className={styles.contentLoginPage}>
        <div className={styles.form}>
          <div className={styles.formTop}>
          </div>
          <div className={styles.formContent}>
            <input onChange={handleChangeEmail} required type="email" className={styles.input} name="login" placeholder="login" />
            <input onChange={handleChangePassword} required type="password" className={styles.input} name="login" placeholder="password" />
            <button className={styles.submitBtn} onClick={handleSignIn}>
              Log in
            </button>
          </div>
          <div className={styles.formBottom}>
            <a href="##" onClick={(e) => e.preventDefault()} className={styles.forgotPasswordBtn}>Forgot password</a>
          </div>
        </div>
        {error ? _renderError() : null}
      </div>
    </div>
  )
}

export default LoginPage;
