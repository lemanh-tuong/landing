import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ErrorPage.module.scss';
import {
  messageRequestImageGallery,
  messageRequestListPage,
  messageRequestNav,
  messageRequestProjectName,
  projectFirebaseId,
} from './selectors';

const ErrorPage = () => {
  const msgRequestNav = useSelector(messageRequestNav);
  const msgRequestListPage = useSelector(messageRequestListPage);
  const msgRequestProjectName = useSelector(messageRequestProjectName);
  const msgRequestImageGallery = useSelector(messageRequestImageGallery);
  const projectId = useSelector(projectFirebaseId);

  if (
    [msgRequestNav, msgRequestListPage, msgRequestProjectName].some(msg =>
      msg.includes(`Client doesn't have permission`),
    )
  )
    return (
      <div className={styles.tutorial}>
        <div className={styles.content}>
          <h1 className={styles.title}>You didn't have Realtime Database</h1>
          <p className={styles.text}>
            Start create new
            <a
              target="blank"
              className={styles.link}
              href={`https://console.firebase.google.com/u/0/project/${projectId}/database`}
            >
              realtime database
            </a>
          </p>
          <div className={styles.image}>
            <a target="blank" href="https://www.youtube.com/watch?v=V6DB6M3Nf58">
              <img
                src="https://i.ytimg.com/vi/V6DB6M3Nf58/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCUvB-E0KM_gP4wTzJjl0gqpbSD1g"
                alt="Watch Video"
              />
              <i className={`${styles.icon} fas fa-play`} />
              <div className={styles.overlay} />
            </a>
          </div>
        </div>
      </div>
    );
  if (
    msgRequestImageGallery.includes(
      'Firebase Storage: An unknown error occurred, please check the error payload for server response.',
    )
  )
    return (
      <div className={styles.tutorial}>
        <div className={styles.content}>
          <h1 className={styles.title}>You didn't have Storage</h1>
          <p className={styles.text}>
            Start create new
            <a
              target="blank"
              className={styles.link}
              href={`https://console.firebase.google.com/u/0/project/${projectId}/storage`}
            >
              Storage
            </a>
          </p>
          <div className={styles.image}>
            <a target="blank" href="https://www.youtube.com/watch?v=SpxHVrpfGgU">
              <img
                src="https://i.ytimg.com/vi/SpxHVrpfGgU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAYHZm9RA6Og6Zvg11p8Ze6Lu2ZEA"
                alt="Watch Video"
              />
              <i className={`${styles.icon} fas fa-play`} />
              <div className={styles.overlay} />
            </a>
          </div>
        </div>
      </div>
    );
  return null;
};

export default ErrorPage;
