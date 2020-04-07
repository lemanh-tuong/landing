import { Dropdown as DropdownAntd } from 'antd';
import 'antd/dist/antd.css';
import React, { CSSProperties, FC } from 'react';
import styles from './Dropdown.module.scss';

export interface DropdownProps {
  style?: CSSProperties;
  className?: string;
  menu: JSX.Element;
}

const Dropdown: FC<DropdownProps> = ({ menu, style, className, children }) => {
  return (
    <DropdownAntd overlay={menu} trigger={['contextMenu']}>
      <div
        className={`${styles.contextMenu} ${className}`}
        style={{
          ...style,
        }}
      >
        {children}
      </div>
    </DropdownAntd>
  )
}

export default Dropdown
