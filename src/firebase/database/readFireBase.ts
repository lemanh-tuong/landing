import database from './database';


async function readFireBase(path: string) {
  return (await database.ref(path).once('value')).val();
}

export default readFireBase;
