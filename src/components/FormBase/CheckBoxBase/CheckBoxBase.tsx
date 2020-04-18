import React, { ReactNode, FC, useState } from 'react';

export interface CheckBoxBase {
  defaultChecked?: boolean;
  renderItem: (checked: boolean, onCheck: () => void) => ReactNode;
  onChange?: (checked: boolean) => void;
}

const CheckBoxBase: FC<CheckBoxBase> = ({ defaultChecked = false, renderItem, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked(!checked);
    onChange?.(!checked);
  }

  // useEffect(() => {
  //   onChangeRef.current?.(checked);
  // }, [onChangeRef, checked])

  return <>{renderItem(checked, handleChange)}</>
}

export default CheckBoxBase;
