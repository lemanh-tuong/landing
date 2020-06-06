import SelectIcon, { SelectItemType } from 'components/Form/SelectIcon/SelectIcon';
import React from 'react';

const data: SelectItemType[] = [
  {
    classIcon: 'fas fa-shopping-cart',
    nameIcon: 'cart'
  },
  {
    classIcon: 'fas fa-search',
    nameIcon: 'search'
  },
  {
    classIcon: 'fas fa-edit',
    nameIcon: 'save'
  },
  {
    classIcon: 'fas fa-angle-double-left',
    nameIcon: 'angle-double-left'
  },
  {
    classIcon: 'fas fa-angle-double-right',
    nameIcon: 'angle-double-right'
  },
  {
    classIcon: 'fas fa-angle-left',
    nameIcon: 'angle-left'
  },
  {
    classIcon: 'fas fa-angle-right',
    nameIcon: 'angle-right'
  },
]

const TestPage = () => {

  return (
    <div style={{ marginTop: 80 }}>
      <SelectIcon label={'test'} listIcon={data} defaultClassIconSelected={'fas fa-save'} onChoose={console.log} />
    </div>
  );
};


export default TestPage;
