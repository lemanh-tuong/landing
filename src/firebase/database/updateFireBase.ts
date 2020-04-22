import database from "./myFirebase";

export interface UpdateFireBaseArg {
  path: string;
  updateValue: object
}

const updateFireBase = ({path, updateValue}: UpdateFireBaseArg) => {
  database.ref(path).update(updateValue)
  .then(res => console.log(res))
  .catch(err => err)
  ;
}

export default updateFireBase;
