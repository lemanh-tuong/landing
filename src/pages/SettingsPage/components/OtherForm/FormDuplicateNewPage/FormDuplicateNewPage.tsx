import { Input } from 'antd';
import PopUp from 'components/PopUp/PopUp';
import thunkDuplicatePage from 'pages/SettingsPage/thunks/thunkPage/thunkDuplicatePage/thunkDuplicatePage';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormDuplicatePage = () => {

  const [pageName, setPageName] = useState('');
  const [pathName, setPathName] = useState('');

  const duplicatePage = thunkDuplicatePage();

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPathName(e.target.value);
  };

  const handleDuplicatePage = () => {
    duplicatePage({ pageName, pathName, id: uuidv4() });
  };

  return (
    <PopUp id="duplicate-page-form" type='antd' onCancel={PopUp.hide('duplicate-page-form')} onOk={handleDuplicatePage}>
      <Input required addonBefore="pathName" onChange={handleChangePathName} />
      <Input required addonBefore="Page Name" onChange={handleChangePageName} />
    </PopUp>
  );
};

export default FormDuplicatePage;
