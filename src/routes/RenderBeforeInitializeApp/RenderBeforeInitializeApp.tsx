import CreateNewProjectPage from 'pages/CreateNewProjectPage/CreateNewProjectPage';
import InitializeProjectPage from 'pages/InitializeProjectPage/InitializeProjectPage';
import LandingPage from 'pages/LandingPage/LandingPage';
import React from 'react';
import { Route, Switch } from 'react-router';

const RenderBeforeInitializeApp = () => {
  return (
    <Switch>
      <Route path="/initializeApp">
        <InitializeProjectPage />
      </Route>
      <Route exact path="/createNewProjectName">
        <CreateNewProjectPage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default RenderBeforeInitializeApp;
