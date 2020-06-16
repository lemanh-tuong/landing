import InputText2 from 'components/Form/InputText2/InputText2';
import { userProfile } from 'pages/ListPage/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ProfilePage.module.scss';
import { statusChangeUserProfile } from './selector';
import thunkChangeProfileUser from './thunks/thunkChangeProfileUser';

const ProfilePage = () => {
  const profile = useSelector(userProfile);
  const { displayName, email, phoneNumber } = profile;
  const statusChangerProfile = useSelector(statusChangeUserProfile);

  const [newProfile, setNewProfile] = useState({});
  const handleSetNewProfile = (profileProperty: string) => (result: string) => setNewProfile({ [profileProperty]: result });

  const [nowFormEdit, setNowFormEdit] = useState('');
  const handleSetFormEdit = (label: string) => () => setNowFormEdit(label);
  const handleCloseAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setNowFormEdit('');
  }


  const changeProfile = thunkChangeProfileUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    changeProfile(newProfile);
  }

  const _renderFormChangeProfile = (label: string, content: string, fieldName: string) => {
    return (
      <form onSubmit={handleSubmit}>
        <InputText2 onChange={handleSetNewProfile(fieldName)} placeholder={label} defaultValue={content} />
        <div className={styles.btnGroup}>
          <button className={`${styles.btn}`} onClick={handleCloseAll}>Cancel</button>
          <button className={`${styles.btn} ${styles[statusChangerProfile]}`} onSubmit={handleSubmit}>OK</button>
        </div>
      </form>
    )
  }

  const _renderItem = ({ label, content, fieldName, canEdit }: { label: string, content: string, fieldName: string, canEdit: boolean }) => {
    return (
      <div className={styles.item}>
        <div className={styles.labelItem}>{label}</div>
        <div className={styles.contentItem}>
          {label === nowFormEdit ? _renderFormChangeProfile(label, content, fieldName) :
            <>
              <span>{content}</span>
              {canEdit ? <span className={styles.editBtn} onClick={handleSetFormEdit(label)}>Edit</span> : null}
            </>
          }
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (statusChangerProfile === 'changedUserProfile') {
      setNowFormEdit('');
    }
  }, [statusChangerProfile])

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.content}>
        <h3 className={styles.title}>Title</h3>
        <div className={styles.userProfile}>
          {_renderItem({ label: 'User Name', content: displayName || '', fieldName: 'displayName', canEdit: true })}
          {_renderItem({ label: 'Email', content: email || '', fieldName: 'email', canEdit: true })}
          {_renderItem({ label: 'Password', content: '******************', fieldName: 'password', canEdit: true })}
          {_renderItem({ label: "Phone number", content: phoneNumber || 'Phone number', fieldName: 'phoneNumber', canEdit: false })}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
