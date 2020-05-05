import { sections } from 'pages/SettingsPage/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormImage.module.scss';

export interface FormImageProps {
  nowIndexSection: number;
}

const FormImage: FC<FormImageProps> = ({ nowIndexSection }) => {

  //Selector
  const element = useSelector(sections)[nowIndexSection];
  // Destructoring
  const { imageSectionCol } = element;

  return (
    <div>
      <Link className={styles.btn} to={`/gallery?type=imageSectionCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
        <img className={styles.img} src={imageSectionCol?.imgSrc} alt='Slide' style={{ width: 200, height: 200 }} />
        <i className={`far fa-image ${styles.icon}`}></i>
      </Link>
    </div>
  );
};

export default FormImage;
