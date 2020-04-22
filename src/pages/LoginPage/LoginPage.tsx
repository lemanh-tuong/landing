import { signInFirebase } from 'firebase/authentication/signInFirebase';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const history = useHistory();
  const [SignIn_Info, setSignInInfo] = useState<{ userName: string; password: string }>({ userName: '', password: '' });
  const [error, setError] = useState('');

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    signInFirebase({ email: `${SignIn_Info.userName}`, password: SignIn_Info.password }).then((res) => {
      history.push('/admin/builder');
    }).catch((err) => {
      setError(err.message)
    });
  }

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...SignIn_Info,
      userName: e.target.value
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

  return (
    <div className={styles.LoginPage}>
      <div className={styles.contentLoginPage}>
        <div className={styles.form}>
          <div className={styles.formTop}>
          </div>
          <div className={styles.formContent}>
            <input onChange={handleChangeUserName} required type="email" className={styles.input} name="login" placeholder="login" />
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
