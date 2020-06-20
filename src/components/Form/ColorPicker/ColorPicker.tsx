import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { ChromePicker, ColorChangeHandler } from 'react-color';
import styles from './ColorPicker.module.scss';

export interface ColorPickerProps {
  onChange: (result: ColorPickState) => void;
  defaultColor?: string;
  label: string;
}

export interface ColorPickState {
  hex: string;
  rgba: string;
}

const ColorPicker: FC<ColorPickerProps> = ({ defaultColor = '#22194D', label, onChange }) => {
  const onChangeRef = useRef(onChange);

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [color, setColor] = useState<ColorPickState>(() => {
    if (defaultColor?.includes('#')) {
      return {
        hex: defaultColor,
        rgba: '',
      };
    }

    if (defaultColor?.includes('rgb')) {
      return {
        hex: '',
        rgba: defaultColor,
      };
    }

    return {
      hex: '',
      rgba: '',
    };
  });

  const handleOpenBox = useCallback(
    e => {
      setDisplayColorPicker(!displayColorPicker);
    },
    [displayColorPicker],
  );

  const handleChangeColor: ColorChangeHandler = result => {
    const resultRGBA = `rgba(${result.rgb.r}, ${result.rgb.g}, ${result.rgb.b}, ${result.rgb.a})`;
    setIsChanging(true);
    setColor({
      hex: result.hex,
      rgba: resultRGBA,
    });
    onChangeRef.current?.({
      hex: result.hex,
      rgba: resultRGBA,
    });
  };

  const handleChangeComplete = () => {
    setIsChanging(false);
  };

  const _renderColorBox = () => {
    return (
      <div className={styles.colorBox}>
        <ChromePicker color={color.rgba} onChangeComplete={handleChangeComplete} onChange={handleChangeColor} />
      </div>
    );
  };

  useEffect(() => {
    if (displayColorPicker && !isChanging) {
      window.addEventListener('click', handleOpenBox);
    } else {
      window.removeEventListener('click', handleOpenBox);
    }
    return () => {
      window.removeEventListener('click', handleOpenBox);
    };
  }, [displayColorPicker, handleOpenBox, isChanging]);

  return (
    <div className={styles.colorPicker}>
      <div className={styles.label}>{label}</div>
      <div className={styles.colorField}>
        <div className={styles.openButton} onClick={handleOpenBox}>
          <div className={styles.colorPreview} style={{ background: color.rgba }}></div>
        </div>
        {displayColorPicker ? _renderColorBox() : null}
      </div>
    </div>
  );
};

export default memo(ColorPicker);
