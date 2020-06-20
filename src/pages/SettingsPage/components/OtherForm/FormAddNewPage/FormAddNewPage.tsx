import { Input } from 'antd';
import CheckBox from 'components/Form/CheckBox/CheckBox';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { listPage, messageRequestListPage, statusCreatePage } from 'pages/SettingsPage/selectors';
import thunkAddNewPage from 'pages/SettingsPage/thunks/thunkPage/thunkAddNewPage/thunkAddNewPage';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export interface FormAddNewPageProps {
  suggestHomePage: boolean;
}

const FormAddNewPage: FC<FormAddNewPageProps> = ({ suggestHomePage }) => {
  const history = useHistory();
  const [pageName, setPageName] = useState('');
  const [pathName, setPathName] = useState('');
  const [isHome, setIsHome] = useState(suggestHomePage);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState('');

  const addNewPage = thunkAddNewPage();

  const pages = useSelector(listPage);
  const statusCreate = useSelector(statusCreatePage);
  const messageRequestErr = useSelector(messageRequestListPage);

  const handleError = (value: string) => {
    const regex = /\s/;
    setValidate(() => {
      if (value.length === 0) return 'Required';
      if (regex && value.match(regex)) return 'Pattern Error';
      return '';
    });
  };

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pathName = e.target.value
      .trim()
      .split(' ')
      .map(word => word.toLowerCase())
      .join('-');
    setPathName(pathName);
    setPageName(e.target.value);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e.target.value);
    if (!error) {
      setPathName(e.target.value);
    }
  };
  const handleIsHome = (result: boolean) => {
    setIsHome(result);
  };

  const handleAddNewPage = () => {
    const id = uuidv4();
    const isExisted = pages.find(item => item.pageName === pageName || item.pathName === pathName);
    if (!isExisted && !validate) {
      addNewPage({ pageName, pathName: `/${pathName}`, id: id, isHome: isHome });
      const interval = setInterval(() => {
        if (statusCreate === 'created') {
          history.push(`/admin/builder?pageName=${pageName}&pathName=/${pathName}&id=${id}`);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (isExisted) setError('Page Name or Path Name existed');
      else setError('Path Name Validate Error');
    }
    setPageName('');
    setPathName('');
  };

  const _renderCreateSwitch = () => {
    if (statusCreate === 'creating') return <LoadingCircle />;
    if (statusCreate === 'createFail') return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
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
      return (
        <div
          onClick={handleClose}
          style={{
            position: 'fixed',
            background: 'rgba(0,0,0,0.8)',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'white',
            zIndex: 11111111,
          }}
        >
          {error}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {_renderValidateError()}
      {_renderCreateSwitch()}
      <PopUp id="add-page-form" type="antd" title={<h3>Form Add New Page</h3>} onCancel={PopUp.hide('add-page-form')} onOk={handleAddNewPage}>
        <div>
          <span>Page Name</span>
          <Input style={{ margin: '10px 0' }} required onChange={handleChangePageName} onFocus={handleChangePageName} />
        </div>
        <div>
          <span>Path Name</span>
          <Input value={pathName} style={{ margin: '10px 0' }} required onChange={handleChangePathName} />
        </div>
        <div>
          <CheckBox label="This page is home?" defaultChecked={suggestHomePage} onChange={handleIsHome} />
        </div>
        {validate ? <p style={{ fontSize: 'inherit', color: 'red' }}>{validate}</p> : null}
      </PopUp>
    </>
  );
};

export default FormAddNewPage;
