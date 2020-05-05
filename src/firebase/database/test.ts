import database from './myFirebase';

const overWriteFirebase = async () => {
  const elementsRef = database.ref(`/HomePage/elements/1`);
  console.log(elementsRef);
  // const newSection = elementsRef.push({test: 'Test'});
};

export default overWriteFirebase;
