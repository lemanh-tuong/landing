import PopUp from 'components/PopUp/PopUp';
import React, { FC } from 'react';

export interface AlertConfirmProps {
  onOK: () => void;
  onCancel: () => void;
}

const AlertConfirm: FC<AlertConfirmProps> = ({ onOK, onCancel }) => {
  return (
    <PopUp id={`alert-confirm`} type='antd' style={{ width: 'initial' }}>
      Confirm Delete
    </PopUp>
  )
}

export default AlertConfirm;
