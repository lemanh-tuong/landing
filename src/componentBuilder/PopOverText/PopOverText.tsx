import { Button, Popover } from 'antd';
import 'antd/dist/antd.css';
import React, { FC } from 'react';

export interface PopOverText {
  component: JSX.Element
  onEdit?: () => void;
}

const PopOverText: FC<PopOverText> = ({ component, onEdit }) => {

  const content = (
    <div>
      <Button shape='circle' icon={<i className="fas fa-edit"></i>} onClick={onEdit} />
    </div>
  );

  return (
    <Popover content={content}>
      {component}
    </Popover>
  )
}

export default PopOverText
