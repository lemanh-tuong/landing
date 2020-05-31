import Input from 'components/Form/Input/Input';
import RichTextEditor from 'components/Form/RichTextEditor/RichTextEditor';
import React from 'react';


const TestPage = () => {

  return (
    <div style={{ marginTop: 80 }}>
      <RichTextEditor onChange={console.log} />
      <Input onChange={console.log} minLength={3} maxLength={4} type='input' regex={/\s/} required />
    </div>
  );
};


export default TestPage;
