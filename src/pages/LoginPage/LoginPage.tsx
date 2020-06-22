import { useMount } from 'hooks/useMount';
import React, { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import styles from './LoginPage.module.scss';
import { messageLogin, statusLogin } from './selectors';
import thunkContinueLog from './thunks/thunkContinueLog';
import thunkLogin from './thunks/thunkLogin';

const LoginPage = () => {
  const [SignIn_Info, setSignInInfo] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [submit, setSubmit] = useState(false);

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
    setSubmit(true);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      password: e.target.value,
    });
  };

  const _renderMessageError = () => {
    if (msg.includes('Enable it in the Firebase console, under the sign-in method tab of the Auth section.'))
      return (
        <p>
          The given sign-in provider is disabled for this Firebase project
          <a target="blank" style={{ marginLeft: 6 }} href="https://www.youtube.com/watch?v=mEF9WRwYDfY&t=229s">
            Enable It
          </a>
        </p>
      );
    return <p>{msg}</p>;
  };

  const _renderError = () => {
    return (
      <div className={styles.modalError}>
        <div className={styles.modalContent}>
          <div className={styles.modalTop}>
            <h3>Error</h3>
          </div>
          <div className={styles.modalContent}>{_renderMessageError()}</div>
        </div>
      </div>
    );
  };

  useMount(() => {
    loginContinue();
  });

  if (status === 'loged') {
    return history.location.state ? (
      <Redirect to={{ pathname: history.location.state as string }} />
    ) : (
      <Redirect to="/admin/list" />
    );
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={styles.LoginPage}>
        <div className={styles.contentLoginPage}>
          <form className={styles.form}>
            <div className={styles.formTop}></div>
            <div className={styles.formContent}>
              <input
                onChange={handleChangeEmail}
                required
                type="email"
                className={styles.input}
                name="login"
                placeholder="Email"
              />
              <input
                onChange={handleChangePassword}
                required
                type="password"
                className={styles.input}
                name="login"
                placeholder="password"
              />
              <button type="submit" className={`${styles.submitBtn}`} onClick={handleSignIn}>
                Log in
                {submit && <div className={styles.logging} />}
              </button>
            </div>
            <div className={styles.formBottom}>
              <a href="##" onClick={e => e.preventDefault()} className={styles.forgotPasswordBtn}>
                Forgot password
              </a>
              <div style={{ cursor: 'pointer' }} className={styles.forgotPasswordBtn}>
                Forgot Password
              </div>
            </div>
          </form>
          {msg ? _renderError() : null}
        </div>
        {/* {_renderCreateNewProject()} */}
      </div>
    </>
  );
};

export default LoginPage;
