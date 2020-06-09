import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import styles from './LoginPage.module.scss';
import { messageLogin, statusLogin, tokenLogin } from './selectors';
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
  const token = useSelector(tokenLogin);

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
    loginContinue({ token: token });
  })

  if (status === 'loged') {
    return history.location.state ? <Redirect to={{ pathname: history.location.state as string }} /> : <Redirect to='/admin/list' />;
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
            <a href="##" onClick={PopUp.show('create-new-project-form')} className={styles.forgotPasswordBtn}>Create New Project</a>
          </div>
        </div>
        {msg ? _renderError() : null}
      </div>
    </div>
  );
};

export default LoginPage;
