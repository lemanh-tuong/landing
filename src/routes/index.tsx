import Loading from 'components/Loading/Loading';
import Nav from 'components/Nav/Nav';
import { useMount } from 'hooks/useMount';
import ComponentPage from 'pages/ComponentPage/ComponentPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from 'pages/HomePage/HomePage';
import ImageGalleryPage from 'pages/ImageGalleryPage/ImageGalleryPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import TestPage from 'pages/TestPage/TestPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { buttons, logoImg, messageRequestNav, navItems, statusRequestNav, token } from 'selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Routes = () => {
  const location = useLocation();
  // Selector
  const tokenLogin = useSelector(token);
  const statusRequestNavBar = useSelector(statusRequestNav);
  const messageRequestNavBar = useSelector(messageRequestNav);
  const logo = useSelector(logoImg);
  const nav = useSelector(navItems);
  const buttonGroupData = useSelector(buttons);

  // Dispatch
  const getDataNav = thunkGetDataNav();

  const _renderNavBar = () => {
    return <Nav buttons={buttonGroupData} logo={logo} navItems={nav} />;
  };

  const _renderHeader = () => {
    switch (statusRequestNavBar) {
      case 'loading':
        return <Loading />;
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
    <div className="page">
      {!location.pathname.includes('/admin') && !location.pathname.includes('/gallery') && _renderHeader()}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path='/admin/login'>
          <LoginPage />
        </Route>
        <PrivateRoute token={tokenLogin} pathRedirect='/admin/login'
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
        />
        {/* <Route exact path="/admin/builder">
          <SettingsPage />
        </Route> */}
        <Route exact path="/test" >
          <TestPage />
        </Route>
        <Route path='/error'>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
