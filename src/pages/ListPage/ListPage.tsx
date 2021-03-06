import { Input } from 'antd';
import Col from 'components/Grid/Column/Column';
import Container from 'components/Grid/Container/Container';
import Row from 'components/Grid/Row/Row';
import Loading from 'components/Loading/Loading';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import { statusCreatePage } from 'pages/SettingsPage/selectors';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './ListPage.module.scss';
import { PageGeneralData } from './ListPageType/type';
import { listPage, message, statusRequest } from './selectors';
import thunkAddNewPage from './thunks/thunkAddNewPage/thunkAddNewPage';
import thunkGetListPageName from './thunks/thunkGetListPageName/thunkGetListPageName';

const ListPage = () => {

  const [pathName, setPathName] = useState('');
  const [pageName, setPageName] = useState('');

  const [error, setError] = useState('');
  const handleChangePathName = (e: ChangeEvent<HTMLInputElement>) => {
    setPathName(e.target.value);
  };
  const handleChangePageName = (e: ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };

  //Selectors
  const status = useSelector(statusRequest);
  const statusCreate = useSelector(statusCreatePage);
  const pages = useSelector(listPage);
  const messageRequestErr = useSelector(message);

  const getListPageName = thunkGetListPageName();
  const addNewPage = thunkAddNewPage();

  const handleAddNewPage = () => {
    const id = uuidv4();
    const isExisted = pages.find(item => item.pageName === pageName || item.pathName === pathName);
    if (!isExisted) {
      addNewPage({ pageName, pathName, id: id });
      const interval = setInterval(() => {
        if (statusCreate === 'created') {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setError('Page Name or Path Name existed');
    }
  };

  useMount(() => {
    if (!pages) {
      getListPageName();
    }
  });

  const _renderPage = ({ id, pageName, pathName }: PageGeneralData) => {
    return (
      <Col cols={[12, 4, 3]} key={uuidv4()}>
        <Link className={styles.link} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} >
          <div className={styles.page}>
            {pageName}
          </div>
        </Link>
      </Col>
    );
  };

  const _renderPages = () => {
    return (
      <Container>
        <Row>
          {pages.map(page => _renderPage(page))}
          <Col cols={[12, 4, 3]}>
            <div className={styles.addPage} onClick={PopUp.show('add-page-form')}> Add Page </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const _renderCreateSwitch = () => {
    if (statusCreate === 'creating') return <LoadingCircle />;
    if (statusCreate === 'createFail') return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
  };

  useEffect(() => {
    setTimeout(() => {
      if (error) setError('');
    }, 2000);
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
          zIndex: 111111,
        }}>
        {error}
      </div>;
    }
    return null;
  };

  const _renderSuccess = () => {
    return <>
      <Helmet>
        <title>List Page</title>
      </Helmet>
      {_renderValidateError()}
      {_renderPages()}
      {_renderCreateSwitch()}
      <PopUp id="add-page-form" type='antd' onCancel={PopUp.hide('add-page-form')} onOk={handleAddNewPage}>
        <Input defaultValue="/" required addonBefore="Path Name" onChange={handleChangePathName} />
        <Input required addonBefore="Page Name" onChange={handleChangePageName} />
      </PopUp>
    </>;
  };

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageRequestErr }} />;
      case 'success':
        return <div className={styles.ListPage}>{_renderSuccess()}</div>;
      default:
        return null;
    }
  };

  return _renderSwitch();
};

export default ListPage;
