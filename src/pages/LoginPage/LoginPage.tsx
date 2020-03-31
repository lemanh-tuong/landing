import React, { useState, ChangeEvent } from 'react';
import styles from './LoginPage.module.scss';

const keyAPI = 'AIzaSyDgVTo9pHCPpH2kK3-V5Bp2JJqkUMq_REQ';
const baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${keyAPI}`;

const LoginPage = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const handleChangePassWord = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const login = async () => {
    console.log('login');
  }

  return (
    <div className={styles.LoginPage}>
      <input placeholder="User Name" onChange={handleChangeUserName} />
      <input placeholder="Password" onChange={handleChangePassWord} type='password' />
      <button onClick={login}>
        Login
      </button>
    </div>
  )
}

export default LoginPage;
