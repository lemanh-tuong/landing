import React, { FC, useEffect, useRef, useState } from 'react';
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
      rgba: ''
    };
  });

  const handleOpenBox = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChangeColor: ColorChangeHandler = (result) => {
    const resultRGBA = `rgba(${result.rgb.r}, ${result.rgb.g}, ${result.rgb.b}, ${result.rgb.a})`;
    setColor({
      hex: result.hex,
      rgba: resultRGBA
    });
  };

  const _renderColorBox = () => {
    return (
      <div className={styles.colorBox}>
        <ChromePicker color={color.rgba} onChange={handleChangeColor} />
      </div>
    );
  };

  useEffect(() => {
    if (color.rgba && color.hex) {
      onChangeRef.current?.(color);
    }
  }, [onChangeRef, color]);

  return (
    <div className={styles.colorPicker}>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.colorField}>
        <div className={styles.openButton} onClick={handleOpenBox}>
          <div className={styles.colorPreview} style={{ background: color.rgba }}></div>
        </div>
        {displayColorPicker ? _renderColorBox() : null}
      </div>
    </div>
  );
};

export default ColorPicker;
