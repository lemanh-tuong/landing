import PopOverText from 'componentBuilder/PopOverText/PopOverText';
import QueryString from 'qs';
import React, { FC } from 'react';
import styles from './Simulator.module.scss';

const iosParams = (params: string) => ({
  autoplay: true,
  debug: true,
  device: 'iphone6s',
  deviceColor: 'white',
  embed: true,
  orientation: 'portrait',
  screenOnly: false,
  xDocMsg: true,
  xdocMsg: true,
  params: `{"EXKernelLaunchUrlDefaultsKey":"${params}","EXKernelDisableNuxDefaultsKey":true}`,
  scale: 70,
  osVersion: 11.4,
});

export interface IphoneParams {
  params: string;
  isBuilder?: boolean;
  onEditable?: () => void;
}

const Iphone: FC<IphoneParams> = ({ params, isBuilder, onEditable }) => {
  if (isBuilder) {
    return (
      <PopOverText
        onEdit={onEditable}
        component={
          <div className={styles.phone}>
            <iframe title="iphone-simulator" onClick={onEditable} className={`${styles.iframe} ${styles.isBuilder}`} src={`https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?${QueryString.stringify(iosParams(params))}`}></iframe>
          </div>
        }
      />
    );
  }
  return <div className={styles.phone}>
    <iframe title="iphone-simulator" className={styles.iframe} src={`https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?${QueryString.stringify(iosParams(params))}`}></iframe>;
  </div>
};

export default Iphone;
