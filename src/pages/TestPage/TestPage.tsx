import RichTextEditor from 'components/Form/RichTextEditor/RichTextEditor';
import React from 'react';


const TestPage = () => {

  return (
    <div style={{ marginTop: 80 }}>
      <RichTextEditor onChange={console.log} />
    </div>
  );
};


export default TestPage;
