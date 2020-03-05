import HomePage from 'pages/HomePage/HomePage';
import PreviewPage from 'pages/PreviewPage/PreviewPage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('click', handleClose);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('click', handleClose);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <BrowserRouter>
      <header>
      </header>
      <main>
        <Switch>
          <Route path="/preview" exact>
            <PreviewPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
