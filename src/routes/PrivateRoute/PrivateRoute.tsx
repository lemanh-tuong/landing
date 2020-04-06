import React, { FC, memo, ReactNode } from 'react';
import { Redirect, Route } from 'react-router';

export interface PrivateRouteProps {
  token: string;
  component: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, component }) => {
  return (
    <Route>
      {!!token ? component : <Redirect to={{ pathname: '/login' }} />}
    </Route>
  )
}

export default memo(PrivateRoute);
