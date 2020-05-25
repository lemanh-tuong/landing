import { sections } from 'pages/SettingsPage/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormIcon.module.scss';

export interface FormIconProps {
  nowIndexSection: number;
}

const FormIcon: FC<FormIconProps> = ({ nowIndexSection }) => {

  //Selector
  const element = useSelector(sections)[nowIndexSection];
  // Destructoring
  const { iconImg } = element;

  return (
    <div>
      <Link className={styles.btn} to={`/gallery?type=iconImgInCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
        <img className={styles.img} src={iconImg?.imgSrc} alt='Slide' style={{ width: 200, height: 200 }} />
        <i className={`far fa-image ${styles.icon}`}></i>
      </Link>
    </div>
  );
};

export default FormIcon;
