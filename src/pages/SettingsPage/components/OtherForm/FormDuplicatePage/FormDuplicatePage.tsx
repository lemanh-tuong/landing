import { Input } from 'antd';
import CheckBox from 'components/Form/CheckBox/CheckBox';
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
  const [isHome, setIsHome] = useState(false);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState('');

  const duplicatePage = thunkDuplicatePage();

  const statusDuplicate = useSelector(statusDuplicatePage);
  const messageRequestErr = useSelector(messageRequestListPage);
  const pages = useSelector(listPage);

  const handleError = (value: string) => {
    const regex = /\s/;
    setValidate(() => {
      if (value.length === 0) return 'Required'
      if (regex && value.match(regex)) return 'Pattern Error'
      return ''
    })
  }

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pathName = e.target.value.trim().split(' ').map(word => word.toLowerCase()).join('-');
    setPageName(e.target.value);
    setPathName(pathName);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e.target.value);
    if (!error) {
      setPathName(e.target.value);
    }
  };
  const handleIsHome = (result: boolean) => {
    setIsHome(result);
  }

  const handleDuplicatePage = () => {
    const id = uuidv4();
    const isExisted = pages.find(item => item.pageName === pageName || item.pathName === pathName);
    if (!isExisted && !validate) {
      duplicatePage({ pageName, pathName, id: id, isHome: isHome });
      const interval = setInterval(() => {
        if (statusDuplicate === 'duplicated') {
          history.push(`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (isExisted) setError('Page Name or Path Name existed');
      else setError('Path Name Validate Error');
    }
    setPathName('');
    setPageName('');
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
  };


  return (
    <>
      {_renderValidateError()}
      {_renderDuplicateSwitch()}
      <PopUp id="duplicate-page-form" type='antd' title={<h3>Form Duplicate Page</h3>} onCancel={PopUp.hide('duplicate-page-form')} onOk={handleDuplicatePage}>
        <div>
          <span>Page Name</span>
          <Input style={{ margin: '10px 0' }} required onChange={handleChangePageName} />
        </div>
        <div>
          <span>Path Name</span>
          <Input style={{ margin: '10px 0' }} required value={pathName} onChange={handleChangePathName} />
        </div>
        <div>
          <CheckBox label="This is home page?" onChange={handleIsHome} defaultChecked={isHome} />
        </div>
        {validate ? <p style={{ fontSize: 'inherit', color: 'red' }}>{validate}</p> : null}
      </PopUp>
    </>
  );
};

export default FormDuplicatePage;
