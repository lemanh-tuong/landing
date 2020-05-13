import Loading from 'components/Loading/Loading';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import RenderSection from './components/RenderSection/RenderSection';
import { listSections, messageRequestMainPageSections, statusRequestMainPageSections } from './selectors';
import thunkGetSections from './thunks/thunkGetSections';

const HomePage = () => {
  const { state } = useLocation();
  const pathName = state;

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

  useEffect(() => {
    getData({ pathName: pathName as string });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <div className={pathName as string}>
      {_renderMainContentSwitch()}
    </div>
  );
};

export default HomePage;
