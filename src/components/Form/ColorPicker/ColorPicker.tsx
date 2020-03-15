import React, { FC } from 'react';
import styles from './ColorPicker.module.scss';
import { ChromePicker, ColorResult, SketchPicker } from 'react-color';

export interface ColorPickerProps {
  onChange: (result: any) => void;
  defaultColor: string;
}

class ColorPicker extends React.Component<ColorPickerProps, {}> {
  static defaultProps = {
    defaultColor: '#fff'
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
  
  render() {
    return (
      <div>
        <div  onClick={ this.handleClick }>
          <div style={{
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: this.state.color
          }} />
        </div>
        { this.state.displayColorPicker ? <SketchPicker color={ this.state.color } onChange={ this.handleChange } /> : null }

      </div>
    );
  }
}

export default ColorPicker;
