import Error from 'components/Error/Error';
import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  return (
    <div className="Error Page">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Error />
    </div>
  );
};

export default ErrorPage;
