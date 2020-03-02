import database from './firebase';


async function readFireBase(callback: Function) {
  return database.ref('HomePage').once('value', (snap) => {
    callback(snap.val());
  });
}

export default readFireBase;
