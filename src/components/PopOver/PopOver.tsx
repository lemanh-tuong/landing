import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { PopoverProps } from 'antd/lib/popover';
import React, { PureComponent } from 'react';

interface PopOverState {
  visible: boolean;
}

class PopOver extends PureComponent<PopoverProps & { id: string }, PopOverState> {
  state = {
    visible: false,
  };

  handleVisibleChange = (visible: boolean) => {
    const { onVisibleChange } = this.props;
    onVisibleChange?.(visible);
    this.setState({ visible });
  };

  render() {
    const { children } = this.props;
    return (
      <Popover onVisibleChange={this.handleVisibleChange} {...this.props}>
        {children}
      </Popover>
    );
  }
}

export default PopOver;
