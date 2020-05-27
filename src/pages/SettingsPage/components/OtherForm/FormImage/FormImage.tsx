import PopUp from 'components/PopUp/PopUp';
import { sections } from 'pages/SettingsPage/selectors';
import { Option } from 'pages/SettingsPage/SettingsPage';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormImage.module.scss';

export interface FormImageProps {
  nowIndexSection: number;
  sectionId: Option['sectionId'];
}

const FormImage: FC<FormImageProps> = ({ nowIndexSection, sectionId }) => {

  //Selector
  const element = useSelector(sections)[nowIndexSection];
  // Destructoring
  const { imageSectionCol } = element;

  return (
    <PopUp title={<h3>Form Image</h3>} type='antd' id={`image-${sectionId}`} >
      <div className={styles.formContent}>
        <Link className={styles.btn} to={`/gallery?type=imageSectionCol&nowIndexSection=${nowIndexSection}&multiple=false`}>
          <div className={styles.img} style={{ backgroundImage: `url('${imageSectionCol?.imgSrc}')` }}></div>
          <i className={`far fa-image ${styles.icon}`}></i>
        </Link>
      </div>
    </PopUp>
  );
};

export default FormImage;
