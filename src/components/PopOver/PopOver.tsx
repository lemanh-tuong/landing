import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { PopoverProps } from 'antd/lib/popover';
import React, { PureComponent } from 'react';

interface PopOverState {
  visible: boolean;
}

class PopOver extends PureComponent<PopoverProps & { id: string }, PopOverState> {

  state = {
    visible: false
  };

  handleVisibleChange = (visible: boolean) => {
    const { onVisibleChange } = this.props;
    onVisibleChange?.(visible);
    this.setState({ visible });
  };

  render() {
    const { visible } = this.state;
    const { content, title, children, className, style, trigger } = this.props;
    return (
      <Popover
        content={content}
        title={title}
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
        className={className}
        trigger={trigger}
        style={style}>
        {children}
      </Popover>
    )
  }
}

export default PopOver;
