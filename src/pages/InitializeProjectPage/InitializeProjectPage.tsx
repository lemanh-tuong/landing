import InputText2 from 'components/Form/InputText2/InputText2';
import Container from 'components/Grid/Container/Container';
import { AppConfig } from 'firebase/myFirebase';
import thunkConfigApp from 'pages/LoginPage/thunks/thunkConfigApp';
import React, { useCallback, useEffect, useState } from 'react';
import { createValidator } from 'utils/functions/createValidator';
import styles from './InitializeProjectPage.module.scss';

const InitializeProjectPage = () => {
  // Dispatch
  const createNew = thunkConfigApp();

  // State
  const [configApp, setConfigApp] = useState<AppConfig['firebaseConfig']>({
    apiKey: 'AIzaSyB8Qc6a3_gd_KPSx-7w5qKqA74i0t_HDn4',
    appId: '1:1021575008059:web:82459d571e7b7a0964f11e',
    authDomain: 'focal-bucksaw-265211.firebaseapp.com',
    databaseURL: 'https://focal-bucksaw-265211.firebaseio.com',
    measurementId: 'G-2YD1VVX730',
    messagingSenderId: '1021575008059',
    projectId: 'focal-bucksaw-265211',
    storageBucket: 'focal-bucksaw-265211.appspot.com'
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
    createNew({ firebaseConfig: configApp });
    window.location.reload();
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
      <InputText2 defaultValue="AIzaSyB8Qc6a3_gd_KPSx-7w5qKqA74i0t_HDn4" label="Api Key" onChange={handleChangeConfigFirebase('apiKey')} />
      <InputText2 defaultValue="1:1021575008059:web:82459d571e7b7a0964f11e" label="App Id" onChange={handleChangeConfigFirebase('appId')} />
      <InputText2 defaultValue="focal-bucksaw-265211.firebaseapp.com" label="Auth Domain" onChange={handleChangeConfigFirebase('authDomain')} />
      <InputText2 defaultValue="https://focal-bucksaw-265211.firebaseio.com" label="Database URL" onChange={handleChangeConfigFirebase('databaseURL')} />
      <InputText2 defaultValue="G-2YD1VVX730" label="Measurement Id" onChange={handleChangeConfigFirebase('measurementId')} />
      <InputText2 defaultValue="1021575008059" label="Messaging Sender Id" onChange={handleChangeConfigFirebase('messagingSenderId')} />
      <InputText2 defaultValue="focal-bucksaw-265211" label="ProjectId" onChange={handleChangeConfigFirebase('projectId')} />
      <InputText2 defaultValue="focal-bucksaw-265211.appspot.com" label="Storage Bucket" onChange={handleChangeConfigFirebase('storageBucket')} />
      <div className={styles.errorNotifycation} style={{ color: "red" }}>{error}</div>
      <button className={styles.submitBtn} type='submit' onSubmit={handleSubmitConfig}>Initialize App</button>
    </form>
  }
  return (
    <div className={styles.InitializeProjectPage} style={{ padding: 30 }}>
      <Container>
        <h3 className={styles.title}>
          Initialize Your App
        </h3>
        {_renderCreateNewProject()}
      </Container>
    </div>
  )
}

export default InitializeProjectPage;
