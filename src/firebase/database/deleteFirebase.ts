import database from "./myFirebase";

const deleteFirebase = (nowIndexSection: number) => {
  const elementRef = database.ref(`/HomePage/elements/${nowIndexSection}`);
  elementRef.onDisconnect();
}

export default deleteFirebase;
