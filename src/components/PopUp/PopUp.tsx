/* eslint-disable react/sort-comp */
import React, { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './PopUp.module.scss';

interface PopUpProps {
  children: ReactNode;
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

class PopUp extends Component<PopUpProps> {
  state: PopUpState = {
    visible: false
  };

  componentDidMount() {
    controller.add('show', this.handleShow);
    controller.add('hide', this.handleHide);
  }
  componentWillUnmount() {
    controller.remove('show', this.handleShow);
    controller.remove('hide', this.handleHide);
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

  static show() {
    controller.emit('show');
  }

  static hide() {
    controller.emit('hide');
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    if (!visible) {
      return null;
    }
    return createPortal(<div className={styles.popUp}>
      <div className={styles.overlay} onClick={() => PopUp.hide()} />
      <div className={styles.content}>{children}</div>
    </div>, body as Element);
  }
}


export default PopUp;


