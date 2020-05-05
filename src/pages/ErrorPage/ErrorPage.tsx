import Error from 'components/Error/Error';
import React from 'react';
import { useLocation } from 'react-router';

const ErrorPage = () => {
  const location = useLocation();
  const message = location.state;
  return <Error message={message as string} />;
};

export default ErrorPage;
