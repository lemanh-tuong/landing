import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import styles from './ColorPickerGradient.module.scss';

export interface ColorPickerGradientProps {
  onChange?: (result: string) => void;
  defaultColorLeft?: string;
  defaultColorRight?: string;
  fieldName: string;
  type?: 'linear-gradient' | 'repeating-linear-gradient';
  style?: CSSProperties;
  className?: string;
}

const ColorPickerGradient: FC<ColorPickerGradientProps> = ({
  defaultColorLeft = 'rgb(240, 98, 146)', defaultColorRight = 'rgb(249, 120, 95)',
  type = 'linear-gradient',
  style, className,
  onChange }) => {
  const onChangeRef = useRef(onChange);
  const [displayColorBox, setDisplayColorBox] = useState({ left: false, right: false });
  const [color, setColor] = useState({ left: defaultColorLeft, right: defaultColorRight });

  const handleChangeColor = (side: 'left' | 'right') => {
    return (result: ColorResult) => {
      const resultRGBA = `rgba(${result.rgb.r}, ${result.rgb.g}, ${result.rgb.b}, ${result.rgb.a})`;
      setColor(state => ({
        ...state,
        [side]: resultRGBA
      }));
    };
  };

  const handleOpen = (side: 'left' | 'right') => {
    return () => {
      setDisplayColorBox(state => ({
        ...state,
        [side]: !state[side]
      }));
    };
  };

  const _renderColorBox = (side: 'left' | 'right') => {
    return (
      <div className={`${styles.colorBox} ${styles[side]}`}>
        <ChromePicker color={color[side]} onChange={handleChangeColor(side)} />
      </div>
    );
  };

  useEffect(() => {
    const gradient = `${type}(90deg, ${color.left} 0%, ${color.right} 100%)`;
    onChangeRef.current?.(gradient);
  }, [onChangeRef, color, type]);

  return (
    <div className={`${styles.colorPickerGradientComponent} ${className}`} style={style}>
      <div className={styles.content}>
        <div className={styles.leftColor}>
          <div className={styles.leftContent}>
            <div className={styles.colorField}>
              <div className={styles.openButton} onClick={handleOpen('left')}>
                <div className={styles.colorPreview} style={{ background: color.left }}></div>
              </div>
              {displayColorBox.left ? _renderColorBox('left') : null}
            </div>
          </div>
        </div>
        <div className={styles.gradientPreview} style={{ background: `${type}(90deg, ${color.left} 0%, ${color.right} 100%)` }}></div>
        <div className={styles.rightColor}>
          <div className={styles.rightContent}>
            <div className={styles.colorField}>
              <div className={styles.openButton} onClick={handleOpen('right')}>
                <div className={styles.colorPreview} style={{ background: color.right }}></div>
              </div>
              {displayColorBox.right ? _renderColorBox('right') : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerGradient;
