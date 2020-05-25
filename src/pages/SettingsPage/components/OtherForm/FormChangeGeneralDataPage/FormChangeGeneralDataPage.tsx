import { Input } from 'antd';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { listPage } from 'pages/ListPage/selectors';
import { messageRequestListPage, statusChangeGeneralDataPage } from 'pages/SettingsPage/selectors';
import thunkChangeGeneralDataPage from 'pages/SettingsPage/thunks/thunkPage/thunkChangeGeneralDataPage/thunkChangeGeneralDataPage';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

export interface FormChangeGeneralDataPageProps {
  pageId: string;
}

const FormChangeGeneralDataPage: FC<FormChangeGeneralDataPageProps> = ({ pageId }) => {

  const history = useHistory();

  const generalDataPage = useSelector(listPage);
  const messageRequestErr = useSelector(messageRequestListPage);
  const statusChangeData = useSelector(statusChangeGeneralDataPage);

  const nowPage = generalDataPage.find(item => item.id === pageId) as PageGeneralData;

  const [newPageName, setNewPageName] = useState(nowPage.pageName);
  const [newPathName, setNewPathName] = useState(nowPage.pathName);
  const [titlePage, setTitlePage] = useState(nowPage.titlePage);
  const [error, setError] = useState('');

  const changeGeneralDataPage = thunkChangeGeneralDataPage();

  const handleChangeNewPageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPageName(e.target.value);
  };
  const handleChangeNewPathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPathName(e.target.value);
  };
  const handleChangeTitleaPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitlePage(e.target.value)
  }

  const handleChangeGeneralDataPage = () => {
    const isExisted = generalDataPage.find(item => (item.pageName === newPageName && pageId !== item.id) || (item.pathName === newPathName && pageId !== item.id));
    if (!isExisted) {
      changeGeneralDataPage({ newPageName, newPathName, id: pageId, newTitlePage: titlePage });
      const interval = setInterval(() => {
        if (statusChangeData === 'changed') {
          history.push(`/admin/builder?pageName=${newPageName}&pathName=${newPathName}&id=${pageId}`);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setError('Page Name or Path Name existed');
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
  }

  return (
    <>
      {_renderChangeSwitch()}
      {_renderValidateError()}
      <PopUp id={`change-general-data-page-${pageId}-form`} type='antd' onCancel={PopUp.hide(`change-general-data-page-${pageId}-form`)} onOk={handleChangeGeneralDataPage}>
        <Input style={{ margin: 5 }} defaultValue={nowPage.pathName} required addonBefore="New Path Name" onChange={handleChangeNewPathName} />
        <Input style={{ margin: 5 }} defaultValue={nowPage.pageName} required addonBefore="New Page Name" onChange={handleChangeNewPageName} />
        <Input style={{ margin: 5 }} defaultValue={nowPage.pageName} required addonBefore="New Page Name" onChange={handleChangeTitleaPage} />
      </PopUp>
    </>
  );
};

export default FormChangeGeneralDataPage;
