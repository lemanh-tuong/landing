import { authentication } from 'firebase/authentication/authentication';
import { useMount } from 'hooks/useMount';
import HomePage from 'pages/HomePage/HomePage';
import ImageGalleryPage from 'pages/ImageGalleryPage/ImageGalleryPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const Routes = () => {
  const [token, setToken] = useState('');
  // const [show, setShow] = useState(false);
  // const [active, setActive] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  // const handleClose = () => {
  //   if (show) {
  //     setShow(false);
  //   }
  // };

  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener('click', handleClose);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('click', handleClose);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });
  const handleIsSignedIn = () => {
    authentication.onAuthStateChanged(authUser => {
      authUser?.getIdToken().then((token) => {
        setToken(token)
      })
    })
  }

  useMount(() => {
    handleIsSignedIn()
  })

  return (
    <BrowserRouter >
      <header>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path="/gallery">
            <ImageGalleryPage />
          </Route>
          {/* <Route exact path="/settings" strict>
            <SettingsPage />
          </Route> */}
          <PrivateRoute
            token={token}
            component={<Route exact path="/settings" strict>
              <SettingsPage />
            </Route>}
          />
          <Route>
            <div>Something went wrong</div>
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
