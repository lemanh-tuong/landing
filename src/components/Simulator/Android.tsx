import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import QueryString from 'qs';
import React, { FC } from 'react';
import styles from './Simulator.module.scss';

const androidParams = (params: string) => ({
  autoplay: false,
  debug: true,
  device: 'nexus5',
  deviceColor: 'black',
  embed: true,
  launchUrl: 'exp://expo.io/@wiloke/wilcity',
  orientation: 'portrait',
  screenOnly: false,
  xDocMsg: true,
  xdocMsg: true,
  params: `{"EXKernelLaunchUrlDefaultsKey":"${params}","EXKernelDisableNuxDefaultsKey":true}`,
  scale: 70,
});

export interface AndroidParams {
  params: string;
  isBuilder?: boolean;
  onEditable?: () => void;
}

const Android: FC<AndroidParams> = ({ params, onEditable, isBuilder }) => {
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div className={styles.phone}>
            <iframe title="android-simulator" onClick={onEditable} className={`${styles.iframe} ${styles.isBuilder}`} src={`https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?${QueryString.stringify(androidParams(params))}`}></iframe>
          </div>
        }
      />
    );
  }
  return (
    <div className={styles.phone}>
      <iframe title="android-simulator" className={styles.iframe} src={`https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?${QueryString.stringify(androidParams(params))}`}></iframe>
    </div>
  );
};

export default Android;
