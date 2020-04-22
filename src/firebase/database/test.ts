import database from "./myFirebase";

const overWriteFirebase = async (nowIndexSection?: number) => {
  const elementsRef = database.ref(`/HomePage/elements/1`);
  const newSection = elementsRef.push({test: "Test"});
}

export default overWriteFirebase;
