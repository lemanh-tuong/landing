import { Input } from 'antd';
import Col from 'components/Grid/Column/Column';
import Container from 'components/Grid/Container/Container';
import Row from 'components/Grid/Row/Row';
import Loading from 'components/Loading/Loading';
import LoadingCircle from 'components/LoadingCircle/LoadingCircle';
import PopOver from 'components/PopOver/PopOver';
import PopUp from 'components/PopUp/PopUp';
import { useMount } from 'hooks/useMount';
import { statusCreatePage } from 'pages/SettingsPage/selectors';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ButtonFunc from './components/ButtonFunc/ButtonFunc';
import styles from './ListPage.module.scss';
import { PageGeneralData } from './ListPageType/type';
import { listPage, message, statusRequest } from './selectors';
import thunkAddNewPage from './thunks/thunkAddNewPage/thunkAddNewPage';
import thunkGetListPageName from './thunks/thunkGetListPageName/thunkGetListPageName';

const ListPage = () => {

  const [pathName, setPathName] = useState('/');
  const [pageName, setPageName] = useState('');
  const [error, setError] = useState('');
  const [validate, setValidate] = useState('');

  const handleError = (value: string) => {
    const regex = /\s/;
    setValidate(() => {
      if (value.length === 0) return 'Required'
      if (regex && value.match(regex)) return 'Pattern Error'
      return ''
    })
  }

  const handleChangePageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };
  const handleChangePathName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError(e.target.value);
    if (!error) {
      setPathName(e.target.value);
    }
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
    if (!isExisted && !validate) {
      addNewPage({ pageName, pathName, id: id });
      const interval = setInterval(() => {
        if (statusCreate === 'created') {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (error) {
        setError('Page Name or Path Name existed');
      } else {
        setError('Path Name Validate Error');
      }
    }
  };

  useMount(() => {
    if (!pages) {
      getListPageName();
    }
  });

  const _renderPage = ({ id, pageName, pathName }: PageGeneralData, index: number) => {
    return (
      <Col cols={[12, 4, 3]} key={uuidv4()}>
        <PopOver content={<ButtonFunc id={id} pageName={pageName} pathName={pathName} nowIndexPage={index} />} id={id}>
          <Link className={styles.link} to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`} >
            <div className={`${styles.page}`}>
              {pageName}
            </div>
          </Link>
        </PopOver>
      </Col>
    );
  };

  const _renderPages = () => {
    return (
      <Container>
        <Row>
          {pages.map((page, index) => _renderPage(page, index))}
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

  const _renderFormSetting = () => {
    return (
      <PopUp id="add-page-form" title={<h3>Form Add Page</h3>} type='antd' onCancel={PopUp.hide('add-page-form')} onOk={handleAddNewPage}>
        <div>
          <span>Path Name</span>
          <Input style={{ margin: '10px 0' }} defaultValue="/" required onChange={handleChangePathName} />
        </div>
        <div>
          <span>Page Name</span>
          <Input style={{ margin: '10px 0' }} required onChange={handleChangePageName} />
        </div>
        {validate ? <p style={{ fontSize: 'inherit', color: 'red' }}>{validate}</p> : null}
      </PopUp>
    )
  }

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
      {_renderFormSetting()}
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
