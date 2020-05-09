import Image from 'components/Image/Image';
import { logoImg } from 'pages/SettingsPage/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FormEditLogo.module.scss';

const FormEditLogo = () => {

  const logo = useSelector(logoImg);

  return (
    <div className="Form Edit Logo">
      <h1>Form Edit Logo</h1>
      <div className={styles.editLogo}>
        <Link to='/gallery?type=logoImg&multiple=false'>
          <Image type='tagImg' imgSrc={logo.imgSrc} />
        </Link>
      </div>
    </div>
  );
};

export default FormEditLogo;
