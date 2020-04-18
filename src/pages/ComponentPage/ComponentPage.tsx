import React from 'react';
import EditableContent from '../../componentBuilder/EditableContent/EditableContent';

const ComponentPage = () => {
  return (
    <EditableContent
      maxCount={50}
      defaultText="Test"
    />
  )
}

export default ComponentPage;
