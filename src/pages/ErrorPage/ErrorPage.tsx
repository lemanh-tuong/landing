import Error from 'components/Error/Error';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';

const ErrorPage = () => {
  const location = useLocation();
  const message = location.state;
  return (
    <div className="Error Page">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Error message={message as string} />
    </div>
  );
};

export default ErrorPage;
