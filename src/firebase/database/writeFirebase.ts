import database from './myFirebase';

export interface WriteFirebaseArg<T = object> {
  ref: string;
  value: T;
}

const writeFirebase = <T extends any>({ref, value}: WriteFirebaseArg<T>) => {
  database.ref(ref).set(value).catch(err => console.log(err));
  return database.ref(ref).set(value);
};

export { writeFirebase };

