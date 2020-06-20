import React, { FC } from 'react';
import { align } from 'types/types';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps extends PropsComponent {
  scroll?: boolean;
  align?: align;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ scroll = false, align = 'center', children, className, style }) => {
  return (
    <div className={`${styles.btnGroup} ${className} ${scroll ? styles.scroll : ''} ${styles[align]}`} style={style}>
      {children}
    </div>
  );
};

export default ButtonGroup;
