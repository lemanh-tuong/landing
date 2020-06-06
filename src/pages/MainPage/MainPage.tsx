import { Button } from 'antd';
import Loading from 'components/Loading/Loading';
import { statusLogin } from 'pages/LoginPage/selectors';
import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import configureApp from '../../../configureApp.json';
import RenderSection from './components/RenderSection/RenderSection';
import { listSections, messageRequestMainPageSections, nowPageId, nowPageName, statusRequestMainPageSections } from './selectors';
import thunkGetSections from './thunks/thunkGetSections';

const HomePage = () => {
  const { pathname: pathName } = useLocation();

  // Selectors
  const sections = useSelector(listSections);
  const messageRequest = useSelector(messageRequestMainPageSections);
  const statusRequest = useSelector(statusRequestMainPageSections);
  const id = useSelector(nowPageId);
  const pageName = useSelector(nowPageName);
  const isLogged = useSelector(statusLogin);

  //Dispatch
  const getData = thunkGetSections();
  //Render

  const _renderMainContentSuccess = () => {
    return (
      <>
        {sections.map(element => <Fragment key={element.sectionId}>{RenderSection(element)}</Fragment>)}
        {isLogged === 'loged' && _renderReEdit()}
      </>
    );
  };

  const _renderReEdit = () => {
    return (
      <Button shape='circle' style={{ position: 'fixed', right: 10, bottom: 10, width: 50, height: 50, background: '#3ece7e', zIndex: 10000 }}>
        <Link to={`/admin/builder?pageName=${pageName}&pathName=${pathName}&id=${id}`}>
          <i style={{ color: 'white' }} className="far fa-edit"></i>
        </Link>
      </Button>
    )
  }

  const _renderMainContentSwitch = () => {
    switch (statusRequest) {
      case 'loading':
        return <Loading />;
      case 'failure':
        return <Redirect to={{ pathname: '/error', state: messageRequest }} />;
      case 'success':
        return _renderMainContentSuccess();
      default:
        return null;
    }
  };

  useEffect(() => {
    getData({ pathName: pathName || '/' });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <div className={pathName as string}>
      <Helmet>
        <title>{configureApp.landingName}</title>
      </Helmet>
      {_renderMainContentSwitch()}
    </div>
  );
};

export default HomePage;
