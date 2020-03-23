import React, { CSSProperties, FC, ReactNode } from 'react';
import Container from '../Container/Container';
import styles from './Section.module.scss';

export interface SectionPatternBase {
  backgroundImage?: string;
  backgroundColor?: 'gradient-pink-orange' | 'gradient-orange-pink';
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}


const Section: FC<SectionPatternBase> = ({ backgroundColor, children, style, className }) => {
  const bgColor = backgroundColor ? backgroundColor : '';
  return (
    <div className={`${styles.section} ${styles[bgColor]} ${!!className && className}`} style={style}>
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
