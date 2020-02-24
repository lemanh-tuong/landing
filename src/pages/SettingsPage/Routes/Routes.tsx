import Section1 from 'components/Section1/Section1';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="section1" exact component={Section1} />
      </Switch>
    </BrowserRouter>
  );
};
