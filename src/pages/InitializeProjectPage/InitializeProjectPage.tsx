import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import React, { useState } from 'react';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import Step5 from './components/Step5/Step5';
import Step6 from './components/Step6/Step6';
import styles from './InitializeProjectPage.module.scss';

const InitializeProjectPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    setStep(step - 1);
  };

  const _renderSwitch = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return null;
    }
  };
  // Dispatch
  return (
    <div className={styles.InitializeProjectPage} style={{ padding: 30 }}>
      <div className={styles.content}>
        <div className={styles.header}>
          Your Completed: <span className={styles.highlightText}>{step - 1}</span> / 6 Steps
        </div>
        <div className={styles.body}>{_renderSwitch()}</div>
        <div className={styles.footter}>
          <ButtonGroup align="right" scroll>
            {step > 1 && (
              <button className={`${styles.button} ${styles.backButton}`} onClick={handleBackStep}>
                {' '}
                Back{' '}
              </button>
            )}
            {step < 6 && (
              <button className={`${styles.button} ${styles.nextButton}`} onClick={handleNextStep}>
                {' '}
                Next{' '}
              </button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default InitializeProjectPage;
