import React, { FC, memo } from 'react';
import styles from './Error.module.scss';

export interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={styles.notFoundComponent}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Oops! Page not found</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <p>{JSON.stringify(message)}</p>
      </div>
    </div>

  );
};

export default memo(Error);
