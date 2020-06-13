import InputText2 from 'components/Form/InputText2/InputText2';
import Container from 'components/Grid/Container/Container';
import thunkGetProjectName from 'pages/InitializeProjectPage/thunks/thunkGetProjectName';
import React, { useState } from 'react';
import styles from './CreateNewProjectPage.module.scss';
import thunkSetProjectName from './thunks/thunkSetProjectName';

const CreateNewProjectPage = () => {
  const [value, setValue] = useState('');

  const submit = thunkSetProjectName();
  const getProjectName = thunkGetProjectName();

  const handleChange = (result: string) => {
    setValue(result);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submit(value);
    getProjectName();
  }

  return (
    <div className={styles.CreateNewProjectPage} style={{ padding: 30 }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <h3 className={styles.title}>Your Project Is New. Please Fill The Project Name</h3>
          <InputText2 label="Project Name" onChange={handleChange} />
          <button disabled={value.length === 0} className={styles.submitBtn} type='submit' onSubmit={handleSubmit}>Create New Project</button>
        </form>
      </Container>
    </div>
  )
}

export default CreateNewProjectPage;
