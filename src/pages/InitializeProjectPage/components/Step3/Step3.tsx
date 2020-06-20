import img from 'assets/img/initializeFirebase/step3.png';
import React from 'react';
import styles from '../Step.module.scss';

const Step3 = () => {
  return (
    <div className={styles.Step3}>
      <h2 className={styles.title}>
        Create Storage
        <p>
          <a className={styles.link} href="https://www.youtube.com/watch?v=6juww5Lmvgo">
            Watch Video Below
            <i style={{ marginLeft: 5 }} className="fas fa-arrow-down" />
          </a>
        </p>
      </h2>
      <div className={styles.image}>
        <a target="blank" href="https://www.youtube.com/watch?v=6juww5Lmvgo">
          <img alt="Create Storage" src={img} />
          <i className={`${styles.icon} fas fa-play`} />
          <div className={styles.overlay} />
        </a>
      </div>
    </div>
  );
};

export default Step3;
