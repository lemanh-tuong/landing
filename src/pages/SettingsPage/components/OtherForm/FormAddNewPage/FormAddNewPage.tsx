import { Input } from 'antd';
import PopUp from 'components/PopUp/PopUp';
import thunkAddNewPage from 'pages/SettingsPage/thunks/thunkPage/thunkAddNewPage/thunkAddNewPage';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormAddNewPage = () => {

  const [pageName, setPageName] = useState('');
  const [pathName, setPathName] = useState('');

  const addNewPage = thunkAddNewPage();

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPathName(e.target.value);
  };

  const handleAddNewPage = () => {
    addNewPage({ pageName, pathName, id: uuidv4() });
  };

  return (
    <PopUp id="add-page-form" type='antd' onCancel={PopUp.hide('add-page-form')} onOk={handleAddNewPage}>
      <Input required addonBefore="pathName" onChange={handleChangePathName} />
      <Input required addonBefore="Page Name" onChange={handleChangePageName} />
    </PopUp>
  );
};

export default FormAddNewPage;
