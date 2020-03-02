import React, { FC } from 'react';
import { align } from 'types/types';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps extends PropsComponent {
  scroll?: boolean;
  align?: align;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ scroll = false, align, children, className, style }) => {
  const scrolling = scroll ? styles.scroll : '';
  const alignBtn = align ? styles[align] : '';
  return (
    <div className={`${styles.btnGroup} ${className} ${scrolling} ${styles[alignBtn]}`} style={style}>
      {children}
    </div>
  );
};

export default ButtonGroup;
