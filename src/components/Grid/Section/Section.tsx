import React, { CSSProperties, FC, ReactNode } from 'react';
import Container from '../Container/Container';
import styles from './Section.module.scss';

export interface SectionPatternBase {
  backgroundImage?: string;
  backgroundColor?:
    | 'gradient-pink-orange'
    | 'gradient-orange-pink'
    | 'gradient-purple-blue'
    | 'white-1'
    | 'white-2'
    | 'white-3'
    | 'primary'
    | 'secondary'
    | string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  animation?: boolean;
  positionAnimation?: 'left' | 'right';
}

const Section: FC<SectionPatternBase> = ({ backgroundColor, children, style, className, animation, positionAnimation = 'left', backgroundImage }) => {
  const backgroundProperty = backgroundImage ? `url('${backgroundImage}')` : backgroundColor ? `${backgroundColor}` : '';
  const css: CSSProperties = backgroundProperty
    ? {
        background: backgroundProperty,
      }
    : {};
  return (
    <div className={`${styles.section} ${!!className && className}`} style={{ ...style, ...css }}>
      {animation ? <div className={`${styles.square} ${styles[positionAnimation]}`}></div> : null}
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
