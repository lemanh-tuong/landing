import Nav from 'components/Nav/Nav';
import NavMobile from 'components/NavMobile/NavMobile';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
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
        <Nav onClick={handleShow} active={active} />
        <NavMobile show={show} />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
