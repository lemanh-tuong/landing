import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router';

export interface PrivateRouteProps {
  token: string;
  component: ReactNode;
  pathRedirect: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, component, pathRedirect }) => {
  console.log(!!token);
  return (
    <>
      {!!token ? component : <Redirect to={{ pathname: pathRedirect }} />}
    </>
  )
}

export default PrivateRoute;
