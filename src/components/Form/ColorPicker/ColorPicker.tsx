import React, { PureComponent } from 'react';
import styles from './ColorPicker.module.scss';
import { ColorResult, SketchPicker } from 'react-color';

export interface ColorPickerProps {
  onChange: (result: any) => void;
  defaultColor: string;
  fieldName: string;
}

export interface ColorPickerState {
  displayColorPicker: boolean;
  color: string;
}

class ColorPicker extends PureComponent<ColorPickerProps, ColorPickerState> {
  static defaultProps = {
    defaultColor: '#000',
    fieldName: ''
  }

  state = {
    displayColorPicker: false,
    color: this.props.defaultColor,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleChange = (color: ColorResult) => {
    const { onChange } = this.props
    this.setState({ color: color.hex }, () => onChange(this.state.color))
  };

  _renderColorBox = () => {
    const { color } = this.state;

    return (
      <div className={styles.colorBox}>
        <SketchPicker color={color} onChange={this.handleChange} />
      </div>
    )
  }

  render() {
    const { fieldName } = this.props;
    const { color, displayColorPicker } = this.state;

    return (
      <div className={styles.colorPicker}>
        <div className={styles.fieldName}>
          {fieldName}
        </div>
        <div onClick={this.handleClick}>
          <div className={styles.picked} style={{
            background: color
          }}>
            {displayColorPicker ? this._renderColorBox() : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
