import React, { CSSProperties, FC } from 'react';
import { borderRadius, size } from 'types/types';
import styles from './Icon.module.scss';

export interface IconOption {
  sizeIcon?: size;
  bgColorIcon?: 'transparent' | 'gradient-pink-orange';
  borderRadiusIcon?: borderRadius;
  classNameIcon?: string;
  styleIcon?: CSSProperties;
  animationIcon?: 'scale' | 'opacity';
}

export interface IconProps extends IconOption {
  iconImg?: string;
  fontAwesomeClass?: string;
  onClick?: () => void;
  darkMode?: boolean;
}





const Icon: FC<IconProps> = ({ iconImg, fontAwesomeClass, bgColorIcon, sizeIcon, onClick, animationIcon, darkMode, classNameIcon, styleIcon, children }) => {
  const dark = darkMode ? styles.dark : '';
  const hasEventClick: CSSProperties = onClick ? { cursor: 'pointer' } : {};
  const size = !!sizeIcon ? sizeIcon : '';
  const bgC = !!bgColorIcon ? bgColorIcon : '';
  const animated = !!animationIcon ? animationIcon : '';
  return (
    <div className={`${styles.icon} ${styles[size]} ${styles[bgC]} ${classNameIcon} ${darkMode} ${styles[animated]} ${dark}`} onClick={onClick} style={{ ...hasEventClick, ...styleIcon }}>
      {iconImg && <img src={iconImg} alt="" />}
      {fontAwesomeClass && <i className={fontAwesomeClass}></i>}
      {children}
    </div>
  );
};

export default Icon;
