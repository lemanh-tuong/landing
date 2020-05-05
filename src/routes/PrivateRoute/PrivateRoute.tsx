import React, { FC, ReactNode } from 'react';
import { Redirect, useHistory } from 'react-router';

export interface PrivateRouteProps {
  token: string;
  component: ReactNode;
  pathRedirect: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, component, pathRedirect }) => {
  const history = useHistory();

  return (
    <>
      {!!token ? component : <Redirect to={{ pathname: pathRedirect, state: history.location.pathname }} />}
    </>
  );
};

export default PrivateRoute;
