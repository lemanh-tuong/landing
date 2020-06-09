import Input from 'components/Form/Input/Input';
import PopUp from 'components/PopUp/PopUp';
import { AppConfig } from 'firebase/myFirebase';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { statusInitialize } from 'selectors';
import styles from './LoginPage.module.scss';
import { messageLogin, statusLogin, tokenLogin } from './selectors';
import thunkConfigApp from './thunks/thunkConfigApp';
import thunkContinueLog from './thunks/thunkContinueLog';
import thunkLogin from './thunks/thunkLogin';

const LoginPage = () => {
  const [SignIn_Info, setSignInInfo] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [configApp, setConfigApp] = useState<AppConfig>({} as AppConfig);

  const history = useHistory();
  // Dispatch
  const loginAction = thunkLogin();
  const loginContinue = thunkContinueLog();
  const createNew = thunkConfigApp();
  // Selector
  const msg = useSelector(messageLogin);
  const status = useSelector(statusLogin);
  const token = useSelector(tokenLogin);
  const statusApp = useSelector(statusInitialize);

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

  const handleChangeConfigFirebase = (fieldName: keyof AppConfig['firebaseConfig']) => {
    return (result: string) => {
      setConfigApp(state => ({
        ...state,
        firebaseConfig: {
          ...state.firebaseConfig,
          [fieldName]: result
        }
      }))
    }
  }

  const handleChangeConfigAppname = (result: string) => {
    setConfigApp(state => ({
      ...state,
      name: result
    }))
  }

  const handleSubmitConfig = () => {
    createNew(configApp)
  }

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

  useEffect(() => {
    if (statusApp === 'initialized') {
      loginContinue({ token: token });
    }
  }, [statusApp, loginContinue, token])

  if (status === 'loged') {
    return history.location.state ? <Redirect to={{ pathname: history.location.state as string }} /> : <Redirect to='/admin/list' />;
  }

  const _renderCreateNewProject = () => {
    return <PopUp id="create-new-project-form" onOk={handleSubmitConfig} type='antd' title={"Create New Project"}>
      <Input label="Project name" type='input' onChange={handleChangeConfigAppname} />
      <Input label="Api Key" type='input' onChange={handleChangeConfigFirebase('apiKey')} />
      <Input label="App Id" type='input' onChange={handleChangeConfigFirebase('appId')} />
      <Input label="Auth Domain" type='input' onChange={handleChangeConfigFirebase('authDomain')} />
      <Input label="Database URL" type='input' onChange={handleChangeConfigFirebase('databaseURL')} />
      <Input label="Measurement Id" type='input' onChange={handleChangeConfigFirebase('measurementId')} />
      <Input label="Messaging Sender Id" type='input' onChange={handleChangeConfigFirebase('messagingSenderId')} />
      <Input label="ProjectId" type='input' onChange={handleChangeConfigFirebase('projectId')} />
      <Input label="Storage Bucket" type='input' onChange={handleChangeConfigFirebase('storageBucket')} />
    </PopUp>
  }

  return (
    <div className={styles.LoginPage}>
      <div className={styles.contentLoginPage}>
        <form className={styles.form}>
          <div className={styles.formTop}>
          </div>
          <div className={styles.formContent}>
            <input onChange={handleChangeEmail} required type="email" className={styles.input} name="login" placeholder="Email" />
            <input onChange={handleChangePassword} required type="password" className={styles.input} name="login" placeholder="password" />
            <button type='submit' className={styles.submitBtn} onClick={handleSignIn}>
              Log in
            </button>
          </div>
          <div className={styles.formBottom}>
            <a href="##" onClick={(e) => e.preventDefault()} className={styles.forgotPasswordBtn}>Forgot password</a>
            <div style={{ cursor: 'pointer' }} onClick={PopUp.show('create-new-project-form')} className={styles.forgotPasswordBtn}>Change Project</div>
          </div>
        </form>
        {msg ? _renderError() : null}
      </div>
      {_renderCreateNewProject()}
    </div>
  );
};

export default LoginPage;
