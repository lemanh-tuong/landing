import database from "./myFirebase";

export interface WriteFirebaseArg {
  ref: string;
  value: object;
}

const writeFirebase = ({ref, value}: WriteFirebaseArg) => {
  database.ref(ref).set({
    ...value
  }).then(res => "Added")
  .catch(err => err);
}

export { writeFirebase };
