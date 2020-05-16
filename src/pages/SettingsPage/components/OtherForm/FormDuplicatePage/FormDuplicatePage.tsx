import { Input } from 'antd';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { listPage } from 'pages/ListPage/selectors';
import { messageRequestListPage, statusDuplicatePage } from 'pages/SettingsPage/selectors';
import thunkDuplicatePage from 'pages/SettingsPage/thunks/thunkPage/thunkDuplicatePage/thunkDuplicatePage';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const FormDuplicatePage = () => {
  const history = useHistory();
  const [pageName, setPageName] = useState('');
  const [pathName, setPathName] = useState('');
  const [error, setError] = useState('');

  const duplicatePage = thunkDuplicatePage();

  const statusDuplicate = useSelector(statusDuplicatePage);
  const messageRequestErr = useSelector(messageRequestListPage);
  const pages = useSelector(listPage);

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPathName(e.target.value);
  };

  const handleDuplicatePage = () => {
    const id = uuidv4();
    const isExisted = pages.find(item => item.pageName === pageName || item.pathName === pathName);
    if (!isExisted) {
      duplicatePage({ pageName, pathName, id: id });
      const interval = setInterval(() => {
        if (statusDuplicate === 'duplicated') {
          history.push(`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setError('Page Name or Path Name existed');
    }
  };

  const _renderDuplicateSwitch = () => {
    if (statusDuplicate === 'duplicating') return <LoadingCircle />;
    if (statusDuplicate === 'duplicateFail') return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
  };

  useEffect(() => {
    setTimeout(() => {
      if (error) setError('');
    }, 3000);
  }, [error]);

  const handleClose = () => {
    setError('');
  };

  const _renderValidateError = () => {
    if (error) {
      return <div onClick={handleClose}
        style={{
          position: 'fixed',
          background: 'rgba(0,0,0,0.8)',
          width: '100%', height: '100%',
          top: 0, left: 0, display: 'flex',
          justifyContent: 'center', alignItems: 'center',
          fontSize: 20, color: 'white',
          zIndex: 1111111
        }}>
        {error}
      </div>;
    }
    return null;
  }


  return (
    <>
      {_renderValidateError()}
      {_renderDuplicateSwitch()}
      <PopUp id="duplicate-page-form" type='antd' onCancel={PopUp.hide('duplicate-page-form')} onOk={handleDuplicatePage}>
        <Input style={{ margin: 5 }} required addonBefore="Path Name" onChange={handleChangePathName} />
        <Input style={{ margin: 5 }} required addonBefore="Page Name" onChange={handleChangePageName} />
      </PopUp>
    </>
  );
};

export default FormDuplicatePage;
