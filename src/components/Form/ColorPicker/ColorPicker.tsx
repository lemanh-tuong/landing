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

  // componentDidUpdate() {
  //   const { displayColorPicker } = this.state;
  //   displayColorPicker ? window.addEventListener('click', this.handleClick) : window.removeEventListener('click', this.handleClick);
  // }

  handleChange = (color: ColorResult) => {
    const { onChange } = this.props
    this.setState({ color: color.hex }, () => onChange(this.state.color))
  };

  render() {

    const { fieldName } = this.props;

    return (
      <div className={styles.colorPicker}>
        <div className={styles.fieldName}>
          {fieldName}
        </div>
        <div onClick={this.handleClick}>
          <div style={{
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: this.state.color
          }} />
        </div>
        {this.state.displayColorPicker ? <SketchPicker color={this.state.color} onChange={this.handleChange} /> : null}

      </div>
    );
  }
}

export default ColorPicker;
