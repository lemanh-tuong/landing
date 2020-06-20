import { Button } from 'antd';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import FormChangeGeneralDataPage from 'pages/SettingsPage/components/OtherForm/FormChangeGeneralDataPage/FormChangeGeneralDataPage';
import FormDuplicatePage from 'pages/SettingsPage/components/OtherForm/FormDuplicatePage/FormDuplicatePage';
import { messageRequestListPage, statusDeletePage } from 'pages/SettingsPage/selectors';
import thunkDeletePage from 'pages/SettingsPage/thunks/thunkPage/thunkDeletePage/thunkDeletePage';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './ButtonFunc.module.scss';

export interface ButtonFuncProps extends PageGeneralData {
  nowIndexPage: number;
}

const ButtonFunc: FC<ButtonFuncProps> = ({ id, pageName, pathName, nowIndexPage }) => {
  const history = useHistory();

  const statusDelete = useSelector(statusDeletePage);
  const messageErr = useSelector(messageRequestListPage);

  const deletePage = thunkDeletePage();

  const handleDeletePage = (indexDelete: number) => {
    return () => {
      deletePage(indexDelete);
      const interval = setInterval(() => {
        if (statusDelete === 'deleted') {
          history.push('/admin/list');
          clearInterval(interval);
        }
      }, 1000);
    };
  };

  const _renderAlertConfirm = (pageName: string, indexDelete: number) => {
    return (
      <PopUp id={`alert-confirm-${pageName}`} type="antd" onOk={handleDeletePage(indexDelete)}>
        <p style={{ textAlign: 'center' }}>
          Delete
          <span style={{ fontSize: 20, fontWeight: 800, marginLeft: 10 }}>{pageName}?</span>
        </p>
      </PopUp>
    );
  };

  const _renderPopOverSetting = () => {
    return (
      <>
        <Button className={`${styles.btn}`} size="middle" onClick={PopUp.show(`alert-confirm-${pageName}`)}>
          <div className={styles.icon}>
            <i className="fas fa-trash"></i>
          </div>
          <div className={styles.desc}>Delete Page</div>
        </Button>
        <Button className={`${styles.btn}`} size="middle" onClick={PopUp.show(`change-general-data-page-${id}-form`)}>
          <div className={styles.icon}>
            <i className="far fa-edit"></i>
          </div>
          <div className={styles.desc}>Change Infomation Of Page</div>
        </Button>
        <Button className={`${styles.btn}`} size="middle" onClick={PopUp.show(`duplicate-page-${id}-form`)}>
          <div className={styles.icon}>
            <i className="far fa-copy"></i>
          </div>
          <div className={styles.desc}>Duplicate This Page</div>
        </Button>
        {_renderAlertConfirm(pageName, nowIndexPage)}
      </>
    );
  };

  const _renderDeleteSwitch = () => {
    if (statusDelete === 'deleting') return <LoadingCircle />;
    if (statusDelete === 'deleteFail') return <Redirect to={{ pathname: '/error', state: messageErr }} />;
    else return null;
  };

  return (
    <>
      {_renderDeleteSwitch()}
      {_renderPopOverSetting()}
      <FormDuplicatePage pageId={id} pageNameSourcePage={pageName} pathNameSourcePage={pathName} />
      <FormChangeGeneralDataPage pageId={id} />
      {/* <TestForm pageId={id} /> */}
    </>
  );
};

export default ButtonFunc;
