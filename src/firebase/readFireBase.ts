import database from './firebase';


async function readFireBase(callback?: Function) {
  return (await database.ref('HomePage').once('value')).val();
}

export default readFireBase;
