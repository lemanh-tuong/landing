import database from './myFirebase';

export interface UpdateFireBaseArg {
  ref: string;
  updateValue: object;
}

const updateFireBase = ({ref, updateValue}: UpdateFireBaseArg) => {
  database.ref(ref).update(updateValue)
  .then(res => console.log(res))
  .catch(err => err)
  ;
};

export default updateFireBase;
