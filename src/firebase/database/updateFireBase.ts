import database from "./database";

export interface UpdateFireBaseArg {
  path: string;
  updateValue: object
}

const updateFireBase = ({path, updateValue}: UpdateFireBaseArg) => {
  database.ref(path).update(updateValue);
}

export default updateFireBase;
