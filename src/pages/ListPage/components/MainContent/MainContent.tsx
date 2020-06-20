import { Popover } from 'antd';
import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Loading from 'components/Loading/Loading';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { projectName } from 'pages/MainPage/selectors';
import FormAddNewPage from 'pages/SettingsPage/components/OtherForm/FormAddNewPage/FormAddNewPage';
import { statusCreatePage } from 'pages/SettingsPage/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { listPage, message, statusRequest } from '../../selectors';
import ButtonFunc from '../ButtonFunc/ButtonFunc';
import styles from './MainContent.module.scss';

const MainContent = () => {
  //Selectors
  const status = useSelector(statusRequest);
  const statusCreate = useSelector(statusCreatePage);
  const pages = useSelector(listPage);
  const messageRequestErr = useSelector(message);
  const nowProjectName = useSelector(projectName);

  const _renderPage = ({ id, pageName, pathName, isHome }: PageGeneralData, index: number) => {
    return (
      <Col cols={[12, 4, 3]} key={uuidv4()}>
        <Popover content={<ButtonFunc id={id} pageName={pageName} pathName={pathName} nowIndexPage={index} />} id={id}>
          <Link className={styles.link} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`}>
            <div className={`${styles.page}`}>
              {isHome ? <i className={`${styles.homeIcon} fas fa-home`} /> : null}
              {pageName}
            </div>
          </Link>
        </Popover>
      </Col>
    );
  };

  const _renderPages = () => {
    return (
      <div style={{ marginBottom: 15 }}>
        <h3 className={styles.title}>All Pages</h3>
        <Row>
          {pages.map((page, index) => _renderPage(page, index))}
          <Col cols={[12, 4, 3]} key={uuidv4()}>
            <Popover content="Add New Page">
              <div className={`${styles.addPage} ${styles.page}`} onClick={PopUp.show('add-page-form')}>
                {pages.length > 0 ? <i className="fas fa-plus" /> : 'Add New Page'}
              </div>
            </Popover>
          </Col>
        </Row>
        {_renderWarning()}
      </div>
    );
  };

  const _renderCreateSwitch = () => {
    if (statusCreate === 'creating') return <LoadingCircle />;
    if (statusCreate === 'createFail') return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
  };

  const _renderFormSetting = (suggestHomePage: boolean) => {
    return <FormAddNewPage suggestHomePage={suggestHomePage} />;
  };

  const _renderWarning = () => {
    if (pages.findIndex(page => page.isHome) < 0) {
      return <div className={styles.warningText}>You Need HomePage</div>;
    }
    return null;
  };

  const _renderProject = () => {
    return (
      <>
        <h3 className={styles.title}>Project Name: {nowProjectName}</h3>
        <Link to="/admin/projectName" className={styles.link}>
          Change Project Name
        </Link>
      </>
    );
  };

  const _renderSuccess = () => {
    return (
      <div className={styles.content}>
        {_renderPages()}
        {_renderProject()}
        {_renderCreateSwitch()}
        {_renderFormSetting(pages.findIndex(page => page.isHome) < 0)}
      </div>
    );
  };

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
      case 'success':
        return <div className={styles.MainContent}>{_renderSuccess()}</div>;
      default:
        return null;
    }
  };

  return _renderSwitch();
};

export default MainContent;
