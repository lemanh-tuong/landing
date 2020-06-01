import { Input } from 'antd';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { listPage } from 'pages/ListPage/selectors';
import { messageRequestListPage, statusChangeGeneralDataPage } from 'pages/SettingsPage/selectors';
import thunkChangeGeneralDataPage from 'pages/SettingsPage/thunks/thunkPage/thunkChangeGeneralDataPage/thunkChangeGeneralDataPage';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

export interface FormChangeGeneralDataPageProps {
  pageId: string;
  redirectOnChange?: boolean;
}

const FormChangeGeneralDataPage: FC<FormChangeGeneralDataPageProps> = ({ pageId, redirectOnChange = false }) => {

  const history = useHistory();

  const generalDataPage = useSelector(listPage);
  const messageRequestErr = useSelector(messageRequestListPage);
  const statusChangeData = useSelector(statusChangeGeneralDataPage);

  const nowIndexPage = generalDataPage.findIndex(item => item.id === pageId);
  const nowPage = generalDataPage[nowIndexPage];

  const [newPageName, setNewPageName] = useState(nowPage.pageName);
  const [newPathName, setNewPathName] = useState(nowPage.pathName);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState('');

  const changeGeneralDataPage = thunkChangeGeneralDataPage();

  const handleError = (value: string) => {
    const regex = /\s/;
    setValidate(() => {
      if (value.length === 0) return 'Required'
      if (regex && value.match(regex)) return 'Pattern Error'
      return ''
    })
  }

  const handleChangeNewPageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPageName(e.target.value);
  };
  const handleChangeNewPathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e.target.value);
    if (!error) {
      setNewPathName(e.target.value);
    }
  };

  const handleChangeGeneralDataPage = () => {
    const isExisted = generalDataPage.find(item => (item.pageName === newPageName && pageId !== item.id) || (item.pathName === newPathName && pageId !== item.id));
    if (!isExisted && !validate) {
      changeGeneralDataPage({ nowIndexPage: nowIndexPage, newPageName, newPathName, id: pageId });
      const interval = setInterval(() => {
        if (statusChangeData === 'changed') {
          if (redirectOnChange) {
            history.push(`/admin/builder?pageName=${newPageName}&pathName=${newPathName}&id=${pageId}`);
          }
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (isExisted) setError('Page Name or Path Name existed');
      else setError('Path Name Validate Error');
    }
  };

  const _renderChangeSwitch = () => {
    if (statusChangeData === 'changing') return <LoadingCircle />;
    if (statusChangeData === 'changeFail') return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
    return null;
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
          zIndex: 11111111
        }}>
        {error}
      </div>;
    }
    return null;
  };

  return (
    <>
      {_renderChangeSwitch()}
      {_renderValidateError()}
      <PopUp id={`change-general-data-page-${pageId}-form`} type='antd' title={<h3>Form Change General Data Page</h3>} onCancel={PopUp.hide(`change-general-data-page-${pageId}-form`)} onOk={handleChangeGeneralDataPage}>
        <div>
          <span>New Path Name</span>
          <Input style={{ margin: '10px 0' }} defaultValue={nowPage.pathName} required onChange={handleChangeNewPathName} />
        </div>
        <div>
          <span>New Page Name</span>
          <Input style={{ margin: '10px 0' }} defaultValue={nowPage.pageName} required onChange={handleChangeNewPageName} />
        </div>
        {validate ? <p style={{ fontSize: 'inherit', color: 'red' }}>{validate}</p> : null}
      </PopUp>
    </>
  );
};

export default FormChangeGeneralDataPage;
