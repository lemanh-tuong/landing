
import AlertConfirm from 'components/AlertConfirm/AlertConfirm';
import PopUp from 'components/PopUp/PopUp';
import React from 'react';

const TestPage = () => {

  return <div>
    <AlertConfirm onOK={() => console.log("OK")} onCancel={() => console.log("Cancel")} />
    <button onClick={PopUp.show('alert-confirm')}>Click</button>
  </div>;
};


export default TestPage;
