import database from './database';


async function readFireBase() {
  return (await database.ref('HomePage').once('value')).val();
}

export default readFireBase;
