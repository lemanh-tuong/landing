import styles from 'AppStore-GoogleStore.module.scss';
import appStoreImg from 'assets/img/web_icons/app-store.png';
import ggStoreImg from 'assets/img/web_icons/google-play.png';
import React, { CSSProperties, FC } from 'react';

interface AppStoreProps {
  typeStore: 'ios' | 'android';
  href: string;
  style: CSSProperties;
  className: string;
}

const AppStore: FC<AppStoreProps> = ({ typeStore, href, className, style }) => {
  const takeTypeStore = typeStore === 'ios' ? appStoreImg : ggStoreImg;

  return (
    <a href={href || '###'} target="_blank" rel="noopener noreferrer" className={`${className} ${styles.store}`} style={style}>
      <img src={takeTypeStore} alt={typeStore} className={styles.storeImg} />
    </a>
  );
};

export default AppStore;
