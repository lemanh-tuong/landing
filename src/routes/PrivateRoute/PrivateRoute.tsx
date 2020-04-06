import React, { FC, memo, ReactNode } from 'react';
import { Redirect } from 'react-router';

export interface PrivateRouteProps {
  token: string;
  component: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ token, component }) => {
  return (
    <>
      {!!token ? component : <Redirect to={{ pathname: '/login' }} />}
    </>
  )
}

export default memo(PrivateRoute);
