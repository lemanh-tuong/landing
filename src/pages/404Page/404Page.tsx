import Error from 'components/Error/Error';
import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className="Error Page">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Error />
    </div>
  );
};

export default NotFoundPage;
