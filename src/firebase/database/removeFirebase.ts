import database from './myFirebase';

const removeFirebase = ({ref}: {ref: string}) => {
  return database.ref(ref).remove();
};

export { removeFirebase };
