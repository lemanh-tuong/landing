import React, { CSSProperties, FC, ReactNode } from 'react';
import Container from '../Container/Container';
import styles from './Section.module.scss';

export interface SectionPatternBase {
  bgColor?: 'gradient-pink-orange' | 'gradient-orange-pink';
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}


const Section: FC<SectionPatternBase> = ({ bgColor, children, style, className }) => {
  const bgC = bgColor ? bgColor : '';
  return (
    <div className={`${styles.section} ${styles[bgC]} ${!!className && className}`} style={style}>
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
