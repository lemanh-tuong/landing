import { useMount } from 'hooks/useMount';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import RenderSection from './components/RenderSection/RenderSection';
import { homePageSections, messageRequestHomePageSections, statusRequestHomePageSections } from './selectors';
import thunkGetSections from './thunks/thunkGetSections';


const HomePage = () => {

  // Selectors
  const sections = useSelector(homePageSections);
  const statusRequest = useSelector(statusRequestHomePageSections);
  const messageRequest = useSelector(messageRequestHomePageSections);

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
        return <div>Loading</div>;
      case 'failure':
        return <div>{messageRequest}</div>;
      case 'success':
        return _renderMainContentSuccess();
      default:
        return null;
    }
  };

  useMount(() => {
    getData({ pageName: 'HomePage' });
  });

  return (
    <div className="MainTitle">
      {_renderMainContentSwitch()}
    </div>
  );
};

export default HomePage;
