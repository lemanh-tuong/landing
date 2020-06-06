import Loading from 'components/Loading/Loading';
import Nav from 'components/Nav/Nav';
import { useMount } from 'hooks/useMount';
import ComponentPage from 'pages/ComponentPage/ComponentPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import ImageGalleryPage from 'pages/ImageGalleryPage/ImageGalleryPage';
import ListPage from 'pages/ListPage/ListPage';
import thunkGetListPageName from 'pages/ListPage/thunks/thunkGetListPageName/thunkGetListPageName';
import LoginPage from 'pages/LoginPage/LoginPage';
import { statusLogin } from 'pages/LoginPage/selectors';
import MainPage from 'pages/MainPage/MainPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import TestPage from 'pages/TestPage/TestPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { listPage, logoImg, messageRequestNav, messageRequestPageErr, navItems, statusRequestNav, statusRequestPage } from 'selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Routes = () => {
  const location = useLocation();
  // Selector
  const isLogged = useSelector(statusLogin);
  const statusRequestNavBar = useSelector(statusRequestNav);
  const messageRequestNavBar = useSelector(messageRequestNav);
  const logo = useSelector(logoImg);
  const nav = useSelector(navItems);

  const statusRequestPageName = useSelector(statusRequestPage);
  const messageRequestPageNameErr = useSelector(messageRequestPageErr);
  const generalDataPage = useSelector(listPage);
  const paths = generalDataPage.map(item => item.pathName.substring(1));

  // Dispatch
  const getDataNav = thunkGetDataNav();
  const getListPageName = thunkGetListPageName();

  const _renderNavBar = () => {
    return <Nav logo={logo} navItems={nav} />;
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

  const _renderContentSuccess = () => {
    return (
      <>
        {!location.pathname.includes('/admin') && !location.pathname.includes('/error') && !location.pathname.includes('/list') && !location.pathname.includes('/gallery') && _renderHeader()}
        <Switch>
          <Route exact path={`/(/|${paths.join('|')})/`}>
            <MainPage />
          </Route>
          <Route exact path='/admin/login'>
            <LoginPage />
          </Route>
          <Route exact path="/test" >
            <TestPage />
          </Route>
          <Route exact path='/error'>
            <ErrorPage />
          </Route>
          <PrivateRoute condition={isLogged === 'loged'} pathRedirect='/admin/login'
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
                <Route exact path="/list">
                  <ListPage />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </>
            }
          />
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </>
    );
  };

  const _renderContentSwitch = () => {
    switch (statusRequestPageName) {
      case 'loading':
        return <Loading />;
      case 'success':
        return _renderContentSuccess();
      case 'failure':
        return <Redirect to={{ state: messageRequestPageNameErr, pathname: '/error' }} />;
      default:
        return null;
    }
  };

  useMount(() => {
    getListPageName();
    getDataNav();
  });

  if (statusRequestPageName === 'failure') {
    return <Redirect to={{ pathname: '/error', state: 'Error Request Pagename' }} />;
  }

  return _renderContentSwitch();

};

export default Routes;
