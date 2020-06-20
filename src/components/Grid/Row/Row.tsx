import React, { FC } from 'react';

const Row: FC<PropsComponent> = ({ children, className, style }) => {
  return (
    <div className={`row ${className}`} style={style}>
      {children}
    </div>
  );
};
export default Row;
