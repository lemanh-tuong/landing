import Button from 'components/Button/Button';
import React, { FC, useRef, useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import Input from '../Input/Input';
import styles from './SettingsBox.module.scss';


export interface SettingsBoxProps {
  mainTitle?: string;
  text?: string;
  onSubmit: () => void;
}

const SettingsBox: FC<SettingsBoxProps> = ({ mainTitle, text, onSubmit }) => {
  const [hasSlide, setHasSlide] = useState(false);

  const mainTitleInput = useRef<HTMLInputElement>(null);
  const textInput = useRef<any>(null);

  const _handleCheckBox = () => {
    setHasSlide(!hasSlide);
  };

  // const _handleSubmit = (arg: { mainTitle: string; text: string; hasSlide: boolean }) => {
  //   return () => {
  //     console.log(arg);
  //   };
  // };

  const _handleSubmit = () => {
    console.log(mainTitleInput);
  };

  return (
    <div className={styles.settingsBox}>
      <Input ref={mainTitleInput} value={mainTitle} />
      <Input ref={textInput} value={text} />
      <CheckBox checked={hasSlide} onEvent={_handleCheckBox} />
      <Button color='border' onClick={onSubmit}>
        Done!
      </Button>
    </div>
  );
};

export default SettingsBox;
