import InputText2 from 'components/Form/InputText2/InputText2';
import Container from 'components/Grid/Container/Container';
import { projectName } from 'pages/MainPage/selectors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './CreateNewProjectPage.module.scss';
import thunkSetProjectName from './thunks/thunkSetProjectName';

const CreateNewProjectPage = () => {
  const history = useHistory();
  const nowProjectName = useSelector(projectName);
  const [value, setValue] = useState(nowProjectName || '');

  const submit = thunkSetProjectName();

  const handleChange = (result: string) => {
    setValue(result);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submit(value);
    history.push('/admin/list');
  };

  return (
    <div className={styles.CreateNewProjectPage} style={{ padding: 30 }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h3 className={styles.title}>Your Project Is New. Please Fill The Project Name</h3>
            <p className={styles.desc}>It will be app's title</p>
          </div>
          <InputText2 defaultValue={value} label="Project Name" onChange={handleChange} />
          <button disabled={value.length === 0} className={styles.submitBtn} type="submit" onSubmit={handleSubmit}>
            Create New Project
          </button>
        </form>
      </Container>
    </div>
  );
};

export default CreateNewProjectPage;
