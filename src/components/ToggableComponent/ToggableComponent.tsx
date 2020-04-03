import React, { ReactNode, useState, FC } from 'react';
import styles from './ToggableComponent.module.scss';

export interface ToggableComponentProps {
  renderContent: ReactNode;
  renderHideContent: ReactNode;
}

const ToggableComponent: FC<ToggableComponentProps> = ({ renderContent, renderHideContent }) => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div className={styles.toggableComponent}>
      <div onClick={handleShow} className={`${show ? styles.show : ''} ${styles.name}`}>
        {renderContent}
      </div>
      <div className={styles.hideContent}>
        {show ? renderHideContent : null}
      </div>
    </div>
  )
}

export default ToggableComponent;
