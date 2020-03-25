import database from "./database";

const updateFireBase = (path: string, updateValue: object) => {
  database.ref(path).update(updateValue);
}

export default updateFireBase;
