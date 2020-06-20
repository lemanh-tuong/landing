import React from 'react';
import img from '../../../../assets/img/initializeFirebase/step1.png';
import styles from '../Step.module.scss';

const Step1 = () => {
  return (
    <div className={styles.Step1}>
      <h2 className={styles.title}>
        Create a
        <a style={{ margin: '0 10px' }} target="blank" href="https://firebase.google.com/" className={styles.link}>
          Firebase
        </a>
        Project
        <p>
          You need create a firebase project
          <a target="blank" style={{ marginLeft: 5 }} className={styles.link} href="https://www.youtube.com/watch?v=6juww5Lmvgo">
            Watch Video Below
            <i style={{ marginLeft: 5 }} className="fas fa-arrow-down" />
          </a>
        </p>
      </h2>
      <div className={styles.image}>
        <a target="blank" href="https://www.youtube.com/watch?v=6juww5Lmvgo">
          <img alt="Create Firebase" src={img} />
          <i className={`${styles.icon} fas fa-play`} />
          <div className={styles.overlay} />
        </a>
      </div>
    </div>
  );
};

export default Step1;
