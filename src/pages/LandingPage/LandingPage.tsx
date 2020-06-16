import Button from 'components/Button/Button';
import Section from 'components/Grid/Section/Section';
import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <Section style={{ overflow: 'initial' }} animation positionAnimation='left'>
      <div className={styles.LandingPage}>
        <div className={styles.header}>
          <MainTitle styleMainTitle={{ fontWeight: 'bold', marginBottom: 0 }} mainTitle='Simplified website builder' alignMainTitle='center' fontSizeMainTitle='lg' />
          <MainTitle mainTitle='in your browser' alignMainTitle='center' fontSizeMainTitle='md' />
        </div>
        <div className={styles.body}>
          <div className={styles.desc}>
            <p>Simplicity is at the core of our online website builder.</p>
            <p>Create functional websites and landing pages with no</p>
            <p>programming skills right from your browser.</p>
          </div>
        </div>
        <div className={styles.footter}>
          <Button href="/initializeApp" target='default' type='gradient'>
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default LandingPage;
