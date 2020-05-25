import React, { FC } from 'react';
import styles from './TextBlock.module.scss';
const TextBlock: FC<PropsComponent> = ({ children, className, style }) => {
  return (
    <div className={`${styles.textBlock} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default TextBlock;
