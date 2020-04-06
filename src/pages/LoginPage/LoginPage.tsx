import { signInFirebase } from 'firebase/authentication/signInFirebase';
import { signOutFirebase } from 'firebase/authentication/signOutFirebase';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Form, { OnChangeFuncArg } from '../../components/Form/Form';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const history = useHistory();
  const [SignIn_Info, setSignInInfo] = useState<{ userName: string; password: string }>({ userName: '', password: '' });
  const [error, setError] = useState('');
  const handleChangeForm = ({ fieldName }: OnChangeFuncArg) => {
    return (result: string) => {
      setSignInInfo((SignIn_Info) => ({
        ...SignIn_Info,
        [fieldName]: result
      }))
    }
  }

  const handleSignIn = () => {
    signInFirebase({ email: `${SignIn_Info.userName}@gmail.com`, password: SignIn_Info.password }).then((res) => {
      history.push('/settings');
    }).catch((err) => {
      setError(err.message)
    })
  }

  const handleSignOut = () => {
    signOutFirebase();
  }

  return (
    <div className={styles.LoginPage}>
      <div className={styles.contentLoginPage}>
        <Form
          fields={[
            {
              fieldName: 'userName',
              fieldType: 'input',
              fieldId: 1,
              placeholder: 'User Name'
            },
            {
              fieldName: 'password',
              fieldType: 'password',
              fieldId: 2,
              placeholder: 'Password'
            }
          ]}
          onChange={handleChangeForm}
        >
          <Button onClick={handleSignIn}>
            Sign In
        </Button>
          <Button onClick={handleSignOut}>
            Sign Out
        </Button>
        </Form>
        {error ? <div className={styles.tooltipErr}>
          {error}
        </div> : null}
      </div>
    </div>
  )
}

export default LoginPage;
