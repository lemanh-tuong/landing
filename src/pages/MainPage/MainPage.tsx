import Loading from 'components/Loading/Loading';
import { useMount } from 'hooks/useMount';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import RenderSection from './components/RenderSection/RenderSection';
import { listSections, messageRequestMainPageSections, statusRequestMainPageSections } from './selectors';
import thunkGetSections from './thunks/thunkGetSections';


const HomePage = () => {
  const [nowPage, setNowPage] = useState('');
  const location = useLocation();
  const pageName = location.pathname.substring(1) || 'HomePage';
  console.log(pageName);
  // Selectors
  const sections = useSelector(listSections);
  const messageRequest = useSelector(messageRequestMainPageSections);
  const statusRequest = useSelector(statusRequestMainPageSections);

  //Dispatch
  const getData = thunkGetSections();
  //Render

  const _renderMainContentSuccess = () => {
    return (
      <>
        {sections.map(element => <Fragment key={element.sectionId}>{RenderSection(element)}</Fragment>)}
      </>
    );
  };

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

  useMount(() => {
    getData({ pageName: pageName });
  });

  useEffect(() => {
    setNowPage(pageName);
  }, [pageName]);

  return (
    <div className={pageName}>
      {_renderMainContentSwitch()}
    </div>
  );
};

export default HomePage;
