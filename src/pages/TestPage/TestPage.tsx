import overWriteFirebase from 'firebase/database/test';
import React from 'react';

const TestPage = () => {
  const test = () => {
    console.log(overWriteFirebase());
  }
  test();
  return (
    <div>TestPage </div>
  )
}

export default TestPage;
