import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import TestPage from 'pages/TestPage/TestPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { token } from 'selectors';
const Routes = () => {
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

  const tokenLogin = useSelector(token);

  return (
    <BrowserRouter >
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
    </BrowserRouter>
  );
};

export default Routes;
