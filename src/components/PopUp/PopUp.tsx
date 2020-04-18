import React, { CSSProperties, PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './PopUp.module.scss';

interface PopUpProps {
  children: ReactNode;
  id: string;
  style?: CSSProperties;
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

  render() {
    const { children, style } = this.props;
    const { visible } = this.state;
    if (!visible) {
      return null;
    }
    return createPortal(<div className={styles.popUp}>
      <div className={styles.overlay} onClick={this.handleHide} />
      <div className={styles.content} style={style}>{children}</div>
    </div>, body as Element);
  }
}

export default PopUp;
