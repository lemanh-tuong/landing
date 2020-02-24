import React, { CSSProperties, FC } from 'react';
import styles from './SideBar.module.scss';

export interface SideBarProps {
  className?: string;
  style?: CSSProperties;
}

const SideBar: FC<SideBarProps> = ({ className, style }) => {
  return (
    <div className={`${styles.sideBar} ${className}`} style={style}>
      <ul className={styles.nav}>
        <li className={styles.link}>
          A
        </li>
        <li className={styles.link}>
          B
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
