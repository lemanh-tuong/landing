import img from 'assets/img/initializeFirebase/step1.png';
import Col from 'components/Grid/Column/Column';
import Container from 'components/Grid/Container/Container';
import Row from 'components/Grid/Row/Row';
import React from 'react';
import Step6 from './components/Step6/Step6';
import styles from './InitializeProjectPage.module.scss';

const InitializeProjectPage = () => {
  // Dispatch
  return (
    <div className={styles.InitializeProjectPage} style={{ padding: 30 }}>
      <Container>
        <Row>
          <Col cols={[12, 6, 6]} className={styles.stepCol}>
            <Step6 />
          </Col>
          <Col cols={[12, 6, 6]} className={styles.tutorialCol}>
            <div className={styles.colCenter}>
              <h2 className={styles.title}>
                Create a
                <a
                  style={{ margin: '0 10px' }}
                  target="blank"
                  href="https://firebase.google.com/"
                  className={styles.link}
                >
                  Firebase
                </a>
                Project
                <p>
                  You need create a firebase project
                  <a
                    target="blank"
                    style={{ marginLeft: 5 }}
                    className={styles.link}
                    href="https://www.youtube.com/watch?v=6juww5Lmvgo"
                  >
                    Watch Video Below
                    <i style={{ marginLeft: 5 }} className="fas fa-arrow-down" />
                  </a>
                </p>
              </h2>
              <div className={styles.videoTutorial}>
                <a target="blank" href="https://www.youtube.com/watch?v=6juww5Lmvgo">
                  <img alt="Take your firebase config" src={img} />
                  <i className={`${styles.icon} fas fa-play`} />
                  <div className={styles.overlay} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InitializeProjectPage;
