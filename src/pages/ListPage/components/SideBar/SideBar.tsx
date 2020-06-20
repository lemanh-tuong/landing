import InputFile from 'components/Form/InputFile/InputFile';
import { OnChangeFileFunc } from 'components/FormBase/InputFileBase/InputFileBase';
import PopUp from 'components/PopUp/PopUp';
import { statusChangeAvatar, userProfile } from 'pages/ListPage/selectors';
import thunkChangeAvatar from 'pages/ListPage/thunks/thunkUser/thunkChangeAvatar';
import thunkConfigApp from 'pages/LoginPage/thunks/thunkConfigApp';
import thunkLogout from 'pages/LoginPage/thunks/thunkLogout';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const location = useLocation();

  const statusChangeUserAvatar = useSelector(statusChangeAvatar);
  const nowUserProfile = useSelector(userProfile);
  const { displayName, email, uid, photoURL } = nowUserProfile;

  const signOut = thunkLogout();
  const changeProject = thunkConfigApp();
  const changeAvatar = thunkChangeAvatar();

  const handleSignOut = () => {
    signOut();
  };

  const handleChangeProject = () => {
    changeProject({
      firebaseConfig: {
        apiKey: '',
        appId: '',
        authDomain: '',
        databaseURL: '',
        measurementId: '',
        messagingSenderId: '',
        projectId: '',
        storageBucket: '',
      },
    });
  };

  const handleChange: OnChangeFileFunc = files => {
    changeAvatar({
      file: files[0],
      uid: uid,
    });
  };

  const _renderInput = () => {
    return (
      <div className={styles.input}>
        <InputFile hasProcessUpload={false} onChange={handleChange} />
        <div className={`${styles.progressBar} ${styles[statusChangeUserAvatar]}`} />
        {statusChangeUserAvatar === 'changedAvatar' && PopUp.hide('form-change-avatar')()}
        {statusChangeUserAvatar === 'changeAvatarFailure' && <div className={styles.failure}>Failure</div>}
      </div>
    );
  };

  const _renderChangeAvatarForm = () => {
    return (
      <PopUp id="form-change-avatar" type="antd" title="Select profile photo">
        {_renderInput()}
      </PopUp>
    );
  };

  const _renderAvatar = () => {
    return (
      <div className={styles.avatar}>
        {photoURL ? <img src={photoURL} alt="Avatar" /> : <div>{displayName}</div>}
        <div className={styles.changeAvatarBtn} onClick={PopUp.show('form-change-avatar')}>
          <i className="fas fa-camera" />
        </div>
      </div>
    );
  };

  const _renderUserBox = () => {
    return (
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <div className={styles.boxSideBar}>
            {_renderAvatar()}
            <h4 className={styles.userName}>{displayName || email?.slice(0, email.indexOf('@'))}</h4>
            <p className={styles.userEmail}>{email}</p>
            <p className={styles.userId}>{uid}</p>
          </div>
          <div className={styles.boxBody}>
            <Link to="/admin/list" className={`${styles.button} ${location.pathname === '/admin/list'}`}>
              <i className={`${styles.icon} fas fa-home`} />
              Home
            </Link>
            <Link className={`${styles.button} ${location.pathname === '/admin/list/profile'}`} to="/admin/list/profile">
              <i className={`${styles.icon} fas fa-user`} />
              Profile
            </Link>
          </div>
          <div className={styles.boxFootter}>
            <Link to="/admin/login" onClick={handleSignOut} className={styles.button}>
              <i className={`${styles.icon} fas fa-sign-out-alt`} />
              Sign Out
            </Link>
            <Link to="/initializeApp" onClick={handleChangeProject} className={styles.button}>
              <i className={`${styles.icon} fas fa-exchange-alt`} />
              Change Project
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.SideBar}>
        <div className={styles.SideBarContent}>{_renderUserBox()}</div>
      </div>
      {_renderChangeAvatarForm()}
    </>
  );
};

export default SideBar;
