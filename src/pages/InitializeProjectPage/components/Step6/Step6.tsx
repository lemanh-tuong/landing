import InputText2 from 'components/Form/InputText2/InputText2';
import { AppConfig } from 'firebase/myFirebase';
import thunkConfigApp from 'pages/LoginPage/thunks/thunkConfigApp';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { createValidator } from 'utils/functions/createValidator';
import configureApp from '../../../../../configureApp.json';
import styles from './Step6.module.scss';

const isDev = process.env.NODE_ENV === 'development';

const Step6 = () => {
  const history = useHistory();

  //Dispatch
  const createNew = thunkConfigApp();

  // State
  const [configApp, setConfigApp] = useState<AppConfig['firebaseConfig']>(
    isDev ? configureApp.firebase : {
      apiKey: '',
      appId: '',
      authDomain: '',
      databaseURL: '',
      measurementId: '',
      messagingSenderId: '',
      projectId: '',
      storageBucket: ''
    });
  const [error, setError] = useState('');
  const handleChangeConfigFirebase = (fieldName: keyof AppConfig['firebaseConfig']) => {
    return (result: string) => {
      setConfigApp(state => ({
        ...state,
        [fieldName]: result
      }))
    }
  }

  const handleSubmitConfig = (e: any) => {
    e.preventDefault();
    if (!error) {
      createNew({ firebaseConfig: configApp });
      history.push('/admin/login');
      window.location.reload();
    }
    return false;
  }

  const validator = createValidator<AppConfig['firebaseConfig']>([
    ({ apiKey }) => apiKey.length === 0,
    ({ appId }) => appId.length === 0,
    ({ authDomain }) => authDomain.length === 0,
    ({ databaseURL }) => databaseURL.length === 0,
    ({ measurementId }) => measurementId.length === 0,
    ({ messagingSenderId }) => messagingSenderId.length === 0,
    ({ projectId }) => projectId.length === 0,
    ({ storageBucket }) => storageBucket.length === 0,
  ]);

  const handleError = useCallback(() => {
    const { indexError } = validator(configApp);
    switch (indexError) {
      case 0:
        return setError("Api Key is required");
      case 1:
        return setError("App Id is required");
      case 2:
        return setError("Auth Domain is required");
      case 3:
        return setError("Database URL is required");
      case 4:
        return setError("Measurement Id is required");
      case 5:
        return setError("Messaging Sender Id is required");
      case 6:
        return setError("ProjectId");
      case 7:
        return setError("Storage Bucket is required");
      default:
        return setError("");
    }
  }, [configApp, validator]);

  useEffect(() => {
    handleError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configApp, handleError])

  const _renderCreateNewProject = () => {
    return <form onSubmit={handleSubmitConfig}>
      <InputText2 defaultValue={configApp.apiKey} label="Api Key" onChange={handleChangeConfigFirebase('apiKey')} />
      <InputText2 defaultValue={configApp.appId} label="App Id" onChange={handleChangeConfigFirebase('appId')} />
      <InputText2 defaultValue={configApp.authDomain} label="Auth Domain" onChange={handleChangeConfigFirebase('authDomain')} />
      <InputText2 defaultValue={configApp.databaseURL} label="Database URL" onChange={handleChangeConfigFirebase('databaseURL')} />
      <InputText2 defaultValue={configApp.measurementId} label="Measurement Id" onChange={handleChangeConfigFirebase('measurementId')} />
      <InputText2 defaultValue={configApp.messagingSenderId} label="Messaging Sender Id" onChange={handleChangeConfigFirebase('messagingSenderId')} />
      <InputText2 defaultValue={configApp.projectId} label="ProjectId" onChange={handleChangeConfigFirebase('projectId')} />
      <InputText2 defaultValue={configApp.storageBucket} label="Storage Bucket" onChange={handleChangeConfigFirebase('storageBucket')} />
      <div className={styles.errorNotifycation} style={{ color: "red" }}>{error}</div>
      <button className={styles.submitBtn} type='submit' onSubmit={handleSubmitConfig}>Initialize App</button>
    </form>
  }
  return (
    <div className={styles.Step6}>
      <h3 className={styles.title}>
        Initialize Your App
        </h3>
      <p>Fill All The Config Field Below</p>
      {_renderCreateNewProject()}
    </div>
  )
}

export default Step6;
