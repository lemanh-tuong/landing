import { useMount } from 'hooks/useMount';
import CreateNewProjectPage from 'pages/CreateNewProjectPage/CreateNewProjectPage';
import InitializeProjectPage from 'pages/InitializeProjectPage/InitializeProjectPage';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router';

const RenderBeforeInitializeApp = () => {
  const history = useHistory();

  useMount(() => {
    history.push('/initializeApp');
  });

  return (
    <Switch>
      <Route path="/initializeApp">
        <InitializeProjectPage />
      </Route>
      <Route exact path="/createNewProjectName">
        <CreateNewProjectPage />
      </Route>
    </Switch>
  );
}

export default RenderBeforeInitializeApp;
