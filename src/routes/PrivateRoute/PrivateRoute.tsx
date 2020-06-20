import React, { FC, ReactNode } from 'react';
import { Redirect, useHistory } from 'react-router';

export interface PrivateRouteProps {
  condition: boolean;
  component: ReactNode;
  pathRedirect: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ condition, component, pathRedirect }) => {
  const history = useHistory();

  return <>{condition ? component : <Redirect to={{ pathname: pathRedirect, state: history.location.pathname }} />}</>;
};

export default PrivateRoute;
