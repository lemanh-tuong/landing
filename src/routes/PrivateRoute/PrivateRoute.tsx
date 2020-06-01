import React, { FC, ReactNode } from 'react';
import { Redirect, useHistory } from 'react-router';

export interface PrivateRouteProps {
  token: string;
  component: ReactNode;
  pathRedirect: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, component, pathRedirect }) => {
  const history = useHistory();
  const tokenCookie = document.cookie.split(';').find(query => query.includes('token'))?.split('=')[1];

  return (
    <>
      {token === tokenCookie ? component : <Redirect to={{ pathname: pathRedirect, state: history.location.pathname }} />}
    </>
  );
};

export default PrivateRoute;
