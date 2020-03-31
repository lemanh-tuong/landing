import React, { ReactNode, useState, FC } from 'react';

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
    <div onClick={handleShow} className="toggable component">
      {renderContent}
      {show ? renderHideContent : null}
    </div>
  )
}

export default ToggableComponent;
