import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { ModalProps } from 'antd/lib/modal';
import React, { CSSProperties, PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './PopUp.module.scss';

interface PopUpProps {
  children: ReactNode;
  id: string;
  style?: CSSProperties;
  type?: 'default' | 'antd';
  title?: ModalProps['title'];
  onOk?: () => void;
  onCancel?: () => void;
}

interface PopUpState {
  visible: boolean;
}

const body = document.querySelector('body');

class Event {
  events: any;
  constructor() {
    this.events = {};
  }
  add = (typeEvent: string, event: any) => {
    this.events[typeEvent] = this.events[typeEvent] || [];
    this.events = {
      ...this.events,
      [typeEvent]: this.events[typeEvent].concat(event)
    };
  };
  remove = (typeEvent: string, event: any) => {
    const newEvents = this.events[typeEvent].filter((e: any) => e !== event);
    this.events = {
      ...this.events,
      [typeEvent]: [...newEvents]
    };
  };
  emit = (typeEvent: string) => {
    this.events[typeEvent].forEach((event: any) => {
      event();
    });
  };
}

const controller = new Event();

class PopUp extends PureComponent<PopUpProps> {
  static show(id: string) {
    return () => {
      controller.emit(`show-${id}`);
    };
  }

  static hide(id: string) {
    return () => {
      controller.emit(`hide-${id}`);
    };
  }

  static defaultProps = {
    type: 'default'
  };

  state: PopUpState = {
    visible: false
  };

  componentDidMount() {
    const { id } = this.props;
    controller.add(`show-${id}`, this.handleShow);
    controller.add(`hide-${id}`, this.handleHide);
  }

  componentWillUnmount() {
    const { id } = this.props;
    controller.remove(`show-${id}`, this.handleShow);
    controller.remove(`hide-${id}`, this.handleHide);
  }

  handleShow = () => {
    this.setState({
      visible: true
    });

  };

  handleHide = () => {
    this.setState({
      visible: false
    });
  };

  handleOk = () => {
    const { onOk } = this.props;
    onOk?.();
    this.setState({
      visible: false
    });
  };
  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel?.();
    this.setState({
      visible: false
    });
  };

  _renderSwitch = () => {
    const { type, children, style, title } = this.props;
    const { visible } = this.state;
    switch (type) {
      case 'default':
        return (
          <>
            <div className={styles.overlay} onClick={this.handleHide} />
            <div className={styles.closeBtn} onClick={this.handleHide} >
              <button className={styles.btn}>Close</button>
            </div>
            <div className={styles.content2} style={style}>{children}</div>
          </>
        );
      case 'antd':
        return (
          <Modal title={title} style={style} closeIcon={<i className="fas fa-times"></i>} bodyStyle={{ height: '50vh', overflow: 'auto', border: '1px solid' }} centered visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} className={styles.popUpContent}>
            {children}
          </Modal>
        );
      default:
        return null;
    }
  };

  render() {
    const { visible } = this.state;
    if (!visible) {
      return null;
    }
    return createPortal(
      <div className={styles.popUp}>
        {this._renderSwitch()}
      </div>, body as Element
    );
  }
}

export default PopUp;
