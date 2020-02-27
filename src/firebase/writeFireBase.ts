import database from './firebase';
function writeUserData(userId: any
  , name: any, email: any, imageUrl: any) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
export default writeUserData;
