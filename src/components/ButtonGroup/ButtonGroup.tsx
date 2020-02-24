import React, { FC } from 'react';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps extends PropsComponent {
  scroll?: boolean;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ scroll = false, children, className, style }) => {
  const scrolling = scroll ? styles.scroll : '';

  return (
    <div className={`${styles.btnGroup} ${className} ${scrolling}`} style={style}>
      {children}
    </div>
  );
};

export default ButtonGroup;
