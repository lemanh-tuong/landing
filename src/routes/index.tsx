import Nav from 'components/Nav/Nav';
import { useMount } from 'hooks/useMount';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import TestPage from 'pages/TestPage/TestPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { logoImg, messageRequestNav, navItems, statusRequestNav } from 'selectors';

const Routes = () => {
  const location = useLocation();
  // Selector
  // const tokenLogin = useSelector(token);
  const statusRequestNavBar = useSelector(statusRequestNav);
  const messageRequestNavBar = useSelector(messageRequestNav);
  const logo = useSelector(logoImg);
  const nav = useSelector(navItems);

  // Dispatch
  const getDataNav = thunkGetDataNav();

  const _renderNavBar = () => {
    return <Nav logo={logo} navItems={nav} />;
  };

  const _renderHeader = () => {
    switch (statusRequestNavBar) {
      case 'loading':
        return <div>Loading</div>;
      case 'success':
        return <div className="header">{_renderNavBar()}</div>;
      case 'failure':
        return <Redirect to={{ state: messageRequestNavBar, pathname: '/error' }} />;
    }
  };

  useMount(() => {
    getDataNav();
  });

  return (
    <>
      {!location.pathname.includes('/admin') && _renderHeader()}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path='/admin/login'>
          <LoginPage />
        </Route>
        {/* <PrivateRoute token={tokenLogin} pathRedirect='/admin/login'
          component={
            <>
              <Route exact path="/admin/builder">
                <SettingsPage />
              </Route>
              <Route exact path="/gallery">
                <ImageGalleryPage />
              </Route>
              <Route exact path="/admin/component">
                <ComponentPage />
              </Route>
            </>
          }
        /> */}
        <Route exact path="/admin/builder">
          <SettingsPage />
        </Route>
        <Route
          path="/test"
          component={TestPage}
        />
        <Route>
          <div>Something went wrong</div>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
