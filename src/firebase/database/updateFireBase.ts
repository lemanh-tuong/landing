import database from './myFirebase';

export interface UpdateFireBaseArg {
  ref: string;
  updateValue: object;
}

const updateFireBase = ({ref, updateValue}: UpdateFireBaseArg) => {
  return database.ref(ref).update(updateValue);
};

export default updateFireBase;
